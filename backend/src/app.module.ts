import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { CustomerModule } from './modules/customer/customer.module';
import { MenuModule } from './modules/menu/menu.module';
import { OrderModule } from './modules/order/order.module';
import { SystemModule } from './modules/system/system_setting.module';
import { CmsModule } from './modules/cms/cms.module';

const config = process.env;
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: (config.DB_TYPE as 'postgres') || 'postgres',
      host: config.DB_HOST || 'localhost',
      port: Number(config.DB_PORT) || 5060,
      username: config.DB_USERNAME || 'postgres',
      password: config.DB_PASSWORD || '05032002',
      database: config.DB_DATABASE || 'hoi_an_restaurant',
      synchronize: true,
      autoLoadEntities: true,
      migrations: ['dist/database/migrations/*.js'],
      logging: true,
    }),
    CmsModule,
    AuthModule,
    CustomerModule,
    MenuModule,
    OrderModule,
    SystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
