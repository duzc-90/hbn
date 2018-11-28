const express=require('express');
//引入用户路由器
const baseRouter=require('./routes/base.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
//创建web服务器
var app=express();
app.listen(3000);
//使用路由器来管理路由
//把用户路由器挂载到/user下
app.use('/hbn',baseRouter);