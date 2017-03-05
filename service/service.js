var fs = require('fs');
//读取文件的时候不要忘记加上utf-8,不然获取不到数据
//获得搜索信息
exports.get_search_data = function(start, end, keyword){
    //因为请求http接口是异步的，所有会导致get_search_data
    //是异步的，我们不能直接返回，直接返回会有问题
    return function(cb){//所以我们需要返回一个异步函数去做这件事件
        var http = require('http');//用来发送请求
        var qs = require('querystring');//把obj对象转化为http查询参数
        var data = { //接受的参数
            s : keyword,
            start : start,
            end : end
        };
        var content = qs.stringify(data);//转化为查询字符串
        var http_request = { //指定要访问的地址
            hostname : 'dushu.xiaomi.com',
            port : 80,
            path : '/store/v0/lib/query/onebox?' + content
        };
        //上面组装好这些参数后，我们把请求发送出去
        var req_obj = http.request(http_request, function(_res){ //(请求地址，回调(response响应对象))
            var content = '';//返回的内容
            _res.setEncoding('utf8');//设定返回的数据格式限定
            _res.on('data', function(chunk){//当接受到数据的时候触发data事件，返回的数据是一段一段的chunk
                content += chunk;
            });
            _res.on('end', function(){
                cb(null, content);//把数据传出去 第一个参数为错误代码
            });//数据接受完后触发end事件
        });
        req_obj.on('error', function(){});//有可能响应出错
        req_obj.end();//发送请求，这时将进入上面的回调
    }
};
//获得首页信息
exports.get_index_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/home.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//排序信息
exports.get_rank_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/rank.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//分类信息
exports.get_category_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/category.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//书架信息
exports.get_bookbacket_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/bookbacket.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//femel信息
exports.get_female_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/channel/female.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//male信息
exports.get_male_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/channel/male.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//book信息
exports.get_book_data = function(id){
    if(!id){
        id = "18218";
    }
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/book/' + id + '.json', 'utf-8', function(err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};
//获取章节信息chapter.json
exports.get_chapter_data = function(){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/reader/chapter.json', 'utf-8', function(err, d){
            if(err){
                reject(err);
            }
            resolve(d);
        });
    })
};
//获得章节内容data1.json
exports.get_data_data = function(page){
    return new Promise(function(resolve, reject){
        fs.readFile('./mock/reader/data/data' + page + '.json', 'utf-8', function(err, d){
            if(err){
                reject(err);
            }
            resolve(d);
        });
    });
};