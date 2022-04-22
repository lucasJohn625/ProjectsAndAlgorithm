const Game = require("../models/games.model");

const createNewGame = (req, res) => {
  Game.create(req.body)
    .then((newGame) => {
      res.json({ newGame });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const getAllGames = (req, res) => {
  Game.find()
    .then((allGames) => {
      res.json(allGames);
    })
    .catch((err) => {
      res.json({ message: 'Something went wrong', error: err })
  });
  };



const getOneGame = (req, res) => {
  Game.findOne({ _id: req.params.id })
    .then((queriedGame) => {
      res.json(queriedGame);
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const updateGame = (req, res) => {
  Game.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedGame) => {
      res.json({ updatedGame });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

const deleteExistingUser = (req, res) => {
  Game.deleteOne({ _id: req.params.id })
    .then((deletedResponse) => {
      res.json({ deletedResponse });
    })
    .catch((err) => {
      res.status(400).json({ err });
    });
};

module.exports = {
  createNewGame,
  getOneGame,
  getAllGames,
  updateGame,
  deleteExistingUser,
};