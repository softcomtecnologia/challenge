import User from '../models/User';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UsersRepository extends Repository<User> {

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUserInSameEmail = await this.findOne({
      where: { email },
    });

    return findUserInSameEmail;
  }

  public async findByCnpj(cnpj: string): Promise<User | undefined> {
    const findUserInSameCnpj = await this.findOne({
      where: { cnpj },
    });

    return findUserInSameCnpj;
  }
}

export default UsersRepository;