const mongoose = require('mongoose')
//链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)

const models = {
    user: {
        'user': {'type': String,'require': true},
        'pwd': {'type': String, 'require': true},
        'type': {'type': String,'require': true},
        // 职位
        'title': {'type': String},
        // 简介
        'desc': {'type': String},
        //头像
        'avatar': {'type': String},
        'company': {'type': String},
        'money': {'type': String}
    },
    chat: {

    }
}

for(let m in models){
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function(name){
        return mongoose.model(name)
    }
}
