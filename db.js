"use strict";
const sqlite3 = require("sqlite3").verbose();

class Db {
  constructor(file) {
    this.db = new sqlite3.Database(file);
    this.createTable();
    this.createCarTable();
  }

  //TABLE CONTAINING CAR DATA
  createCarTable() {
    const sql = `CREATE TABLE IF NOT EXISTS car (
        id integer PRIMARY KEY,
        contructor text,
        model text,
        year text)`;
    return this.db.run(sql);
  }

  selectByBrand(brand, callback) {
    return this.db.get(`SELECT * FROM car WHERE brand = ?`, [brand], function(
      err,
      row
    ) {
      callback(err, row);
    });
  }

  selectAll(callback) {
    return this.db.all(`SELECT * FROM car`, function(err, rows) {
      callback(err, rows);
    });
  }

  updateCar(car, callback) {
    return this.db.run(
      `UPDATE car SET  
        constructor = ?,
        model = ?,
        year = ?
        WHERE id = ?`,
      [car.constructor, car.model, car.year, car.id],
      err => {
        callback(err);
      }
    );
  }

  insertCar(car, callback) {
    return this.db.run(
      "INSERT INTO car (id,constructor,model,year) VALUES (?,?,?,?)",
      car,
      err => {
        callback(err);
      }
    );
  }

  //TABLE CONTAINING USER DATA
  createTable() {
    const sql = `
            CREATE TABLE IF NOT EXISTS user (
                id integer PRIMARY KEY,
                name text,
                email text UNIQUE,
                user_pass text,
                is_admin integer)`;
    return this.db.run(sql);
  }

  selectByEmail(email, callback) {
    return this.db.get(`SELECT * FROM user WHERE email = ?`, [email], function(
      err,
      row
    ) {
      callback(err, row);
    });
  }

  insertAdmin(user, callback) {
    return this.db.run(
      "INSERT INTO user (name,email,user_pass,is_admin) VALUES (?,?,?,?)",
      user,
      err => {
        callback(err);
      }
    );
  }

  selectAll(callback) {
    return this.db.all(`SELECT * FROM user`, function(err, rows) {
      callback(err, rows);
    });
  }

  insert(user, callback) {
    return this.db.run(
      "INSERT INTO user (name,email,user_pass) VALUES (?,?,?)",
      user,
      err => {
        callback(err);
      }
    );
  }
}

module.exports = Db;
