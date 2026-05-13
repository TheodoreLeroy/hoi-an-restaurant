import { Entity, ManyToOne, JoinColumn, PrimaryColumn, Unique } from 'typeorm';
import { BaseEntity } from '../../../modules/base_entity.entity';
import { MenuItemEntity } from './menu_item.entity';
import { TagEntity } from './tag.entity';

@Entity('item_tags')
// @Unique(['menuItem', 'tag'])
export class ItemTagEntity extends BaseEntity {
  @ManyToOne((type) => MenuItemEntity, (item) => item.itemTag, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'item_id' })
  menuItem: MenuItemEntity;

  @ManyToOne((type) => TagEntity, (tag) => tag.itemTag, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'tag_id' })
  tag: TagEntity;
}
