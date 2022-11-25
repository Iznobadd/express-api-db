const db = require('./db');

const getMovies = (req, res) => {
  db.query("select * from movies").then(([movies]) => {
    res.json(movies);
  }) .catch((err) => {
    console.error(err);
    res.status(500).send("Internal server error");
  })
}

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  db.query("select * from movies where id = ?", [id]).then(([movie]) => {
    console.log(movie);
    if(movie.length != 0) {
      res.json(movie);
    } else {
      res.status(404).send('Movie not found');
    }
  }) .catch((err) => {
    res.status(500).send(err);
  })
}


module.exports = {
  getMovies,
  getMovieById,
};
