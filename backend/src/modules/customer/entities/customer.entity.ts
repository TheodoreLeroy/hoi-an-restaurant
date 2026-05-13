import { Entity, Column, Check, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base_entity.entity';
import { OrderEntity } from 'src/modules/order/entities/order.entity';

@Entity('customer')
export class CustomerEntity extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column({ length: 32 })
  phone: string;

  @Column({ length: 255 })
  email: string;

  @OneToMany((type) => OrderEntity, (od) => od.customerId)
  refreshToken: OrderEntity[];
}
