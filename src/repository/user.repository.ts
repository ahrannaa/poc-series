import prisma from "../config/database.js";

async function getUsers() {
    return await prisma.users.findMany()
};

async function getUser (id: number) {
  const user = await prisma.users.findFirst({
    where:{
    id: id
  }})
  return user;
}

async function createUser (name: string, email: string) {
    const user = await prisma.users.create({
        data: {
          name,
          email
        }
    })
};

const userRepository = {
    getUsers,
    getUser,
    createUser
}

export default userRepository