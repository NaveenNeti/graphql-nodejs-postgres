import { Inject, Injectable } from '@nestjs/common';
import { CreateGroupInput } from './dto/create-group.input';
import { UpdateGroupInput } from './dto/update-group.input';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class GroupService {

  constructor(
    private prismaClient: PrismaService,
  ) { }

  async create(createGroupInput: CreateGroupInput) {
    const result = await this.prismaClient.groups.create({
      data: {
        name: createGroupInput.name
      }
    });
    this.logger.info(`Created group: ${createGroupInput.name} with id ${result.id}`);
  }

  findAll() {
    this.logger.info(`Loading groups`);
    return this.prismaClient.groups.findMany({});
  }

  findOne(id: string) {
    this.logger.info(`Loading group with id ${id}`);
    return this.prismaClient.groups.findUnique({
      where: {
        id: id
      }
    })
  }

  update(id: string, updateGroupInput: UpdateGroupInput) {
    return `This action updates a #${id} group`;
  }

  remove(id: string) {
    this.logger.info(`Deleting group with id ${id}`);
    this.prismaClient.groups.delete({
      where: {
        id: id
      }
    })
  }
}
