var express = require('express');
var app = express();
var path = require('path');

//在这里引入自己的router
var getPlansList = require('./getPlansList')
var pcz_all = require('./pcz_all')
var ygetCompany = require('./y_getCompany.js')
var search = require('./search');
var getBoutique = require('./getBoutique');
var getSegmentation = require('./getSegmentation');
var insertApply = require('./insertApply');

var a ;
var bp = require('body-parser');

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    //;application/x-jpg
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header("Referer", "http://pic.to8to.com");
    next();
})

//位置只能放跨域下面;若要../  用原生模块path
app.use(express.static(path.resolve(__dirname, '../')));

app.use(bp.urlencoded({extended: false}));
module.exports = {
     start(port){
        
        getPlansList.init(app);
        pcz_all.init(app);
        ygetCompany.init(app);
        search.init(app);
        getBoutique.init(app);
        getSegmentation.init(app);
        insertApply.init(app);
        
        app.listen(port);
     }
}
