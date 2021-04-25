import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field((type) => String)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => String)
  email: string;

  @Field((type) => String)
  username: string;

  @Field((type) => String)
  phone: string;

  @Field((type) => String)
  address: string;
}
