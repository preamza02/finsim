# FinSim Data Model Specification

## Overview

This document defines the data structures and relationships for FinSim's financial planning system. The data model is designed to be flexible, extensible, and capable of supporting complex financial scenarios.

## Core Principles

1. **Flexibility**: Support diverse financial situations
2. **Accuracy**: Maintain precision in calculations
3. **Auditability**: Track changes and history
4. **Privacy**: Secure and encrypted storage
5. **Portability**: Standard formats for import/export

## Entity Relationship Diagram

```
User (1) ─────< (many) Profile
              │
              ├─────< (many) Income
              │
              ├─────< (many) Expense
              │
              ├─────< (many) Asset
              │       └─────< (many) Transaction
              │
              ├─────< (many) Debt
              │       └─────< (many) Payment
              │
              ├─────< (many) Goal
              │
              ├─────< (many) Projection
              │       └─────< (many) ProjectionYear
              │
              └─────< (many) Simulation
                      └─────< (many) SimulationResult
```

## Entities

### User

Represents a registered user of the system.

```typescript
interface User {
  id: string;                    // Unique identifier (UUID)
  email: string;                 // Email address (unique)
  passwordHash: string;          // Hashed password
  emailVerified: boolean;        // Email verification status
  mfaEnabled: boolean;           // Multi-factor auth enabled
  mfaSecret?: string;            // MFA secret (if enabled)
  createdAt: Date;              // Account creation timestamp
  updatedAt: Date;              // Last update timestamp
  lastLoginAt?: Date;           // Last login timestamp
  settings: UserSettings;        // User preferences
}

interface UserSettings {
  theme: 'light' | 'dark' | 'auto';
  currency: string;              // ISO 4217 currency code (USD, EUR, etc.)
  locale: string;                // Locale (en-US, etc.)
  dateFormat: string;            // Date format preference
  defaultInflationRate: number;  // Default inflation assumption
  defaultReturnRate: number;     // Default investment return
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  notifications: NotificationSettings;
}

interface NotificationSettings {
  email: boolean;
  goalReminders: boolean;
  projectionsReady: boolean;
  securityAlerts: boolean;
}
```

### Profile

User's personal and financial profile information.

```typescript
interface Profile {
  id: string;
  userId: string;               // Foreign key to User
  firstName: string;
  lastName: string;
  birthDate: Date;              // Date of birth
  currentAge?: number;          // Calculated from birthDate
  retirementAge: number;        // Planned retirement age
  lifeExpectancy: number;       // Expected lifespan
  maritalStatus: 'single' | 'married' | 'divorced' | 'widowed';
  dependents: number;           // Number of dependents
  state?: string;               // State/province for tax purposes
  country: string;              // Country
  zipCode?: string;             // Postal code
  taxFilingStatus: 'single' | 'married_joint' | 'married_separate' | 'head_of_household';
  createdAt: Date;
  updatedAt: Date;
}
```

### Income

Income sources and their properties.

```typescript
interface Income {
  id: string;
  userId: string;
  name: string;                 // Income source name
  description?: string;         // Optional description
  type: IncomeType;
  amount: number;               // Amount per period
  frequency: Frequency;
  startDate: Date;              // When income starts
  endDate?: Date;               // When income ends (null = indefinite)
  growthRate: number;           // Annual growth rate (decimal, e.g., 0.03 = 3%)
  inflationAdjusted: boolean;   // Whether amount adjusts with inflation
  taxTreatment: TaxTreatment;
  isActive: boolean;            // Currently active
  metadata: Record<string, any>; // Flexible metadata
  createdAt: Date;
  updatedAt: Date;
}

type IncomeType = 
  | 'salary'
  | 'bonus'
  | 'commission'
  | 'self_employment'
  | 'business'
  | 'rental'
  | 'dividend'
  | 'interest'
  | 'social_security'
  | 'pension'
  | 'annuity'
  | 'retirement_withdrawal'
  | 'gift'
  | 'inheritance'
  | 'other';

type Frequency = 
  | 'one_time'
  | 'weekly'
  | 'bi_weekly'
  | 'semi_monthly'
  | 'monthly'
  | 'quarterly'
  | 'semi_annually'
  | 'annually';

type TaxTreatment = 
  | 'taxable'          // Fully taxable
  | 'tax_deferred'     // 401k, Traditional IRA
  | 'tax_free'         // Roth IRA, HSA (qualified)
  | 'capital_gains'    // Investment gains
  | 'partially_taxable'; // Social Security
```

### Expense

Expenses and their categories.

```typescript
interface Expense {
  id: string;
  userId: string;
  name: string;
  description?: string;
  category: ExpenseCategory;
  amount: number;
  frequency: Frequency;
  startDate: Date;
  endDate?: Date;
  inflationAdjusted: boolean;
  inflationRate?: number;       // Custom inflation rate (overrides default)
  priority: number;             // 1-5, for optimization scenarios
  isDiscretionary: boolean;     // Can be reduced if needed
  isActive: boolean;
  tags: string[];               // User-defined tags
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

type ExpenseCategory = 
  | 'housing'           // Rent, mortgage, property tax, insurance
  | 'utilities'         // Electric, gas, water, internet
  | 'transportation'    // Car payment, gas, maintenance, insurance
  | 'food'              // Groceries, dining out
  | 'healthcare'        // Insurance, copays, prescriptions
  | 'personal'          // Clothing, grooming, personal care
  | 'entertainment'     // Subscriptions, hobbies, travel
  | 'children'          // Childcare, education, activities
  | 'pets'              // Food, veterinary, supplies
  | 'insurance'         // Life, disability, umbrella
  | 'charitable'        // Donations, tithing
  | 'education'         // Tuition, books, supplies
  | 'debt_payment'      // Loan payments (tracked separately in Debt)
  | 'taxes'             // Property tax, estimated taxes
  | 'savings'           // Forced savings (tracked separately)
  | 'other';
```

### Asset

Assets including investments, real estate, and other valuables.

```typescript
interface Asset {
  id: string;
  userId: string;
  name: string;
  description?: string;
  type: AssetType;
  subType?: string;             // Asset-specific subtype
  currentValue: number;         // Current value
  originalValue?: number;       // Purchase price/original value
  purchaseDate?: Date;          // Acquisition date
  expectedReturnRate: number;   // Expected annual return (decimal)
  volatility?: number;          // Standard deviation of returns
  assetAllocation?: AssetAllocation;
  contributions?: Contribution;  // Regular contributions
  withdrawals?: Withdrawal;     // Regular withdrawals
  taxTreatment: TaxTreatment;
  linkedDebt?: string;          // Linked debt ID (e.g., mortgage)
  isActive: boolean;
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

type AssetType = 
  | 'cash'              // Checking, savings
  | 'investment'        // Brokerage account
  | 'retirement_401k'   // 401(k)
  | 'retirement_403b'   // 403(b)
  | 'retirement_trad_ira' // Traditional IRA
  | 'retirement_roth_ira' // Roth IRA
  | 'retirement_sep_ira'  // SEP IRA
  | 'retirement_simple'   // SIMPLE IRA
  | 'hsa'               // Health Savings Account
  | 'education_529'     // 529 Education Savings
  | 'education_coverdell' // Coverdell ESA
  | 'real_estate'       // Real estate property
  | 'vehicle'           // Cars, boats, etc.
  | 'business'          // Business equity
  | 'crypto'            // Cryptocurrency
  | 'collectible'       // Art, antiques, collectibles
  | 'other';

interface AssetAllocation {
  stocks: number;       // Percentage in stocks (0-1)
  bonds: number;        // Percentage in bonds (0-1)
  cash: number;         // Percentage in cash (0-1)
  other: number;        // Percentage in other (0-1)
  // Must sum to 1.0
}

interface Contribution {
  amount: number;
  frequency: Frequency;
  startDate: Date;
  endDate?: Date;
  employerMatch?: number;      // Employer match rate (decimal)
  employerMatchLimit?: number; // Max employer match
  annualLimit?: number;        // Annual contribution limit
  catchUpContribution?: boolean; // Age 50+ catch-up
}

interface Withdrawal {
  amount: number;
  frequency: Frequency;
  startDate: Date;
  endDate?: Date;
  rmdRequired?: boolean;       // Required Minimum Distribution
  rmdStartAge?: number;        // RMD start age (default 72)
}
```

### Transaction

Individual transactions for assets (buy, sell, contribution, withdrawal).

```typescript
interface Transaction {
  id: string;
  assetId: string;
  userId: string;
  type: TransactionType;
  amount: number;
  date: Date;
  description?: string;
  taxImplications?: TaxImplication;
  metadata: Record<string, any>;
  createdAt: Date;
}

type TransactionType = 
  | 'contribution'
  | 'withdrawal'
  | 'dividend'
  | 'interest'
  | 'capital_gain'
  | 'capital_loss'
  | 'transfer_in'
  | 'transfer_out'
  | 'fee';

interface TaxImplication {
  taxableAmount: number;
  taxYear: number;
  taxCategory: 'ordinary_income' | 'capital_gains' | 'tax_free';
}
```

### Debt

Debts including mortgages, loans, and credit cards.

```typescript
interface Debt {
  id: string;
  userId: string;
  name: string;
  description?: string;
  type: DebtType;
  originalBalance: number;
  currentBalance: number;
  interestRate: number;         // Annual rate (decimal)
  term: number;                 // Loan term in months
  monthlyPayment: number;
  minimumPayment?: number;      // For credit cards
  startDate: Date;
  maturityDate?: Date;          // Calculated or set
  linkedAsset?: string;         // Linked asset ID
  taxDeductible: boolean;       // Interest tax deductible
  extraPayment?: number;        // Extra monthly payment
  isActive: boolean;
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

type DebtType = 
  | 'mortgage'          // Home mortgage
  | 'heloc'             // Home Equity Line of Credit
  | 'student_loan'      // Student loan
  | 'auto_loan'         // Auto loan
  | 'personal_loan'     // Personal loan
  | 'credit_card'       // Credit card
  | 'business_loan'     // Business loan
  | 'other';
```

### Payment

Individual debt payments for tracking and amortization.

```typescript
interface Payment {
  id: string;
  debtId: string;
  userId: string;
  date: Date;
  amount: number;
  principal: number;
  interest: number;
  balance: number;              // Remaining balance after payment
  metadata: Record<string, any>;
  createdAt: Date;
}
```

### Goal

Financial goals with tracking.

```typescript
interface Goal {
  id: string;
  userId: string;
  name: string;
  description?: string;
  type: GoalType;
  targetAmount: number;
  currentAmount: number;
  targetDate: Date;
  priority: number;             // 1-5 ranking
  linkedAssets: string[];       // Asset IDs funding this goal
  monthlyContribution?: number;
  onTrack: boolean;             // Calculated field
  projectedCompletion?: Date;   // Calculated field
  isActive: boolean;
  metadata: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

type GoalType = 
  | 'retirement'
  | 'home_purchase'
  | 'emergency_fund'
  | 'education'
  | 'vacation'
  | 'vehicle'
  | 'debt_payoff'
  | 'major_purchase'
  | 'custom';
```

### Projection

Financial projections over time.

```typescript
interface Projection {
  id: string;
  userId: string;
  name: string;
  description?: string;
  startYear: number;
  endYear: number;
  assumptions: ProjectionAssumptions;
  years: ProjectionYear[];
  summary: ProjectionSummary;
  createdAt: Date;
  updatedAt: Date;
}

interface ProjectionAssumptions {
  inflationRate: number;
  marketReturnRate: number;
  stockReturnRate: number;
  bondReturnRate: number;
  safeWithdrawalRate: number;
  taxRate: number;              // Average tax rate
  socialSecurityStartAge?: number;
  pensionStartAge?: number;
}

interface ProjectionYear {
  year: number;
  age: number;
  income: number;
  expenses: number;
  cashFlow: number;             // income - expenses - taxes
  assets: number;
  debts: number;
  netWorth: number;
  taxes: number;
  savingsRate: number;          // Percentage of income saved
  withdrawalRate?: number;      // If in retirement
}

interface ProjectionSummary {
  finalNetWorth: number;
  totalIncome: number;
  totalExpenses: number;
  totalTaxes: number;
  totalSavings: number;
  retirementReadiness: number;  // 0-100 score
  yearsOfFunding: number;       // Years money lasts
  probabilityOfSuccess?: number; // From simulation
}
```

### Simulation

Monte Carlo simulation results.

```typescript
interface Simulation {
  id: string;
  userId: string;
  projectionId: string;
  name: string;
  description?: string;
  iterations: number;
  assumptions: SimulationAssumptions;
  results: SimulationResults;
  scenarios: SimulationScenario[];
  completedAt: Date;
  createdAt: Date;
}

interface SimulationAssumptions extends ProjectionAssumptions {
  inflationVolatility: number;
  marketVolatility: number;
  sequenceRisk: boolean;        // Model sequence of returns risk
}

interface SimulationResults {
  successRate: number;          // Percentage of successful scenarios
  percentiles: {
    p10: number;                // 10th percentile outcome
    p25: number;                // 25th percentile
    p50: number;                // Median
    p75: number;                // 75th percentile
    p90: number;                // 90th percentile
  };
  worstCase: SimulationScenario;
  bestCase: SimulationScenario;
  median: SimulationScenario;
}

interface SimulationScenario {
  scenarioNumber: number;
  finalNetWorth: number;
  yearsOfFunding: number;
  yearlyValues: number[];       // Net worth by year
  success: boolean;             // Money didn't run out
}
```

## Data Validation Rules

### Constraints

1. **Monetary Values**
   - Must be non-negative for assets, debts, income, expenses
   - Maximum value: 1 trillion (prevents overflow)
   - Precision: 2 decimal places for currency

2. **Percentages**
   - Must be between 0 and 1 (decimal representation)
   - Or 0 to 100 if using integer percentage

3. **Dates**
   - Birth date must be in the past
   - End dates must be after start dates
   - Retirement age must be > current age
   - Life expectancy must be > retirement age

4. **Rates**
   - Growth rates: -50% to 100% annually
   - Return rates: -50% to 50% annually
   - Interest rates: 0% to 30% annually

### Relationships

1. **User to Entities**: One-to-many relationships
2. **Asset to Transactions**: One-to-many
3. **Debt to Payments**: One-to-many
4. **Goal to Assets**: Many-to-many (via linkedAssets array)
5. **Projection to User**: Many-to-one
6. **Simulation to Projection**: One-to-one or many-to-one

## Indexes

For performance optimization:

```typescript
// Users
Index on: email (unique)
Index on: id (primary)

// Income
Index on: userId, isActive
Index on: userId, type

// Expenses
Index on: userId, isActive
Index on: userId, category

// Assets
Index on: userId, isActive
Index on: userId, type

// Debts
Index on: userId, isActive
Index on: userId, type

// Goals
Index on: userId, isActive
Index on: userId, targetDate

// Transactions
Index on: assetId, date
Index on: userId, date

// Projections
Index on: userId, createdAt

// Simulations
Index on: userId, createdAt
```

## Storage Considerations

### Local Storage (IndexedDB)

- Object stores for each entity type
- Indexes for efficient queries
- Versioned schema for migrations
- Size limit considerations (browser-dependent)

### Cloud Storage (Optional)

- Encrypted at rest
- Efficient synchronization
- Conflict resolution strategies
- Backup and recovery

## Data Migration

### Version Control

Each schema version shall have:
- Version number (semantic versioning)
- Migration scripts
- Rollback procedures
- Testing requirements

### Migration Strategy

1. Detect current schema version
2. Apply migrations sequentially
3. Validate data integrity
4. Update version number
5. Notify user of completion

## Data Privacy

### PII (Personally Identifiable Information)

Fields containing PII:
- User.email
- Profile.firstName
- Profile.lastName
- Profile.zipCode

### Encryption

- Passwords: bcrypt/Argon2
- Sensitive fields: AES-256
- Cloud storage: End-to-end encryption
- Backup files: Encrypted

## Export Format

### JSON Export Schema

```json
{
  "version": "1.0.0",
  "exportDate": "2024-01-15T10:30:00Z",
  "user": { /* User object */ },
  "profile": { /* Profile object */ },
  "incomes": [ /* Array of Income */ ],
  "expenses": [ /* Array of Expense */ ],
  "assets": [ /* Array of Asset */ ],
  "debts": [ /* Array of Debt */ ],
  "goals": [ /* Array of Goal */ ],
  "projections": [ /* Array of Projection */ ],
  "simulations": [ /* Array of Simulation */ ]
}
```

## References

- [Architecture Documentation](../docs/ARCHITECTURE.md)
- [Requirements Specification](REQUIREMENTS.md)
- [Security Specifications](SECURITY.md)
- [API Documentation](../docs/API.md)

---

*This data model specification is a living document and will evolve with the project.*
