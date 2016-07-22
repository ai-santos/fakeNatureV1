var express = require('express')
var request = require('request')

app = express();

app.use(express.static('www'));

app.set('port', process.env.PORT || 3000);

app.get('/pictures', function(req, res) {
  var uri = 'http://naturegram-api.herokuapp.com/pictures'
  request(uri, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).send(body);
    }
  })
})

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});