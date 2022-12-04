const { join, dirname } = require("path");
const { fileURLToPath } = require("url");
const swaggerAutogen = require("swagger-autogen");

// const doc = ...

// путь и название генерируемого файла
const outputFile = join(__dirname, "output.json");
// массив путей к роутерам
const endpointsFiles = [join(__dirname, "../router/students/index")];

swaggerAutogen(/* options */)(outputFile, endpointsFiles).then(
	({ success }) => {
		console.log(`Generated: ${success}`);
	},
);
