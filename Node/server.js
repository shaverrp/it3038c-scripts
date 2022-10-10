const http = require ("http");
const fs = require("fs");
const os = require("os");
const ip = require('ip');
const uptime = os.uptime();
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const cpuCount = os.cpus().length;

http.createServer((req, res) => {
	if (req.url === "/") {
		fs.readFile("./Public/index.html", "UTF-8", (err, body) => {
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(body);
	});
	} else if(req.url.match("/sysinfo")) {
		myHostName=os.hostname();
		html=`
		<!DOCTYPE html>
			<html>
				<head>
					<title>Node JS Response</title>
				</head>
				<body>
					<p>Hostname: ${myHostName}</p>
					<p>IP: ${ip.address()}</p>
					<p>Server Uptime: ${os.uptime()} Seconds</p>
					<p>Total Memory: ${os.totalmem()} MB</p>
					<p>Free Memory: ${os.freemem()} MB </p>
					<p>Number of CPUs: ${os.cpus().length} </p>
				</body>
			</html>`
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(html);
	} else {
		res.writeHead(400, {"Content-Type": "text/plain"});
		res.end(`404 File Not Found at ${req.url}`);
	}
}).listen(3000)

console.log("Server listening on port 3000")


