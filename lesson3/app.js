var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();
app.get('/', function (req, res, next) {
  superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      // console.log(sres.text);
      var $ = cheerio.load(sres.text);
      var items = [];
      var url_head = 'https://cnodejs.org';
      $('#topic_list .topic_title').each(function (idx, ele) {
        var $ele = $(ele);
        items.push({
          title: $ele.attr('title'),
          href: url_head + $ele.attr('href')
        });
      });
      console.log(items);
      res.send(items);
    });
});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000')
});
