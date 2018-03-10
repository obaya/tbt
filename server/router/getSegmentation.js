const mysql = require('../db/mysql');

const express = require('express')

mysql.init(
    
)

module.exports = {
	init: function(app){
		app.get("/getSegmentation", function(req, res){
			
			var _num = req.query.num ? req.query.num : 4;
			console.log(_num)
			var sql = `select * from tbt_plan where inspiration and planTitle not like '%家%' and planTitle not like '%望京%' and planTitle not like '%明媚%' and planTitle not like '%先生%' and inspiration not like '%11%' limit ${_num},3`;
			mysql.select(sql, function(err, rows){

					if(err){
						return res.send({status: 0, mess: err})
					}else{
						return res.send(JSON.stringify(rows));
					}
//				select planTitle,inspiration,planImgsSrc,createtime from tbt_plan where inspiration
			});
		})
		
		
	}
}
