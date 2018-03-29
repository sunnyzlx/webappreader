var express = require('express')
var path = require('path')
var fs = require('fs')
var qs = require('querystring')
var bodyParser = require('body-parser')

var service = require('./service/service')

var app = express()

app.set('views', './views/pages')
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'static')))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.get('/', function(req, res) {
  res.render('index', {
    title: '书城首页'
  })
})
app.get('/bookdetail', function(req, res) {
  var id = req.query.id
  if (!id) {
    id = '';
  }
  res.render('book', {
    title: '书籍详情',
    nav: '书籍详情',
    bookId: id
  })
})
app.get('/ajax/index', function(req, res) {
  res.send(service.get_index_data())
})
app.get('/ajax/rank', function(req, res) {
  res.send(service.get_rank_data())
})
app.get('/ajax/category', function(req, res) {
  res.send(service.get_category_data())
})
app.get('/ajax/bookbacket', function(req, res) {
  res.send(service.get_bookbacket_data())
})
app.get('/ajax/female', function(req, res) {
  res.send(service.get_female_data())
})
app.get('/ajax/male', function(req, res) {
  res.send(service.get_male_data())
})
app.get('/ajax/book', function(req, res) {
  var id = req.query.id
  if (!id) {
    id = '';
  }
  res.send(service.get_book_data(id))
})

app.get('/ajax/search', function(req, res) {
  var params = req.query
  var start = params.start
  var end = params.end
  var keyword = params.keyword
  console.log('params: ' + start + '&' + end + '&' + keyword)
  res.send(service.get_search_data(start, end, keyword))
})

app.listen(3001)
console.log('starting...')