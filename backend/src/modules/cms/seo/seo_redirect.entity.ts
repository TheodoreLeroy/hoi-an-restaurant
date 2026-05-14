import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '../../base_entity.entity';

@Entity('seo_redirect')
export class SeoRedirectEntity extends BaseEntity {
  /**
   * URL cũ
   * Ví dụ:
   * pho-bo
   */
  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  oldSlug: string;

  /**
   * URL mới
   * Ví dụ:
   * pho-bo-hoi-an
   */
  @Column({
    type: 'varchar',
    length: 255,
  })
  newSlug: string;

  /**
   * HTTP Redirect Status
   * 301 = Permanent Redirect
   * 302 = Temporary Redirect
   */
  @Column({
    type: 'int',
    default: 301,
  })
  statusCode: number;
}
