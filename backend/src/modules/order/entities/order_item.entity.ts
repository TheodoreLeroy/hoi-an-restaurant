import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { MenuItemEntity } from 'src/modules/menu/entities/menu_item.entity';
import { BaseEntity } from '../../../modules/base_entity.entity';
import { OrderEntity } from 'src/modules/order/entities/order.entity';

@Entity()
export class OrderItem extends BaseEntity {
  @ManyToOne(() => OrderEntity, (od) => od.id)
  @JoinColumn({ name: 'orderId' })
  @PrimaryColumn()
  orderId: string;

  @ManyToOne(() => MenuItemEntity, (item) => item.id)
  @JoinColumn({ name: 'itemId' })
  @PrimaryColumn()
  itemId: string;

  @Column({ default: 1 })
  quantity: number;
}
