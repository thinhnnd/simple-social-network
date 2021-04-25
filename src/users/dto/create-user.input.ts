import { InputType, OmitType, PartialType, Field } from '@nestjs/graphql';
import { UserType } from '../types/user.type';
import RelationContactInput from './relation-contact.input';

@InputType()
export class CreateUserInput extends OmitType(
  PartialType(UserType, InputType),
  ['id', 'relationContact'],
) {
  @Field()
  relationContact: RelationContactInput;
}
