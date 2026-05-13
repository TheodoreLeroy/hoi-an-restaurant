import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../modules/base_entity.entity';

@Entity('system_setting')
export class SystemSettingEntity extends BaseEntity {
  @Column({ length: 255 })
  key: string;

  @Column({ length: 255, nullable: true })
  value: string;

  @Column({ length: 255, nullable: true })
  description: string;
}
