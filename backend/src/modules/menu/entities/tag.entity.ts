import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/modules/base_entity.entity';
import { ItemTagEntity } from './item_tag.entity';

@Entity('tag')
export class TagEntity extends BaseEntity {
  @Column({ length: 32 })
  tag: string;

  @Column({ length: 255, nullable: true })
  description: string;

  // 1-n item_tag
  @OneToMany((type) => ItemTagEntity, (itemTag) => itemTag.tag)
  itemTag: ItemTagEntity[];
}
