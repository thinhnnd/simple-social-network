import { Field, ObjectType } from '@nestjs/graphql';
import { IRelationContact } from '../interfaces/relation-contact.interface';

@ObjectType()
export class RelationContactType implements IRelationContact {
  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  phone: string;
}

@ObjectType()
export class UserType {
  @Field()
  id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  phone: string;

  @Field()
  address: string;

  @Field(() => [RelationContactType], { nullable: true })
  relationContact: IRelationContact[];
}
