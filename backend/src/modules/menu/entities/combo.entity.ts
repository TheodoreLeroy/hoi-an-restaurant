import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base_entity.entity';
import { ComboItemEntity } from '../../menu/entities/combo_item.entity';

@Entity('combo')
export class ComboEntity extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  description: string;

  // 1-n item_combo
  @OneToMany((type) => ComboItemEntity, (comboItem) => comboItem.combo)
  comboItem: ComboItemEntity[];
}
