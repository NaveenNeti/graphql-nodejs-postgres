import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { format, join } from 'path';
import { GroupModule } from './group/group.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
      debug: true,
      playground: true
    }),
    GroupModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
