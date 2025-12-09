use serde_json::{Value, json};
use wasm_bindgen::prelude::*;
use std::cell::RefCell;
use chrono::Datelike;

#[wasm_bindgen]
pub fn run_simulation(family_json: &str, years: u32) -> String {
    // Parse input JSON into flexible structure
    let family: Value = match serde_json::from_str(family_json) {
        Ok(v) => v,
        Err(_) => return "[]".to_string(),
    };

    // Configuration defaults similar to TS engine
    let default_inflation = 0.03_f64;
    let default_salary_growth = 0.03_f64;
    let default_investment_return = 0.07_f64;
    let default_cash_return = 0.01_f64;

    let start_year = chrono::Utc::now().year();

    // Helper to read year from date string if possible
    fn year_from_date_opt(v: &Value) -> Option<i32> {
        if let Some(s) = v.as_str() {
            if s.len() >= 4 {
                if let Ok(y) = s[0..4].parse::<i32>() {
                    return Some(y);
                }
            }
        }
        None
    }

    // Get main person (first member)
    let main_person = family.get("members").and_then(|m| m.get(0));
    if main_person.is_none() {
        return "[]".to_string();
    }
    let main_person = main_person.unwrap();

    let person_start_year = year_from_date_opt(main_person.get("startDate").unwrap_or(&Value::Null)).unwrap_or(start_year);

    let mut results: Vec<Value> = Vec::new();

    // Clone wealth objects array or create if missing
    let mut wealth_objects = match main_person.get("wealth").and_then(|w| w.get("wealthObjects")).cloned() {
        Some(Value::Array(arr)) => arr,
        _ => Vec::new(),
    };

    let mut previous_expenses = 0.0_f64;

    for i in 0..=years {
        let current_year = start_year + i as i32;
        let current_age = (start_year - person_start_year) + i as i32;

        // Calculate annual income
        let mut annual_income = 0.0_f64;
        if let Some(careers) = main_person.get("careers").and_then(|c| c.as_array()) {
            for career in careers.iter() {
                let career_start = year_from_date_opt(career.get("startDate").unwrap_or(&Value::Null)).unwrap_or(start_year);
                let career_end = year_from_date_opt(career.get("endDate").unwrap_or(&Value::Null)).unwrap_or(start_year + 100);
                if current_year >= career_start && current_year <= career_end {
                    if let Some(financials) = career.get("financials").and_then(|f| f.as_array()) {
                        for fin in financials.iter() {
                            let amount = fin.get("amount").and_then(|a| a.as_f64()).unwrap_or(0.0);
                            let growth_factor = (1.0 + default_salary_growth).powi(i as i32);
                            annual_income += amount * 12.0 * growth_factor;
                        }
                    }
                }
            }
        }

        // Expenses
        let annual_expenses = if i == 0 {
            // heuristic: 50% of income
            annual_income * 0.5
        } else {
            previous_expenses * (1.0 + default_inflation)
        };

        previous_expenses = annual_expenses;

        let savings = (annual_income - annual_expenses).max(0.0);

        // Distribute savings
        let savings_to_cash = savings * 0.2;
        let savings_to_invest = savings * 0.8;

        // Ensure there's at least one cash and one invest bucket
        let mut has_cash = false;
        let mut has_invest = false;
        for obj in wealth_objects.iter() {
            if let Some(liq) = obj.get("liquidityTier").and_then(|l| l.as_i64()) {
                if liq == 0 { has_cash = true; }
                if liq >= 30 { has_invest = true; }
            }
        }
        if !has_cash {
            let cash = json!({
                "id": "generated-cash",
                "name": "Cash Savings",
                "initialValue": 0.0,
                "finalValue": 0.0,
                "startDate": format!("{}-01-01T00:00:00Z", start_year),
                "endDate": format!("{}-01-01T00:00:00Z", start_year + 100),
                "financials": [],
                "liquidityTier": 0
            });
            wealth_objects.push(cash);
        }
        if !has_invest {
            let invest = json!({
                "id": "generated-invest",
                "name": "Investments",
                "initialValue": 0.0,
                "finalValue": 0.0,
                "startDate": format!("{}-01-01T00:00:00Z", start_year),
                "endDate": format!("{}-01-01T00:00:00Z", start_year + 100),
                "financials": [],
                "liquidityTier": 30
            });
            wealth_objects.push(invest);
        }

        let mut total_assets = 0.0_f64;
        for obj in wealth_objects.iter_mut() {
            let liq = obj.get("liquidityTier").and_then(|l| l.as_i64()).unwrap_or(0);
            let growth = if liq >= 30 { default_investment_return } else { default_cash_return };

            let init_val = obj.get("initialValue").and_then(|v| v.as_f64()).unwrap_or(0.0);
            let mut new_val = init_val * (1.0 + growth);

            if liq == 0 {
                new_val += savings_to_cash;
            } else if liq >= 30 {
                new_val += savings_to_invest;
            }

            // update initialValue to new value
            if let Some(inival) = obj.as_object_mut() {
                inival.insert("initialValue".to_string(), Value::from(new_val));
            }

            total_assets += new_val;
        }

        let result = json!({
            "year": current_year,
            "age": current_age,
            "netWorth": total_assets,
            "totalAssets": total_assets,
            "totalIncome": annual_income,
            "totalExpenses": annual_expenses,
            "savings": savings
        });
        results.push(result);
    }

    serde_json::to_string(&results).unwrap_or_else(|_| "[]".to_string())
}

// Optional: expose a small ping for testing
#[wasm_bindgen]
pub fn ping() -> String {
    "pong".to_string()
}
