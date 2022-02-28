import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../repositories/DTOs/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    phone,
    address,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    await this.usersRepository.create({
      name,
      email,
      password,
      phone,
      address,
    });
  }
}

export { CreateUserUseCase };
