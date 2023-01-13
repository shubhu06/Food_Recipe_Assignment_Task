const express = require ('express');
const app = express();

const cors = require ('cors');
app.use(cors());

const  port = 2001; 

const jwt = require('jsonwebtoken')
pass = 'sfdbgnb dmnv jhbrgh dnv sdhfbhsdskd';

const mysql = require ('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'food_recipe'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});

// login Api....

app.post('/login', (req, res) => {
    const { user_id, password } = req.body;

    connection.query('SELECT* FROM user  WHERE user_id = ? AND password = ?', [user_id, password], (err, rows) => {
        if (err) {
            res.status(500).send({
                success: false,
                msg: err.sqlMessage,
                data: []
            });
        } else {

            if (!rows.length) {
                res.status(401).send({
                    success: false,
                    msg: "invalid user_id or password",
                    data: []
                });

            } else {
                const id = rows[0].id;
                const name = rows[0].name;
                const user_id = rows[0].user_id;
                const token = jwt.sign({ id, name, user_id }, pass, { expiresIn: '1d' });
                res.status(200).send({
                    success: true,
                    msg: 'Login Succefully',
                    data: token 
                });
            }

        }
    });
});

// get All Recipes....

app.get('/recipes', (req, res) => {


    const query = 'SELECT recipe.*, user.name AS creatorName FROM recipe, user WHERE recipe.creator_id = user.id;';
    connection.query(query, (err, result) => {
        if (err) {
            res.status(500).send({
                success: false,
                msg: err.sqlMessage,
                data: []
            })
        } else {
            res.status(200).send({
                success: true,
                msg: 'query completed successfully',
                data: result
            })
        }
    })
});

// get ALL Detailed_Step by Id....
app.get('/detailed_step/:id', (req, res) => {
    const recipe_id = req.params.id;
    const query = 'SELECT* FROM process WHERE recipe_id = ?';
    connection.query(query,[recipe_id ] ,(err, result) => {
        if (err) {
            res.status(500).send({
                success: false,
                msg: err.sqlMessage,
                data: []
            })
        } else {
            res.status(200).send({
                success: true,
                msg: 'query completed successfully',
                data: result
            })
        }
    })
});

// get All details...
app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const query = 'SELECT recipe.name, user.name, recipe.description, recipe.image_url, ingredients.amount, process.step FROM recipe, user, ingredients, process WHERE recipe.creator_id = user.id AND process.recipe_id = recipe.id AND ingredients.recipe_id = recipe.id AND user.id = ?';
    connection.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).send({
                success: false,
                msg: err.sqlMessage,
                data: []
            })
        } else {
            res.status(200).send({
                success: true,
                msg: 'query completed successfully',
                data: result
            })
        }
    })
});

// Middleware Jwt Token....
function verifyToken(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        res.status(401).send({
            success: false,
            msg: 'unauthorised',
            data: []
        });
    } else {
        jwt.verify(token, pass, (err, decoded) => {
            if (err) {
                res.status(401).send({
                    success: false,
                    msg: 'unauthorised',
                    data: []
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }

}


app.listen(port, () =>{
console.log("server Started On " + port)
})