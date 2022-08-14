import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGroupInput {
  @Field(() => String, { description: 'The unique group name' })
  name: string;
}
