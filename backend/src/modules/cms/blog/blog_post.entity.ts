import { BaseEntity } from 'src/modules/base_entity.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { BlogPostStatus } from '../dto/blog_post_status';
import { AdminEntity } from 'src/modules/auth/entities/admin_user.entity';

@Entity('blog_post')
export class BlogPostEntity extends BaseEntity {
  @Column({ length: 255 })
  title!: string;

  @Column({ length: 255, nullable: true })
  slug!: string;

  @Column({ type: 'text', nullable: true })
  content!: string;

  @Column({ length: 255, nullable: true })
  thumbnail!: string;

  @Column({ type: 'enum', enum: BlogPostStatus, default: BlogPostStatus.DRAFT })
  status!: BlogPostStatus;

  @Column({ nullable: true, default: 0 })
  viewCount!: number;

  @Column({ type: 'timestamp', nullable: true })
  publishedAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt!: Date;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt!: Date;

  @ManyToOne(() => AdminEntity, (admin) => admin.blogPosts, { nullable: true })
  author!: AdminEntity;
}
