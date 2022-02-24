const express = require("express");
const helmet = require("helmet");
const ejs = require("ejs");

const app = express();
const port = 3000;

// security stuff using helmet
app.use(
	helmet({
		contentSecurityPolicy: {
			directives: {
				imgSrc: ["'self'", "tailwindui.com"],
			},
		},
		dnsPrefetchControl: false,
		crossOriginEmbedderPolicy: false,
		crossOriginResourcePolicy: { policy: "cross-origin" },
	})
);
app.disable("x-powered-by");

// Sets the view engine to ejs
app.set("view engine", "ejs");

// Allow /public directory
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
	res.render("layout", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
	console.log(`Example app listening on port: ${port}`);
});
