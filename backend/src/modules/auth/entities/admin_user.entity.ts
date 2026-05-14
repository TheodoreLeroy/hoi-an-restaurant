import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base_entity.entity';
import { RefreshTokenEntity } from 'src/modules/auth/entities/refresh_token.entity';
import { BlogPostEntity } from 'src/modules/cms/blog/blog_post.entity';

@Entity('admin_user')
export class AdminEntity extends BaseEntity {
  @Column()
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  passwordHash: string;

  // Before insert

  @OneToMany((type) => RefreshTokenEntity, (rt) => rt.userId)
  refreshToken: RefreshTokenEntity[];

  @OneToMany((type) => BlogPostEntity, (bp) => bp.author)
  blogPosts: BlogPostEntity[];
}
