import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { OrderItem } from './entities/order_item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, OrderItem])],
})
export class OrderModule {}
