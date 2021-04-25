import { InputType, Field } from '@nestjs/graphql';
import { IRelationContact } from '../interfaces/relation-contact.interface';

@InputType()
export default class RelationContactInput implements IRelationContact {
  @Field()
  name: string;

  @Field()
  phone: string;
}
