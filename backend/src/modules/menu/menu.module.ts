import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuCategoryEntity } from './entities/menu_category.entity';
import { MenuItemEntity } from './entities/menu_item.entity';
import { ItemTagEntity } from './entities/item_tag.entity';
import { ComboItemEntity } from './entities/combo_item.entity';
import { TagEntity } from './entities/tag.entity';
import { ComboEntity } from './entities/combo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ComboItemEntity,
      MenuCategoryEntity,
      MenuItemEntity,
      ComboEntity,
      ItemTagEntity,
      TagEntity,
    ]),
  ],
})
export class MenuModule {}
