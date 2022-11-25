const db = require('./db');

const getUsers = (req, res) => {
    db.query("select * from users").then(([user]) => {
        res.json(user);
    }).catch((err) => {
        console.error(err);
        res.status(500).send("Internal server error");
    })
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    db.query("select* from users where id = ?", [id]).then(([user]) => {
        if(user.length != 0) {
            res.send(user);
        } else {
            res.status(404).send("User not found");
        }
        
    }).catch((err) => {
        console.error(err);
        res.status(500).send("Internal server error");
    });
}

module.exports = {
    getUsers,
    getUserById
};