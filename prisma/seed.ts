import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();
const password = bcrypt.hashSync('123456', 10)

const users = [
  {
    id: '0f40e224-a10f-492b-ade0-293a8fe24ad2',
    name: 'User One',
    email: "user1@test.com",
    photo: faker.internet.avatar(),
    password
  },
  {
    id: '0df2e7d7-51c9-430b-827e-ae5af4032be1',
    name: 'User Two',
    email: "user2@test.com",
    photo: faker.internet.avatar(),
    password
  }
]

const load = async () => {
  try {
    for (let i = 0; i < 10; i++) {
      const name = faker.name.fullName()
      const user = {
        id: faker.datatype.uuid(),
        name,
        email: faker.internet.email(name),
        photo: faker.internet.avatar(),
        password
      }

      users.push(user)
    }

    await prisma.user.createMany({ data: users })

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  };
}

load();