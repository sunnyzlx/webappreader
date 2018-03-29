$.get('/ajax/index',function(d){
  new Vue({
    el: '#app',
    data: {
      top: d.items[0].data.data,
      hot: d.items[1].data.data,
      recommend: d.items[2].data.data,
      female: d.items[3].data.data,
      male: d.items[4].data.data,
      free: d.items[5].data.data,
      topic: d.items[6].data.data,
      tab_1_class: 'Swipe-tab__on',
      tab_2_class: '',
      switch_it: false
    },
    methods: {
      tabSwitch:function(pos){
        this.duration = 0.5
        this.header_duration = 0.5
        if(pos==0){
          this.switch_it = false
          this.tab_1_class = 'Swipe-tab__on'
          this.tab_2_class = ''
        }else{
          this.switch_it = true
          this.tab_2_class = 'Swipe-tab__on'
          this.tab_1_class = ''
        }
      }
    }
  }) 
},'json')