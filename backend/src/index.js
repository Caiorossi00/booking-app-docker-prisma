const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");
const reservationRoutes = require("./routes/reservation");

const app = express();
app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/reservations", reservationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
