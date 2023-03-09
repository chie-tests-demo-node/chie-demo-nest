import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { GirlController } from './girl.controller';
import { GirlService } from './girl.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';
import { CounterMiddleware } from '../counter/counter.middleware';
import { BoyService } from '../boy/boy.service';

@Module({
  imports: [TypeOrmModule.forFeature([Girl])],
  controllers: [GirlController],
  providers: [GirlService, BoyService]
})

export class GirlModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CounterMiddleware).forRoutes({ path: 'girl', method: RequestMethod.GET })
  }
}
