import { Module } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupResolver } from './group.resolver';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  imports: [],
  providers: [GroupResolver, GroupService, PrismaService]
})
export class GroupModule { }
