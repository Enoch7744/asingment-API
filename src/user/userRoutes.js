const {Router} = require("express");
const {createUser, listUsers, login, updatedEmail, deleteUser, token} = require("./userControllers");
const {hashPass,comparePass, tokenCheck} = require("../middleware");

const userRouter = Router();
userRouter.post("/login", comparePass, login);
userRouter.put("/update", updatedEmail);
userRouter.delete("/deleteUser", comparePass, deleteUser);
userRouter.get("/authCheck", tokenCheck, login);
userRouter.get("/listUser", tokenCheck, listUsers);
userRouter.post("/addUser", hashPass, createUser);


module.exports = userRouter;