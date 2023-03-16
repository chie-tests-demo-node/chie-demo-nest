import { Controller, Get, Post, Query, Body, Headers } from '@nestjs/common';
import { Inject, Param } from '@nestjs/common/decorators';
import { GirlService } from './girl.service';
import { BoyService } from './../boy/boy.service';

// 路由文件
@Controller('girl')
export class GirlController {
  constructor(
    @Inject('Config') private shopName: string,
    private girlService: GirlService,
    private BoyService: BoyService,
  ) { }
  // ==this.girlService = new GirlService()


  @Get('/hotLoad')
  hotLoad(): any {
    return 'HotLoad Function';
  }

  @Get('/test')
  test(): string {
    return this.shopName
  }

  @Get('/getList')
  getGirls(): any {
    return this.girlService.getGirls()
  }

  @Post('/add')
  addGrils(@Body() body: any): any {
    return this.girlService.addGirl(body)
  }

  @Get('/delete/:id')
  deleteGirl(@Param() params: any): any {
    let id: number = parseInt(params.id)
    return this.girlService.delGirl(id)
  }

  @Get('/update/:id')
  updateGirl(@Param() params: any): any {
    let id: number = parseInt(params.id)
    return this.girlService.updateGirl(id)
  }

  @Get('/all')
  getAllGirls() {
    return this.girlService.getAllGirls()
  }

  @Get('/findGirlByName/:name')
  findGirlByName(@Param() params: any): any {
    let name: string = params.name
    return this.girlService.getGirlByName(name)
  }

  @Get('/corstest')
  corsTest(): any {
    return { message: '测试跨域请求成功' }
  }

  // @Query() 装饰器
  @Get('/getGirlById')
  getGirlById(@Query() query: any): any {
    let id: number = parseInt(query.id)
    return this.girlService.getGirlById(id)
  }

  // 动态路由
  @Get('/findGirlById/:id/:name')
  findGirlById(@Param() param: any, @Headers() headers: any): any {
    console.log(headers)
    let id: number = parseInt(param.id)
    return this.girlService.getGirlById(id)
  }
}
