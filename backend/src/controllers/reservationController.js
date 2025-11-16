const prisma = require("../services/prismaService");

const createReservation = async (req, res) => {
  const { userId, date } = req.body;
  try {
    const reservation = await prisma.reservation.create({
      data: {
        userId,
        date: new Date(date),
      },
    });
    res.json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getReservations = async (_req, res) => {
  const reservations = await prisma.reservation.findMany({
    include: { user: true },
  });
  res.json(reservations);
};

const deleteReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await prisma.reservation.delete({
      where: { id: parseInt(id) },
    });
    res.json(deleted);
  } catch (err) {
    res.status(404).json({ error: "Reserva não encontrada" });
  }
};

module.exports = { createReservation, getReservations, deleteReservation };
