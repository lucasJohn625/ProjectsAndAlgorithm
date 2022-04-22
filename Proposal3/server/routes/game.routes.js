const gameController = require("../controllers/game.controller");

module.exports = (app) => {
  app.post("/api/game", gameController.createNewGame);
  app.get("/api/game", gameController.getAllGames);
  app.get("/api/game/:id", gameController.getOneGame);
  app.put("/api/game/:id", gameController.updateGame);
  app.delete("/api/game/:id", gameController.deleteExistingUser);
}; 