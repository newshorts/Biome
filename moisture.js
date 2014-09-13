var express = require('express'),
    gpio = require("pi-gpio");
    
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});

gpio.open(16, "input", function(err) {
    gpio.read(16, function(err, val) {
        if(err) throw err;
        console.log(val);
    });
});
