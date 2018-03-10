const mysql = require('../db/mysql');

const express = require('express')

mysql.init(
    
)

module.exports = {
	init: function(app){
		app.get("/getBoutique", function(req, res){
			var sql = `select * from tbt_plan where inspiration and planTitle not like '%家%' and planTitle not like '%先生%' and planTitle not like '%小区%' and planTitle not like '%平米%' and   inspiration not like '%1%' limit 10`;
			mysql.select(sql, function(err, rows){
				if(err){
					return res.send({status: 0, mess: err})
				}else{
					return res.send(JSON.stringify(rows));
				}
//				select planTitle,inspiration,planImgsSrc,createtime from tbt_plan where inspiration
			});
		})
		
		app.get("/getFiltrate", function(req, res){
			console.log(req.query.filtrate)
			var type = req.query.filtrate;
			if(req.query.filtrate == '不限'){
				var sql3 = `select * from tbt_plan limit 20`
				mysql.select(sql3, function(err, rows){
					if(err){
						return res.send({status: '请求错误',mess: err})
					}else{
						console.log(rows)
						return res.send(JSON.stringify(rows));
					}
				})
			}else{
				var sql2 = `select * from tbt_plan where style like '${type}'  limit 10`
				mysql.select(sql2, function(err, rows){
					if(err){
						return res.send({status: '请求错误',mess: err})
					}else{
						console.log(rows)
						return res.send(JSON.stringify(rows));
					}
				})
			}
		})
		
		
		
		
	}
}