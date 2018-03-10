const mysql = require('../db/mysql');

const express = require('express')

mysql.init(
    
)

module.exports = {
	init: function(app){
		app.post("/insertApply", function(req, res){

			var _reqBody = JSON.parse(Object.keys(req.body))

			var userName = _reqBody.userName;
			var phone =  _reqBody.phone;
			var city = _reqBody.city;

			var sql = `select * from tbt_apply`
			mysql.select(sql, function(err, rows){
				if(err){
					return res.send({res: '请求失败',mess: errr})
				}else{
					var data = `INSERT into tbt_apply (userName,phone,city) VALUES ('${userName}', ${phone}, '${city}')` 
					console.log(data);
					mysql.insert(data,  function(err, result){
						res.send({result:true, mess:"申请成功"})
					})
				}
			})
		})
	}
}
