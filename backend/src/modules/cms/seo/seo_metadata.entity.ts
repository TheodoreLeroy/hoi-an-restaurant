import { BaseEntity } from 'src/modules/base_entity.entity';
import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity('seo_metadata')
export class SeoMetadataEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 100,
  })
  modelType: string;

  @Column({
    type: 'uuid',
  })
  modelId: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  slug: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  metaTitle: string;

  @Column({
    type: 'text',
  })
  metaDescription: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  ogTitle?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  ogDescription?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  ogImage?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  canonicalUrl?: string;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updateAt: Date;
}
