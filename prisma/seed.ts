const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt')

const prisma = new PrismaClient();
const password = bcrypt.hashSync('123456', 10)

const users = [
  {
    id: '0f40e224-a10f-492b-ade0-293a8fe24ad2',
    name: 'User One',
    email: "user1@test.com",
    password
  },
  {
    id: '0df2e7d7-51c9-430b-827e-ae5af4032be1',
    name: 'User Two',
    email: "user2@test.com",
    password
  },

]

const load = async () => {
  try {
    await prisma.user.createMany({ data: users })

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  };
}

load();