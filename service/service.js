var http = require('http')
var fs = require('fs')
var qs = require('querystring')
exports.get_index_data = function() {
  return content = fs.readFileSync('./mock/home.json', 'utf-8')
}
exports.get_rank_data = function() {
  return content = fs.readFileSync('./mock/rank.json', 'utf-8')
}
exports.get_category_data = function() {
  return content = fs.readFileSync('./mock/category.json', 'utf-8')
}
exports.get_bookbacket_data = function() {
  return content = fs.readFileSync('./mock/bookbacket.json', 'utf-8')
}
exports.get_female_data = function() {
  return content = fs.readFileSync('./mock/channel/female.json', 'utf-8')
}
exports.get_male_data = function() {
  return content = fs.readFileSync('./mock/channel/male.json', 'utf-8')
}
exports.get_book_data = function(id) {
  if (!id) {
    id = '18218'
  }
  return content = fs.readFileSync('./mock/book/' + id + '.json', 'utf-8')
}
exports.get_search_data = function(start, end, keyword) {
  return function(cb) {
    var data = {
      s: keyword,
      start: start,
      end: end
    }
    var content = qs.stringify(data)
    var http_request = {
      hostname: 'dushu.xiaomi.com',
      port: 80,
      path: '/store/v0/lib/query/onebox?' + content
    }
    res_obj = http.request(http_request, function(_res) {
      var content = ''
      _res.setEncoding('utf8')
      _res.on('data', function(chunk) {
        content += chunk
      })
      _res.on('end', function() {
        cb(null, content)
      })
    })
    res_obj.on('error', function() {

    })
    res_obj.end()
  }
}