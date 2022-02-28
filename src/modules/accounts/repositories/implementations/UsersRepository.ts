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

  findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ email });

    return user;
  }
}

export { UsersRepository };
