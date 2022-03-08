import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    password,
    phone,
    address,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      phone,
      address,
      id,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  delete(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

export { UsersRepository };
