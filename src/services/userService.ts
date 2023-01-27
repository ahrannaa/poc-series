import userRepository from "../repository/user.repository.js";

async function getUsers() {
    const users = await userRepository.getUsers();
    return users;
};

async function getUser(id: number) {
    const user = await userRepository.getUser(id);
    if (!user) {
      throw ("Esse usuário não existe");
    }
    return user;
};

async function postUser (name: string, email: string) {
   const newUser = await userRepository.createUser(name, email)
   return newUser
}

const userService = {
    getUser,
    getUsers,
    postUser
}

export default userService