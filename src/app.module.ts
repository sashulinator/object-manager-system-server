import { Module } from '@nestjs/common'
import { LocalAuthService } from './local-auth/local-auth.service'
import { PrismaService } from './prisma.service'
import { UserController } from './users/user.controller'
import { SchemaController } from './schemas/schema.controller'
import { UserService } from './users/user.service'

@Module({
  imports: [],
  controllers: [UserController, SchemaController],
  providers: [PrismaService, UserService, LocalAuthService],
})
export class AppModule {}
