import { Field, Int, ObjectType } from '@nestjs/graphql';

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
}
