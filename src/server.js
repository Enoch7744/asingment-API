require("./db/connections");

const express = require("express");
const userRouter = require('./user/userRoutes');
const movieRouter = require('./movies/moviesRoutes');

const app = express();
const port = process.env.PORT  || 5001;

app.use(express.json());

app.use(userRouter);
app.use(movieRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

