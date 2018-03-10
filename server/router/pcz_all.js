const mysql = require('../db/mysql');

const express = require('express')

mysql.init(

)

module.exports = {
    init: function (app) {
        //  :88/createUser?phoneNo = 
        app.get("/createUser", function (req, res) {
            var phoneNo = req.query.phoneNo;
            var sql = `SELECT * FROM tbt_user where phoneNo = '${phoneNo}'`
            //已有此用户，无此用户;
            mysql.select(sql, function (err, rows) {
                if (err) {
                    res.send({ result: '请求失败', mess: err })
                } else {
                    if (rows.length > 0) {
                        res.send({ result: false, data: JSON.parse(JSON.stringify(rows)) })
                    } else {
                        var insertSql = `INSERT into tbt_user (phoneNo) VALUE (${phoneNo}) `
                        mysql.insert(insertSql, function (err, result) {
                            if (rows.length > 0) {
                                res.send({ result: false, mess: err });
                            } else {
                                res.send({ result: true, data: JSON.parse(JSON.stringify(rows)) , mess: "注册成功"})
                            }
                        })
                    }
                }
            })
        });

        app.get('/getUserById', function (req, res) {
            // :88/getUser?user_id=
            var user_id = req.query.user_id;
            var sql = `SELECT * FROM tbt_user where user_id = '${user_id}'`

            mysql.select(sql, function (err, rows, result) {
                if (err) {
                    return res.send({ status: 0, mess: err });
                } else {
                    return res.send(JSON.stringify(rows));
                }
            });
        });

        app.get('/getCompanyNames',function(req,res){
            //user_id=>companyName=>array
            var user_id = req.query.user_id;
            var sql = `SELECT tbt_collection.companyName FROM tbt_collection where user_id = '${user_id}'`

            mysql.select(sql, function (err, rows, result) {
                if (err) {
                    return res.send({ status: 0, mess: err });
                } else {
                    return res.send(JSON.stringify(rows));
                }
            });
        })

        app.get('/getCompanyByName',function(req,res){
            var companyNames = req.query.companyNames;

            var string = '';
            
            if(companyNames==undefined){
                return res.send({ status: 0});
            } else if (companyNames.length > 0) {
                for(let i=0;i<companyNames.length;i++){
                    string += `or companyName='${companyNames[i]}'` 
                }
                string = string.slice(3);
    
                var sql = `SELECT * from tbt_company where ${string}`;
                mysql.select(sql, function (err, rows, result) {
                    if (err) {
                        return res.send({ status: 0, mess: err });
                    } else {
                        return res.send(JSON.stringify(rows));
                    }
                });
            }
            
        })
    }
}