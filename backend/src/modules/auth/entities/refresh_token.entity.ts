import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/modules/base_entity.entity';
import { AdminEntity } from './admin_user.entity';

@Entity('refresh_token')
export class RefreshTokenEntity extends BaseEntity {
  @Column({ length: 255 })
  hashToken: string;

  @CreateDateColumn()
  createAt: Date;

  @Column()
  expireAt: Date;

  @Column({ default: null })
  revokeAt: Date;

  @ManyToOne((type) => AdminEntity, (ad) => ad.refreshToken)
  userId: AdminEntity;
}
