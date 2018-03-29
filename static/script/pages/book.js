$.get('ajax/book?id=18218', function(d) {
  new Vue({
    el: '#app',
    data: d
  })
}, 'json')