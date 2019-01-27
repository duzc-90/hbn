//引入连接池对象  ../ 上一级
const pool=require('../pool.js');
const express=require('express');
//路由器是express下的一个功能
//创建一个空的路由器
var router=express.Router();
//添加路由
router.get('/saveApply',(req,res)=>{
    //获取浏览器请求的数据
    var obj=req.query;
    var apply = [obj.name,obj.tel,obj.gender,obj.borth,obj.position,obj.email];
    pool.query('insert into hbn_apply(name,tel,gender,borth,position,email,applyTime) values (?,?,?,STR_TO_DATE(?,\'%Y-%m-%d %H:%i:%s\'),?,?,now())',apply,(err,result)=>{
        //查询结果是数组，如果数组的元素个数大于0，说明登录成功；否则说明登录失败
        if(err) throw err;
        //无论结果是多少条记录，都直接响应给浏览器
        res.send(result.affectedRows == 1);
    });
});
module.exports=router;
