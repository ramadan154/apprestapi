'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API ku berjalan!", res)
};

//menampilkan semua data
exports.tampilsemuadata = function (req, res) {
    connection.query('SELECT * FROM pengguna', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

//menampilkan semua data berdasarkan id
exports.tampildataid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM pengguna WHERE id_pengguna = ?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menambahkan data pengguna
exports.tambahData = function(req,res) {
    var nama_pengguna = req.body.nama_pengguna;
    var email = req.body.email;
    var password = req.body.password;

    connection.query('INSERT INTO pengguna (nama_pengguna, email, password) VALUES(?,?,?)',
        [nama_pengguna, email, password],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Menambahkan Data!", res)
            }
        });
};

//Menghapus data
exports.hapusData = function (req, res) {
    var id_pengguna = req.body.id_pengguna;
    connection.query = ('DELETE FROM pengguna WHERE id_pengguna=?', [id_pengguna],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil Menghapus Data!", res)
            }
        });
}