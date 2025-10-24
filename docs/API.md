# FinSim API Documentation

## Overview

The FinSim API provides programmatic access to financial planning and simulation features. The API follows RESTful principles and returns JSON responses.

## Base URL

```
https://api.finsim.app/v1
```

For local development:
```
http://localhost:3000/api/v1
```

## Authentication

### API Keys (Future)

API authentication will use JWT tokens or API keys for secure access.

```http
Authorization: Bearer YOUR_API_TOKEN
```

## Common Headers

```http
Content-Type: application/json
Accept: application/json
Authorization: Bearer YOUR_API_TOKEN
```

## Response Format

### Success Response

```json
{
  "success": true,
  "data": {
    // Response data
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "1.0.0"
  }
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "amount",
        "message": "Amount must be a positive number"
      }
    ]
  },
  "meta": {
    "timestamp": "2024-01-15T10:30:00Z",
    "version": "1.0.0"
  }
}
```

## Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Invalid input data |
| `UNAUTHORIZED` | 401 | Authentication required |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `CONFLICT` | 409 | Resource conflict |
| `RATE_LIMIT` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |

## Endpoints

### Users

#### Get Current User

```http
GET /users/me
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "email": "user@example.com",
    "profile": {
      "name": "John Doe",
      "birthDate": "1985-06-15",
      "retirementAge": 65,
      "lifeExpectancy": 95
    },
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

#### Update User Profile

```http
PATCH /users/me/profile
```

**Request Body:**
```json
{
  "name": "John Doe",
  "birthDate": "1985-06-15",
  "retirementAge": 65,
  "lifeExpectancy": 95
}
```

### Income

#### List Income Sources

```http
GET /incomes
```

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 50)
- `active` (optional): Filter by active status (true/false)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "income_123",
      "name": "Primary Salary",
      "amount": 100000,
      "frequency": "annually",
      "startDate": "2020-01-01",
      "endDate": "2050-12-31",
      "growthRate": 0.03,
      "taxable": true,
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 50,
    "total": 5,
    "pages": 1
  }
}
```

#### Get Income by ID

```http
GET /incomes/:id
```

#### Create Income

```http
POST /incomes
```

**Request Body:**
```json
{
  "name": "Primary Salary",
  "amount": 100000,
  "frequency": "annually",
  "startDate": "2020-01-01",
  "endDate": "2050-12-31",
  "growthRate": 0.03,
  "taxable": true
}
```

#### Update Income

```http
PATCH /incomes/:id
```

#### Delete Income

```http
DELETE /incomes/:id
```

### Expenses

#### List Expenses

```http
GET /expenses
```

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `category` (optional): Filter by category
- `active` (optional): Filter by active status

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "expense_123",
      "name": "Rent",
      "category": "housing",
      "amount": 2000,
      "frequency": "monthly",
      "inflationAdjusted": true,
      "inflationRate": 0.03,
      "startDate": "2024-01-01",
      "endDate": null,
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### Create Expense

```http
POST /expenses
```

**Request Body:**
```json
{
  "name": "Rent",
  "category": "housing",
  "amount": 2000,
  "frequency": "monthly",
  "inflationAdjusted": true,
  "inflationRate": 0.03,
  "startDate": "2024-01-01"
}
```

#### Update Expense

```http
PATCH /expenses/:id
```

#### Delete Expense

```http
DELETE /expenses/:id
```

### Assets

#### List Assets

```http
GET /assets
```

**Query Parameters:**
- `page` (optional): Page number
- `limit` (optional): Items per page
- `type` (optional): Filter by asset type

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "asset_123",
      "name": "401k",
      "type": "retirement_401k",
      "value": 250000,
      "returnRate": 0.07,
      "contributions": {
        "amount": 19500,
        "frequency": "annually",
        "employerMatch": 0.06
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### Create Asset

```http
POST /assets
```

**Request Body:**
```json
{
  "name": "401k",
  "type": "retirement_401k",
  "value": 250000,
  "returnRate": 0.07,
  "contributions": {
    "amount": 19500,
    "frequency": "annually",
    "employerMatch": 0.06
  }
}
```

#### Update Asset

```http
PATCH /assets/:id
```

#### Delete Asset

```http
DELETE /assets/:id
```

### Debts

#### List Debts

```http
GET /debts
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "debt_123",
      "name": "Mortgage",
      "type": "mortgage",
      "balance": 300000,
      "interestRate": 0.045,
      "monthlyPayment": 1520,
      "startDate": "2020-01-01",
      "term": 360,
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### Create Debt

```http
POST /debts
```

**Request Body:**
```json
{
  "name": "Mortgage",
  "type": "mortgage",
  "balance": 300000,
  "interestRate": 0.045,
  "monthlyPayment": 1520,
  "startDate": "2020-01-01",
  "term": 360
}
```

#### Update Debt

```http
PATCH /debts/:id
```

#### Delete Debt

```http
DELETE /debts/:id
```

### Goals

#### List Goals

```http
GET /goals
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "goal_123",
      "name": "Emergency Fund",
      "type": "emergency_fund",
      "targetAmount": 30000,
      "currentAmount": 15000,
      "targetDate": "2025-12-31",
      "priority": 1,
      "linkedAssets": ["asset_456"],
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### Create Goal

```http
POST /goals
```

#### Update Goal

```http
PATCH /goals/:id
```

#### Delete Goal

```http
DELETE /goals/:id
```

### Projections

#### Generate Projection

```http
POST /projections/generate
```

**Request Body:**
```json
{
  "startYear": 2024,
  "endYear": 2054,
  "assumptions": {
    "inflationRate": 0.03,
    "marketReturn": 0.07,
    "taxRate": 0.25
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "projectionId": "proj_123",
    "years": [
      {
        "year": 2024,
        "age": 39,
        "netWorth": 500000,
        "assets": 800000,
        "debts": 300000,
        "cashFlow": 50000,
        "income": 120000,
        "expenses": 70000
      },
      // ... more years
    ],
    "summary": {
      "finalNetWorth": 2500000,
      "retirementReadiness": 85,
      "yearsOfFunding": 30
    }
  }
}
```

#### Get Projection by ID

```http
GET /projections/:id
```

### Simulations

#### Run Monte Carlo Simulation

```http
POST /simulations/monte-carlo
```

**Request Body:**
```json
{
  "iterations": 10000,
  "startYear": 2024,
  "endYear": 2054,
  "assumptions": {
    "inflationRate": 0.03,
    "inflationVolatility": 0.01,
    "marketReturn": 0.07,
    "marketVolatility": 0.15
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "simulationId": "sim_123",
    "iterations": 10000,
    "successRate": 0.85,
    "percentiles": {
      "p10": 1200000,
      "p25": 1800000,
      "p50": 2500000,
      "p75": 3200000,
      "p90": 4000000
    },
    "completedAt": "2024-01-15T10:35:00Z"
  }
}
```

#### Get Simulation Results

```http
GET /simulations/:id
```

### Reports

#### Generate Report

```http
POST /reports/generate
```

**Request Body:**
```json
{
  "type": "summary",
  "format": "pdf",
  "includeCharts": true
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "reportId": "report_123",
    "downloadUrl": "/reports/report_123/download",
    "expiresAt": "2024-01-16T10:30:00Z"
  }
}
```

#### Download Report

```http
GET /reports/:id/download
```

## Data Models

### User

```typescript
{
  id: string
  email: string
  profile: Profile
  settings: UserSettings
  createdAt: string (ISO 8601)
  updatedAt: string (ISO 8601)
}
```

### Income

```typescript
{
  id: string
  userId: string
  name: string
  amount: number
  frequency: "monthly" | "annually" | "bi-weekly" | "semi-monthly"
  startDate: string (YYYY-MM-DD)
  endDate: string | null (YYYY-MM-DD)
  growthRate: number (decimal)
  taxable: boolean
  createdAt: string (ISO 8601)
  updatedAt: string (ISO 8601)
}
```

### Expense

```typescript
{
  id: string
  userId: string
  name: string
  category: string
  amount: number
  frequency: string
  inflationAdjusted: boolean
  inflationRate: number
  startDate: string
  endDate: string | null
  createdAt: string
  updatedAt: string
}
```

### Asset

```typescript
{
  id: string
  userId: string
  name: string
  type: AssetType
  value: number
  returnRate: number
  contributions: Contribution | null
  createdAt: string
  updatedAt: string
}
```

### Debt

```typescript
{
  id: string
  userId: string
  name: string
  type: DebtType
  balance: number
  interestRate: number
  monthlyPayment: number
  startDate: string
  term: number (months)
  createdAt: string
  updatedAt: string
}
```

## Pagination

List endpoints support pagination:

```http
GET /incomes?page=2&limit=25
```

Response includes pagination metadata:

```json
{
  "data": [...],
  "meta": {
    "page": 2,
    "limit": 25,
    "total": 100,
    "pages": 4
  }
}
```

## Rate Limiting

API requests are rate-limited to ensure fair usage:

- **Authenticated users**: 1000 requests per hour
- **Unauthenticated**: 100 requests per hour

Rate limit headers:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642248000
```

## Webhooks (Future)

Webhooks will allow real-time notifications for events:

- Projection completed
- Simulation completed
- Goal achieved
- Report generated

## SDKs (Future)

Official SDKs will be available for:
- JavaScript/TypeScript
- Python
- Go
- Ruby

## Versioning

The API uses URL versioning:

- Current version: `v1`
- Base URL: `/api/v1`

Breaking changes will introduce new versions.

## Support

- **Documentation**: https://docs.finsim.app
- **GitHub Issues**: https://github.com/preamza02/finsim/issues
- **API Status**: https://status.finsim.app (future)

---

*This API documentation is a work in progress and will be updated as endpoints are implemented.*
