const express=require('express');
//引入用户路由器
const baseRouter=require('./routers/base.js');
//引入body-parser中间件
const bodyParser=require('body-parser');
//创建web服务器
var app=express();
app.listen(3000);
//托管静态资源到public目录
app.use(express.static('../app'));
//使用body-parser中间件来将post请求的数据解析为对象
//设置必须放在路由之前，只有设置好了，才能使用req.body
app.use(bodyParser.urlencoded({
    extended:false //不使用扩展的模块，而是使用nodejs提供的querystring模块解析为对象
}));
//使用路由器来管理路由
//把用户路由器挂载到/user下
app.use('/hbn',baseRouter);
console.log('启动成功');
