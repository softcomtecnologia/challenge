import { EntityRepository, Repository } from 'typeorm';

import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {

  public async findById(id: string): Promise<User | undefined> {
    const findUserInSameId = await this.findOne({
      where: { id },
    })

    return findUserInSameId;
  }

  public async findByEmail(email: string): Promise<User | boolean> {
    const findUserInSameEmail = await this.findOne({
      where: { email },
    });

    return findUserInSameEmail || false;
  }

  public async findByCnpj(cnpj: string): Promise<User | boolean> {
    const findUserInSameCnpj = await this.findOne({
      where: { cnpj },
    });

    return findUserInSameCnpj || false;
  }
}

export default UsersRepository;