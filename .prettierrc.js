/**
 * Prettier Configuration
 * 
 * This file contains the configuration for Prettier, the code formatter used in this project.
 * For more information, visit: https://prettier.io/docs/en/options.html
 */
module.exports = {
  semi: true,                 // Add semicolons at the end of statements
  tabWidth: 2,                // Set the width of tabs to 2 spaces
  printWidth: 100,            // Set the line length that Prettier will wrap on to 100 characters
  singleQuote: true,          // Use single quotes instead of double quotes
  trailingComma: 'all',       // Add trailing commas wherever possible
  jsxSingleQuote: false,      // Use double quotes in JSX
  bracketSpacing: true,       // Print spaces between brackets in object literals
  bracketSameLine: false,     // Put the closing bracket of JSX elements on a new line
  arrowParens: 'avoid',       // Avoid parentheses when possible in arrow functions
  endOfLine: 'auto',          // Maintain existing line endings
}; 