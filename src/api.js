var jsapi = require('./js-api');
var fs = require('fs');
var path = require('path');

var data = fs.readFileSync(path.resolve(__dirname, '../db/main.json'), {encoding: 'utf8'});
data = JSON.parse(data);

// define custom API route for 'users'
data.users.route = 'local-users'

// define custom Koa middleware/routes if necessary
jsapi.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

jsapi.start(data, 3000);

// ########### Below is the testing part for the above server definition ############ //

// var request = require('request');
// var uri = 'http://localhost:3000/'

// request({url: uri + 'local-users/u1', json: true}, function (error, response, body) {
//   console.log('get user #1:', body)
// })

// request({url: uri + 'posts/p1', json: true}, function (error, response, body) {
//   console.log('get post #1:', body)
// })

// request({url: uri + 'posts', method: 'POST', json: {id:'p3', title: 'third post', body: 'quick brown fox'}}, function (error, response, body) {
//   console.log('create post #3:', body)
// })

// request({url: uri + 'posts/p1', method: 'PUT', json: {id:'p1', title: 'first post', body: 'some proper body'}}, function (error, response, body) {
//   console.log('update post #1:', body)
// })

// request({url: uri + 'posts', json: true}, function (error, response, body) {
//   console.log('all posts:', body)
// })
