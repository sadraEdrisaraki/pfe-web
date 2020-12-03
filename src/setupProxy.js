const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/api/citizens",
		createProxyMiddleware({
			target: "https://pfe-backend-dev.azurewebsites.net",
			changeOrigin: true,
		})
	);
};