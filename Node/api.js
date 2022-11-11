const http = require("http");
const data = require("/home/shaverrp/it3038c-scripts/Node/widgets.json");

const listBlue = res => {
	const colorBlue = data.filter((item) => {
		return item.color === "blue";
	});

	res.end(JSON.stringify(colorBlue));
}

const listGreen = res => {
	const colorGreen = data.filter((item) => {
		return item.color === "green";
	});

	res.end(JSON.stringify(colorGreen));
}

const listBlack = res => {
	const colorBlack = data.filter((item) => {
		return item.color === "black"
	});

	res.end(JSON.stringify(colorBlack));
}

const server = http.createServer((req, res) => {
	if (req.url === "/"){
		res.writeHead(200, {"Content-Type": "text/json"});
		res.end(JSON.stringify(data));
	}else if (req.url === "/blue"){
		listBlue(res);
	}else if (req.url === "/green"){
		listGreen(res);
	}else if (req.url === "/black"){
		listBlack(res);
	} else {
		res.writeHead(400, {"Content-Type": "text/plain"});
		res.end("Data not found")
	}
});

server.listen(3000);
console.log("Server is listening on port 3000");
