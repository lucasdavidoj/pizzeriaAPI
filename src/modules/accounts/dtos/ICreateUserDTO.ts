interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  id?: string;
}

export { ICreateUserDTO };
