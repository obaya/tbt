const mysql = require('../db/mysql');

const express = require('express')

mysql.init(
    
)

module.exports = {
    init: function (app) {
        app.get("/getPlansList", function (req, res) {
            var _impose = req.query.impose ? req.query.impose : 8; //只显示8条数据
            var sql = `select * from tbt_plan  limit ${_impose} `;
            mysql.select(sql, function (err, rows) {
                if (err) {
                    return res.send({ status: 0, mess: err });
                } else {
                    return res.send(JSON.stringify(rows));
                }
            });
        });

        // 获取图片默认列表
        app.get("/getPlansListMap", function (req, res) {
            var sql = `select * from tbt_plan LIMIT 2000 `;
            mysql.select(sql, function (err, rows) {
                if (err) {
                    return res.send({ status: 0, mess: err });
                } else {
                    var arr = [];
                    for (var i = 0; i < 20; i++) {
                        arr.push(rows[parseInt(Math.random() * 2000) + 1]);
                    }
                    return res.send(JSON.stringify(arr));
                }
            });
        });

        // 根据id获取数据
        app.get('/getPlansIdMap', function (req, res) {
            var plan_id = req.query.id;
            if (!plan_id) {
                return res.send({ status: 0, mess: 'id参数不能为空' });
            }
            var sql = `select * from tbt_plan where plan_id=${plan_id} `;
            mysql.select(sql, function (err, rows, result) {
                if (err) {
                    return res.send({ status: 0, mess: err });
                } else {
                    return res.send(JSON.stringify(rows));
                }
            });

        });

        // 根据分类获取图片列表
        app.get("/getPlansStyleList", function (req, res) {
            var style = req.query.style;

            if (!style) {
                return res.send({ status: 0, mess: 'style参数不能为空' });
            }

            var sql = `select * from tbt_plan where style = '${style}' or space = '${style}'or color = '${style}'or area = '${style}' LIMIT 20 `;

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