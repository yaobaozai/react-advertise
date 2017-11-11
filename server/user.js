const express = require('express')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')
const utils = require('utility')

const _filter = {pwd:0,__v:0}
Router.get('/list', function(req, res) {
    // User.remove({},function(e,d){})
    User.find({}, function(err,doc){
        return res.json(doc)
    })
})
Router.post('/login', function(req, res) {
    const {user, pwd} = req.body
    User.findOne({user, pwd: md5Pwd(pwd)},_filter,function(err, doc){
        if(!doc){
            return res.json({code:1, msg:'用户名或者密码错误'})
        }
        return res.json({code:0, data: doc})
    })
})
Router.post('/register', function(req, res){
    console.log(req.body)
    const {user, pwd, type} = req.body
    User.findOne({user}, function(err,doc){
        if(doc){
            return res.json({code: 1, msg:'用户名重复'})
        }
        User.create({user, pwd:md5Pwd(pwd),type},_filter,function(err,doc){
            if(err){
                return res.json({code:1, msg:'后端出错了'})
            }
            return res.json({code:0})
        })
    })
})
Router.get('/info', function(req, res) {
    return res.json({code: 0})
})

function md5Pwd(pwd) {
    const salt = 'who is your daddy'
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router