var router = require('express').Router();
var bodyParser = require('body-parser');
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: true}));

var pool = new pg.Pool(config);

// get all tasks
router.get('/', function(req, res) {
  console.log('hit my get all employee route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      // SELECT * FROM task;
      client.query('SELECT * FROM employees ORDER BY id;', function(err, result) {
        done(); // close the connection db

        if(err){
          console.log(err);
          res.sendStatus(500); // the world exploded
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

// create a new task in the db
router.post('/', function(req, res) {
  console.log('hit post route');
  console.log('here is the body ->', req.body);

  var employeeObject = req.body;

  // db query
  // INSERT INTO task (name) VALUES ('test');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('INSERT INTO employees (first_name, last_name, id_number, job_title, annual_salary) VALUES ($1, $2, $3, $4, $5);',
        [employeeObject.first_name, employeeObject.last_name, employeeObject.id_number, employeeObject.job_title, employeeObject.annual_salary], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500); // the world exploded
          }else{
            res.sendStatus(201);
          }
      });
    }
  });
});

// create a new task in the db
router.delete('/:id', function(req, res) {
  var employeeToDeleteId = req.params.id;
  console.log('hit delete route');
  console.log('here is the id to delete ->', taskToDeleteId);

  // db query
  // DELETE FROM task WHERE id=7
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('DELETE FROM employees WHERE id=$1;',
        [employeeToDeleteId], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500); // the world exploded
          }else{
            res.sendStatus(200);
          }
      });
    }
  });
});



// create a new task in the db
// router.put('/:id', function(req, res) {
//   var employeId = req.params.id;
//   console.log('hit complete route');
//   console.log('here is the id to complete ->', taskToCompleteId);

  // db query
  // UPDATE task SET status = TRUE WHERE ID = 4;
  // pool.connect(function(err, client, done) {
  //   if(err){
  //     console.log(err);
  //     res.sendStatus(500);
  //   }else{
  //     client.query('UPDATE task Employees status=TRUE WHERE ID=$1;',
  //       [taskToCompleteId], function(err, result) {
  //         done();
  //         if(err){
  //           console.log(err);
  //           res.sendStatus(500); // the world exploded
  //         }else{
  //           res.sendStatus(200);
  //         }
  //     });
  //   }
  // });

module.exports = router;
