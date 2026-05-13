import { Column, Entity, ManyToOne } from 'typeorm';
import { MenuItemEntity } from './menu_item.entity';
import { BaseEntity } from 'src/modules/base_entity.entity';

@Entity('menu_category')
export class MenuCategoryEntity extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  description: string;

  // n-1 menu_item
  @ManyToOne((type) => MenuItemEntity, (item) => item.category)
  itemId: MenuItemEntity;
}
