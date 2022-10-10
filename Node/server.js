const http = require ("http");
const fs = require("fs");
const os = require("os");
const ip = require('ip');
var  uptime = os.uptime();
var  totalMemory = os.totalmem();
var  freeMemory = os.freemem();
const cpuCount = os.cpus().length;

var totalMemoryMB = totalMemory/1048576;
const totalMemoryMB1 = totalMemoryMB.toFixed(2);
var freeMemoryMB = freeMemory/1048576;
const freeMemoryMB1 = freeMemoryMB.toFixed(2);

var numdays = Math.floor(uptime/86400);
const numdays1 = numdays.toFixed(0);
var numhours = Math.floor((uptime % 86400)/3600);
const numhours1 = numhours.toFixed(0);
var numminutes = Math.floor(((uptime%86400)%3600)/60);
const numminutes1 = numminutes.toFixed(0);
var numseconds = ((uptime%86400)%3600)%60;
const numseconds1 = numseconds.toFixed(0); 

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
					<p>Server Uptime: ${numdays1} Days, ${numhours1} Hours, ${numminutes1} Minutes, ${numseconds1} Seconds</p>
					<p>Total Memory: ${totalMemoryMB1} MB</p>
					<p>Free Memory: ${freeMemoryMB1} MB</p>
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


