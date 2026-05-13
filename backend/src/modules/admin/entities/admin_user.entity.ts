import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base_entity.entity';
import { RefreshTokenEntity } from 'src/modules/auth/entities/refresh_token.entity';

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
}
