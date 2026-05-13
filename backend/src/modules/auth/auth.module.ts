import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefreshTokenEntity } from './entities/refresh_token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RefreshTokenEntity])],
})
export class AuthModule {}
