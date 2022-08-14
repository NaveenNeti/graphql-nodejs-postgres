import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GroupService } from './group.service';
import { Group } from './entities/group.entity';
import { CreateGroupInput } from './dto/create-group.input';
import { UpdateGroupInput } from './dto/update-group.input';

@Resolver(() => Group)
export class GroupResolver {
  constructor(private readonly groupService: GroupService) { }

  @Mutation(() => Group)
  createGroup(@Args('createGroupInput') createGroupInput: CreateGroupInput) {
    return this.groupService.create(createGroupInput);
  }

  @Query(() => [Group], { name: 'groupAll' })
  findAll() {
    return this.groupService.findAll();
  }

  @Query(() => Group, { name: 'groupOne' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.groupService.findOne(id);
  }

  @Mutation(() => Group)
  updateGroup(@Args('updateGroupInput') updateGroupInput: UpdateGroupInput) {
    return this.groupService.update(updateGroupInput.id, updateGroupInput);
  }

  @Mutation(() => Group)
  removeGroup(@Args('id', { type: () => String }) id: string) {
    return this.groupService.remove(id);
  }
}
