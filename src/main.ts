import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'


function MiddleWareAll(req: any, res: any, next: any) {
  console.log('进入全局中间件')
  next()
}


// 应用程序的入口文件，它使用核心函数 NestFactory 来创建 Nest 应用程序的实例。
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('/haha') 配置全局的路由前缀
  app.use(cors(
    {
      origin: ['http://127.0.0.1:3005'],
      methods: ['GET', 'POST'],
    }
  ))

  // app.use(MiddleWareAll)
  await app.listen(3002); //监听的端口

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
