const mysql = require('../db/mysql');

const express = require('express')

mysql.init(
    
)

module.exports = {
    init: function (app) {
        app.get("/getCompany", function (req, res) {
            var id = req.query.id
            var sql = `select * from tbt_company where id='${id}'`;
            mysql.select(sql, function (err, rows) {
                if (err) {
                    return res.send({ status: 0, mess: err });
                } else {
                    return res.send(JSON.stringify(rows));
                }
            });
        });
        app.get("/getPlan", function (req, res) {
            var companyName = req.query.companyName
            var sql = `select * from tbt_plan where companyName='${companyName}'`;
            mysql.select(sql, function (err, rows) {
                if (err) {
                    return res.send({ status: 0, mess: err });
                } else {
                    return res.send(JSON.stringify(rows));
                }
            });
        });
        app.get("/getComment", function (req, res) {
            var companyName = req.query.companyName
            console.log(companyName)
            var sql = `select * from tbt_comment where companyName='${companyName}'`;
            mysql.select(sql, function (err, rows) {
                if (err) {
                    return res.send({ status: 0, mess: err });
                } else {
                    return res.send(JSON.stringify(rows));
                }
            });
        });
        app.get("/getPlanDetail", function (req, res) {
            var id = req.query.plan_id
            var sql = `select * from tbt_plan where plan_id='${id}'`;
            mysql.select(sql, function (err, rows) {
                if (err) {
                    return res.send({ status: 0, mess: err });
                } else {
                    return res.send(JSON.stringify(rows));
                }
            });
        });

        app.get("/shoucang", function (req, res) {
            var id = req.query.userId
            var companyName = req.query.companyName
            if(!id){
               return res.send({status:0,mess:'userId参数不能为空'});
            }
            var sql = `INSERT INTO tbt_collection (user_id,companyName) values (${id},'${companyName}')`;
            mysql.select(sql,function(err,rows,result){
                    if(err){
                     return   res.send({status:0,mess:err});
                    }else{
                       
                      return  res.send({res:'ok'});
                    }
            });
        });
        app.get("/delshoucang", function (req, res) {
            var id = req.query.userId
            var companyName = req.query.companyName;
            if(!id){
               return res.send({status:0,mess:'id参数不能为空'});       
            }
            var sql = `DELETE from tbt_collection where user_id=${id} and companyName='${companyName}' `;
            mysql.select(sql,function(err,rows,result){
                if(err){
                  return   res.send({status:0,mess:err});
                }else{
                  return res.send({res:'ok'});
                }
            });
                
        });
        app.get("/getshoucang", function (req, res) {
            var id = req.query.userId
            var companyName = req.query.companyName;
            if(!id){
               return res.send({status:0,mess:'id参数不能为空'});       
            }
            var sql = `select * from tbt_collection where user_id=${id} and companyName='${companyName}' `;
            mysql.select(sql, function (err, rows) {
                if (err) {
                    return res.send({ status: 0, mess: err });

                } else {
                    return res.send(JSON.stringify(rows));

                }
            });
                
        });
    }
}