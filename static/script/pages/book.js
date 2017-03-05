//书籍详情页：根据url传过来的参数id值去数据库里查找 id.json 的书
var id = location.href.split('id=').pop();
var screenWidth = $(window).width();
$.get('/ajax/book?id=' + id, function(d){
    d.screenWidth = screenWidth;
    new Vue({
        el: '#app',
        data: d,
        methods: {
            getData: function(){
                location.href = '/reader';
            }
        }
    })
}, 'json');