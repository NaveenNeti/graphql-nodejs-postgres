import { CreateGroupInput } from './create-group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGroupInput extends PartialType(CreateGroupInput) {
  @Field(() => String, { description: 'The unique id as a v4 UUID' })
  id: string;

  @Field(() => String, { description: 'The unique group name' })
  name: string;
}
