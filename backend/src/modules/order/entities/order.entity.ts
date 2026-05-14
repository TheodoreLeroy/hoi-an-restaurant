import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base_entity.entity';
import { CustomerEntity } from 'src/modules/customer/entities/customer.entity';
import { OrderItem } from './order_item.entity';

@Entity('order')
export class OrderEntity extends BaseEntity {
  @Column()
  orderTime: Date;

  @Column()
  createAt: Date;

  @Column({ default: 1 })
  totalGuest: number;

  @Column()
  totalPrice: number;

  @Column({ length: 255, nullable: true })
  note: string;

  @Column({ length: 32, default: 'pending' })
  orderStatus: 'pending' | 'approve' | 'cancel' | 'complete';

  // n-1 customer
  @ManyToOne((type) => CustomerEntity, (c) => c.id)
  customerId: CustomerEntity;

  // 1-n order_item
  @OneToMany((type) => OrderItem, (odItem) => odItem.orderId)
  orderItems: OrderItem[];
}
