const express = require("express");

const {
  createReservation,
  getReservations,
  deleteReservation,
} = require("../controllers/reservationController");

const router = express.Router();

router.post("/", createReservation);
router.get("/", getReservations);
router.delete("/:id", deleteReservation);

module.exports = router;
