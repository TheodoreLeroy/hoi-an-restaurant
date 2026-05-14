import { Entity, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { BaseEntity } from '../../base_entity.entity';
import { ComboEntity } from './combo.entity';
import { MenuItemEntity } from './menu_item.entity';

@Entity('combo_item')
// @Unique(['menu_item, combo'])
export class ComboItemEntity extends BaseEntity {
  @ManyToOne((type) => MenuItemEntity, (item) => item.comboItem, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'item_id' })
  menuItem: MenuItemEntity;

  @ManyToOne((type) => ComboEntity, (combo) => combo.comboItem, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'combo_id' })
  combo: ComboEntity;
}
