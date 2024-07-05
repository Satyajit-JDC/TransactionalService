// ESLint Code
// import globals from "globals";
// import tseslint from "typescript-eslint";

// export default [
//   { 
//     files: ["srv/**/*.ts"],
//     languageOptions: { sourceType: "script" }
//   },
//   {
//     ignores: ["**/external/*","**/gen/*","**/@cds-models/*","**/test/*"]
//   },
//   { languageOptions: { globals: globals.browser } },
//   ...tseslint.configs.recommended,
// ];

// CDS Lint Code
const cds = require('@sap/eslint-plugin-cds')
module.exports = [
  cds.configs.recommended,
  {
    plugins: {
      "@sap/cds": cds
    },
    "files": [
      ...cds.configs.recommended.files
    ],
    "rules": {
      // ...cds.configs.recommended.rules,
      "@sap/cds/valid-csv-header": ["warn","show"],
      "@sap/cds/start-entities-uppercase": "warn",
      "@sap/cds/start-elements-lowercase": "warn",
      "@sap/cds/sql-cast-suggestion": ["warn","show"],
      "@sap/cds/no-join-on-draft": ["warn","show"],
      "@sap/cds/no-dollar-prefixed-names": ["error","show"],
      "@sap/cds/no-db-keywords": ["warn","show"],
      "@sap/cds/extension-restrictions": "warn",
      "@sap/cds/auth-valid-restrict-where": ["warn","show"],
      "@sap/cds/auth-valid-restrict-to": ["warn","show"],
      

    }
  }
]
