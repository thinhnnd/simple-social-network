import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User, UserDocument } from './entities/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    try {
      const createdUser = new this.userModel(createUserInput);
      const user = await createdUser.save();

      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `[${JSON.stringify(error.keyValue)}] is alredy exist`,
        );
      }
    }
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    return users;
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.userModel.findById(id);
    const updatedUser = Object.assign(user, updateUserInput);
    console.log(updatedUser);
    return await this.userModel.findOneAndUpdate({ _id: id }, updatedUser);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
