import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Group {
  @Field(() => String, { description: 'The unique id as a v4 UUID' })
  id: string;

  @Field(() => String, { description: 'The unique group name' })
  name: string;
}
