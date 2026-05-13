import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './modules/admin/admin_user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ComboModule } from './modules/combo/combo.module';
import { CustomerModule } from './modules/customer/customer.module';
import { MenuModule } from './modules/menu/menu.module';
import { OrderModule } from './modules/order/order.module';
import { SystemModule } from './modules/system/system_setting.module';

const config = process.env;
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: (config.DB_TYPE as 'postgres') || 'postgres',
      host: config.DB_HOST,
      port: Number(config.DB_PORT) || 5432,
      username: config.DB_USERNAME,
      password: config.DB_PASSWORD,
      database: config.DB_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
      migrations: ['dist/database/migrations/*.js'],
      logging: true,
    }),
    AdminModule,
    AuthModule,
    ComboModule,
    CustomerModule,
    MenuModule,
    OrderModule,
    SystemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
