import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { number } from 'joi';
import { Document } from 'mongoose';


@Schema()
export class Product extends Document {
  @Prop({ requiered: true})
  name: string;

  @Prop()
  description: string;

  @Prop({type: number})
  price: number;

  @Prop({type: number})
  stock: number;

  @Prop()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
