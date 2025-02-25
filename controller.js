'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("Aplikasi REST API ku berjalan!",res)
};

//menampilkan semua data
exports.tampilsemuadata = function(req,res) {
    connection.query('SELECT * FROM pengguna', function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
};

//menampilkan semua data berdasarkan id
exports.tampildataid = function(req, res){
    let id = req.params.id;
    connection.query('SELECT * FROM pengguna WHERE id_pengguna = ?', [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        });
};