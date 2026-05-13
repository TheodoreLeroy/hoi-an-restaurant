// import { EntitySchema} from 'typeorm'
// import { AdminEntity } from './entities/admin_user.entity'
// import { RefreshTokenEntity } from './entities/refresh_token.entity'
// import { ComboEntity } from './entities/combo.entity'
// import { CustomerEntity } from './entities/customer.entity'
// import { TagEntity } from './entities/tag.entity'
// import { SystemSettingEntity } from './entities/system_setting.entity'
// import { OrderEntity } from './entities/order.entity'
// import { MenuCategoryEntity } from './entities/menu_category.entity'
// import { MenuItemEntity } from './entities/menu_item.entity'
// import { type } from 'os'

// export const AdminSchema = new EntitySchema<AdminEntity>({
//     relations: {
//         refreshToken: {
//             type: 'one-to-many',
//             target: 'RefreshToken',
//             inverseSide: 'admin',
//             cascade: true
//         }
//     }
// });
