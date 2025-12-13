/**
 * Parse a string environment variable as a boolean
 * Accepts: 'true', '1', 'yes' as true
 * Everything else is false
 */
export function parseEnvBoolean(value: string | undefined): boolean {
if (!value) return false;
const normalized = value.toLowerCase().trim();
return normalized === 'true' || normalized === '1' || normalized === 'yes';
}

/**
 * Validate required environment variables
 * Throws an error if any required variables are missing
 */
export function validateRequiredEnvVars(vars: Record<string, string | undefined>): void {
const missing = Object.entries(vars)
.filter(([, value]) => !value || value.trim() === '')
.map(([key]) => key);

if (missing.length > 0) {
throw new Error(
`Missing required environment variables: ${missing.join(', ')}. ` +
'Please check your .env file and ensure all required variables are set.'
);
}
}
