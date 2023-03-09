import { Module } from '@nestjs/common';
import { GirlModule } from './girl/girl.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoyModule } from './boy/boy.module';
import { ConfigModule } from './config/config.module';

// T应用程序的跟模块（root module）
@Module({
  imports: [GirlModule, BoyModule, ConfigModule.forRoot('我是小找'), TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'chaimin419',
    database: 'user',
    retryDelay: 500,
    retryAttempts: 10,
    synchronize: true, //是否将实体同步到数据库
    autoLoadEntities: true, //自动加载实体配置，forFeature()注册的每个实体都自己动加载
  })],
  controllers: [],
  providers: [],
})
export class AppModule { }
