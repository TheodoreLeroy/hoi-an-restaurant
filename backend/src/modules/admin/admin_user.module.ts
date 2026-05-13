import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from 'src/modules/admin/entities/admin_user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
})
export class AdminModule {}
