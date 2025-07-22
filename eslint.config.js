// eslint.config.js
import js from "@eslint/js";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		languageOptions: {
			globals: {
				...js.configs.recommended.languageOptions.globals,
				process: "readonly", // ✅ Add this line
				__dirname: "readonly", // (optional, useful for Node.js)
				module: "readonly",    // (optional)
				require: "readonly",   // (optional)
			},
		},
		rules: {
			"no-unused-vars": "warn",
		},
	},
]);
