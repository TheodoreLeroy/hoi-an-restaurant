import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/modules/base_entity.entity';
import { OrderItem } from './order_item.entity';
import { MenuCategoryEntity } from './menu_category.entity';
import { ItemTagEntity } from './item_tag.entity';
import { ComboItemEntity } from './combo_item.entity';

@Entity('menu_item')
export class MenuItemEntity extends BaseEntity {
  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column({ length: 255, nullable: true })
  detail: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  img: string;

  @Column({ default: 1 })
  stock: number;

  @Column({ nullable: true, default: null })
  discount: number;

  // 1-n category
  @OneToMany((type) => MenuCategoryEntity, (ctgr) => ctgr.itemId)
  category: MenuCategoryEntity[];

  // 1-n order_item
  @OneToMany((type) => OrderItem, (odItem) => odItem.itemId)
  orderItems: OrderItem[];

  // 1-n item_tag
  @OneToMany((type) => ItemTagEntity, (itemTag) => itemTag.menuItem)
  itemTag: ItemTagEntity[];

  // 1-n item_combo
  @OneToMany((type) => ComboItemEntity, (comboItem) => comboItem.menuItem)
  comboItem: ComboItemEntity[];
}
