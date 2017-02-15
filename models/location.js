const db = require('../lib/dbconnect');

function getAllLocations(req, res, next) {

  db.any('SELECT * FROM locations;')
    .then((data) => {
      res.data = data;
      next();
    })
    .catch(error => next(error));
}

function getFiltered(req, res, next) {
  db.any('SELECT * FROM location WHERE appName=$1, host=$2;', [req.body.appName, req.body.host])
      .then((data) => {
      res.rows = data;
      next();
    })
    .catch(error => next(error));
}

 function getFilteredDecs(req, res, next) {
  db.any('SELECT * FROM location WHERE appName=$1, host=$2 ORDER BY locTime DECS;', [req.body.appName, req.body.host])
      .then((data) => {
      res.rows = data;
      next();
    })
    .catch(error => next(error));
}

module.exports = {
  getAllLocations,
  getFiltered,
  getFilteredDecs
}

