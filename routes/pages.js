const express = require('express');
const User = require('../core/user');
const router = express.Router();
const mysql = require('mysql');
const pool = require('../core/pool');

const user = new User();

var user_name;
var date = new Date();

router.get('/', (req, res, next) => {
    res.render('index');
    console.log(date)
})

router.get('/login', (req, res, next) => {
    res.render('login');
})

router.get('/signup', (req, res, next) => {
    res.render('signup');
})

router.post('/loginto', (req, res, next) => {
    user_name=req.body.username;
    user.login(req.body.username, req.body.password, function(result) {
        if(result){
            req.session.user = result;
            req.session.opp = 1;
            res.redirect('/home');
        }
        else{
            res.send('Username/Password incorrect!');
        }
    })
});

router.post('/signupto', (req, res, next) => {
    user_name=req.body.username;
    let userInput = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };

    user.create(userInput, function(lastId) {
        if(lastId){
            user.find(userInput, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/home');
            });
        }
        else{
            res.send('User already exists!');
        }
    });
});

router.get('/home', (req, res) => {
    let user = req.session.user;
    if(user) {
        pool.getConnection(function(err){
            if(err)
                throw err;
            else{
                var query1 = `SELECT * FROM product`;
                
                pool.query(query1,function(err,data){
                    if(err)
                        throw err;
                    else{
                        var query2 = `SELECT COUNT(DISTINCT(productname)) AS countprdt FROM cart WHERE username = "` + user_name + `";`;
                        
                        pool.query(query2,function(err,nos){
                            if(err)
                                throw err;
                            else {
                                console.log(nos);
                                res.render('home',{
                                    username:user_name,
                                    items: data,
                                    nos:nos
                                });  
                            }
                        });
                    }
                });
            }
        });
    }
    return;
    res.redirect('/');
});

router.get('/loggout', (req, res, next) => {
    delete req.session;
    res.redirect('/');
});

router.post('/cart', (req, res) => {
    user.productsincart(user_name, req.body.productname, req.body.productrate, req.body.productimage, function(lastId){
        if(lastId){

        }
    })
});

router.post('/removefromcart', (req, res) => {
    user.remove(req.body.id, function(lastId){
        console.log("updated");
    })
    
});

router.post('/yourcart', (req, res) => {

    pool.getConnection(function(err){
        if(err)
            throw err;

        var query = `SELECT * FROM cart WHERE username = "`+user_name+`" GROUP BY productname;`;
        
        pool.query(query,function(err,data){
            if(err)
                throw err;
            else {
                res.render('yourcart',{
                    username:user_name,
                    itemsincart: data
                });  
            }
        });
    });  
});

router.post('/order', (req,res) => {
    user.placedorders(user_name, req.body.productname, req.body.productrate, req.body.productqty, function(lastId){
        console.log("BUY NOW");
    });
});

router.post('/placedorder', (req, res) => {

    pool.getConnection(function(err){
        if(err)
            throw err;
        else{
            var query1 = `SELECT * FROM orders WHERE username = "`+user_name+`";`;
            
            pool.query(query1,function(err,data){
                if(err)
                    throw err;
                else{
                    var query2 = `SELECT SUM(amount) AS totalamt FROM orders WHERE username = "` + user_name + `";`;
                    
                    pool.query(query2,function(err,total){
                        if(err)
                            throw err;
                        else {
                            res.render('placedorders',{
                            username:user_name,
                            itemsincart: data,
                            total: total
                            });  
                            tot_amt=req.body.totalamt; 
                        }
                    });
                }
            });
        }
    });
});

router.post('/removefromcl', (req, res) => {
    user.removecl(user_name, req.body.id, function(lastId){
        console.log("UPDATED");
    });
});

var tot;

router.post('/buynow', (req, res) => {
    tot = req.body.total;
    res.render('buyproduct',{
        username:user_name,
        total:req.body.total
    })
});

router.post('/ordered', (req, res) => {
    var present = new Date();
    var date = (present.getFullYear() + "-" + ("0" + (present.getMonth() + 1)).slice(-2) + "-" + ("0" + present.getDate()).slice(-2))
    var time = (present.getHours() + ":" + present.getMinutes() + ":" + present.getSeconds());
    user.buying(user_name, tot, req.body.address, req.body.pincode, date, time, req.body.recdate, req.body.rectime, function(lastId){
        console.log("UPDATED");
    });

    user.deletecl(user_name, function(lastId){
        console.log("DELETED")
    });

    res.redirect("/home");
})

router.post('/bill', (req, res, next) => {
    
    pool.getConnection(function(err){
        if(err)
            throw err;

        var query = `SELECT * FROM buynow WHERE username = "` + user_name + `";`;
        
        pool.query(query,function(err,data){
            if(err)
                throw err;
            else {
                res.render("bill",{
                    username: user_name,
                    info: data
                });  
            }
        });
    });
});

module.exports = router;