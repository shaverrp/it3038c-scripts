const config = require ('config')
var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World! My name is:<em>' + process.env.MYNAME + '</em> <br /> My Node Environment is:<em>' + config.util.getEnv('NODE_ENV') + '</em></b>')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
