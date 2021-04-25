import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class RelationContact extends Document {
  @Prop()
  name: string;

  @Prop()
  phone: string;
}
export const RelationContactSchema = SchemaFactory.createForClass(
  RelationContact,
);

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: true, nullable: false })
  email: string;

  @Prop({ unique: true, nullable: false })
  username: string;

  @Prop({ nullable: false })
  phone: string;

  @Prop()
  address: string;

  @Prop({ type: [RelationContactSchema] })
  relationContact: RelationContact[];
}

export const UserSchema = SchemaFactory.createForClass(User);
