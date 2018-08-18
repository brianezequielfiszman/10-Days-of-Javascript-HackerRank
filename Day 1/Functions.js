/*
 * Create the function factorial here
 */
const factorial = (n) => (1 < n && n <= 10) ? n * factorial(--n) : n;
