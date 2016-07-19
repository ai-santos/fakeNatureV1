var express = require('express'),
app = express();

app.use(express.static('www'));

app.set('port', process.env.PORT || 3000);

app.get('/favicon.ico', function (req, res) {
  res.send('fi');
})

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});