import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entity/user';
import { UserDto } from '../dto/user-dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getOne(id: string): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async createUser(user: UserDto): Promise<User> {
    const newUser = new User(user.firstName, user.lastName, user.isActive);
    return await this.userRepository.save(newUser);
  }

  async update(id: number, user: UserDto): Promise<User> {
    const updateUser: User = await this.userRepository.findOne(id);
    updateUser.firstName = user.firstName || updateUser.firstName;
    updateUser.lastName = user.lastName || updateUser.lastName;
    updateUser.isActive = user.isActive;
    return await this.userRepository.save(updateUser);
  }

  async remove(id: string): Promise<any> {
    await this.userRepository.delete(id);
  }
}
