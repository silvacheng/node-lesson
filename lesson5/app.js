var async = require('async');
var concurrentConut = 0; // 当前并发数量
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var cnodeUrl = 'https://cnodejs.org/';
var topicUrls = [];

superagent.get(cnodeUrl)
  .end(function (err, res) {
    if (err) {
      return console.log(err);
    }
    var $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function (idx, element) {
      var $element = $(element);
      var href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
    });
    // console.log(topicUrls);
    async.mapLimit(topicUrls, 5, function (topic, callback) {
      fetchUrl(topic, callback);
    }, function (err, result) {
      console.log('final:');
      console.log(JSON.stringify(result));
    });
  });

var arr = [];

var fetchUrl = function (topic, callback) {
  var delay = parseInt((Math.random() * 10000000 % 2000), 10);
  concurrentConut++;
  console.log('现在的并发数是', concurrentConut, ', 正在抓取的是', topic, ',耗时' + delay + '毫秒');

  setTimeout(function () {
    concurrentConut--;
    superagent.get(topic)
      .end(function (err, res) {
        console.log('fetch ' + topic + ' successful');
        var text = res.text;
        var topicUrl = topic;
        var topicHtml = text;
        var $ = cheerio.load(topicHtml);
        arr.push({
          title: $('.topic_full_title').text().trim(),
          href: topicUrl,
          comment1: $('.reply_content').eq(0).text().trim()
        });
        if (arr.length === topicUrls.length) {
          console.log(JSON.stringify(arr));
        }
      });
    callback(null, topic);
  }, delay);
}

