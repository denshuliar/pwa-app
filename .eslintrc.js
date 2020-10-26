module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'plugin:vue/base',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		"indent": [2, "tab"],
		"no-tabs": 0,
		"semi": 0,
		"space-before-function-paren": 0,
		"no-else-return": 0,
		"no-param-reassign": 0,
		"no-plusplus": 0,
		"arrow-parens": 0,
		"no-shadow": 0,
		"quote-props": 0,
		"no-useless-escape": 0,
		"no-use-before-define": 0,
		"dot-notation": 0,
		"arrow-body-style": 0,
		"import/prefer-default-export": 0,
	},
}
