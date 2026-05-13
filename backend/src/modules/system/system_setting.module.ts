import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemSettingEntity } from './system_setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SystemSettingEntity])],
})
export class SystemModule {}
