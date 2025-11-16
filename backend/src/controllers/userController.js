const prisma = require("../services/prismaService");

const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUsers = async (_req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

module.exports = { createUser, getUsers };
