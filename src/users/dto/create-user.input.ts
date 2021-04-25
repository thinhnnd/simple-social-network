import { InputType, OmitType, PartialType } from '@nestjs/graphql';
import { UserType } from '../types/user.type';

@InputType()
export class CreateUserInput extends OmitType(
  PartialType(UserType, InputType),
  ['id'],
) {}
