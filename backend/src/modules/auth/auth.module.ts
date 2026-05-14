import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefreshTokenEntity } from './entities/refresh_token.entity';
import { AdminEntity } from './entities/admin_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity, RefreshTokenEntity])],
})
export class AuthModule {}
