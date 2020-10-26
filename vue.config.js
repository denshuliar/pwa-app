module.exports = {
	publicPath: './',

	pwa: {
		themeColor: '#FFFFFF',
		msTileColor: '#FFFFFF',
		appleMobileWebAppCache: 'yes',
		manifestOptions: {
			background_color: '#FFFFFF',
		},
	},

	chainWebpack: (config) => {
		const svgRule = config.module.rule('svg')

		svgRule
			.uses
			.clear()

		svgRule
			.use('babel-loader')
			.loader('babel-loader')
			.end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader')
	},

	css: {
		loaderOptions: {
			scss: {
				prependData: '@import "~@/assets/styles/main.scss";',
			},
		},
	},
}
