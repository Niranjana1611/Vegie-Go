const pool = require('./pool');
const bcrypt = require('bcrypt');

function User() {};

var user_name;

User.prototype = {
    find : function(user = null, callback)
    {
        if(user) {
            var field = "username";
        }

        let sql = `SELECT * FROM logged WHERE ${field} = "` + user.username + `";`;
        
        pool.query(sql, user, function(err, result) {
            if(err) throw err

            if(result.length) {
                callback(result[0]);
            }else {
                callback(null);
            }
        });
    },

    create : function(body, callback) 
    {
        var pwd = body.password;
        
        body.password = bcrypt.hashSync(pwd,10);

        var input = {
            user_name : body.username,
            user_mail : body.email
        }

        var bind = [];
        
        for(prop in body){
            bind.push(body[prop]);
        }
        
        var sql = `INSERT INTO logged(username, email, password) VALUES (?, ?, ?);`;

        pool.query(sql, bind, function(err, result) {
            if(err){
                if (err.code === 'ER_DUP_ENTRY') {
                    callback(null);
                    return;
                }
            }
            callback(result.insertId);
        });
    },

    login : function(username, password, callback)
    {
        let userInput = {
        username: username,
        password: password
        };

        this.find(userInput, function(user) {
            if(user) {
                if(bcrypt.compareSync(password, user.password)) {
                    callback(user);
                    return;
                }  
            }
            callback(null);
        });    
    },

    productsincart : function(username, productname, productrate, productimage, callback)
    {

        sql = `INSERT IGNORE INTO cart (username,productname,productrate,productimage) VALUES ("` + username + `","` + productname + `",` + productrate + `,"` + productimage + `");`;

        pool.query(sql, function(err, result) {
            if(err) throw err;
             callback(result.insertId);
        });
    },

    remove : function(id, callback){
        sql = `DELETE FROM cart WHERE id = ` + id + `;`;
        pool.query(sql, function(err, result) {
            if(err) throw err;
            callback(result.insertId);
        });
    },

    placedorders : function(username, productname, productrate, productqty, callback)
    {

        sql = `INSERT IGNORE INTO orders (username,productname,productrate,productqty) VALUES ("` + username + `","` + productname + `",` + productrate + `,"` + productqty + `");`;

        pool.query(sql, function(err, result) {
            if(err) throw err;
             callback(result.insertId);
        });
    },

    removecl : function(username, id, callback){
        sql = `DELETE FROM orders WHERE id = ` + id + `;`;
        pool.query(sql, function(err, result) {
            if(err) throw err;
            callback(result.insertId);
        });
    },

    buying : function(username, total, address, pincode, pres_date, pres_time, rec_date, rec_time, callback)
    {

        sql = `INSERT IGNORE INTO buynow (username, totalamt, address, pincode, orderdate, ordertime, recdate, rectime) VALUES ("` + username + `",` + total + `,"` + address + `",` + pincode + `,"` + pres_date +`","` + pres_time + `","` + rec_date +`","` + rec_time + `:00");`;

        pool.query(sql, function(err, result) {
            if(err) throw err;
             callback(result.insertId);
        });
    },

    deletecl : function(username,  callback){
        sql = `DELETE FROM orders WHERE username = "` + username + `";`;
        pool.query(sql, function(err, result) {
            if(err) throw err;
            callback(result.insertId);
        });
    },
};

module.exports = User;

