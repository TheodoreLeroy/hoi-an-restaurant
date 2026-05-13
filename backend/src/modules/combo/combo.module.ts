import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComboEntity } from 'src/modules/combo/entities/combo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComboEntity])],
})
export class ComboModule {}
