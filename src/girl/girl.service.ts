import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';

@Injectable()
export class GirlService {
  // 依赖注入
  constructor(@InjectRepository(Girl) private readonly girl: Repository<Girl>) { }

  getGirls(): any {
    return {
      code: 0,
      data: ['小段', '小柴'],
      msg: '请求女孩列表成功'
    }
  }

  // 增加一个女孩
  addGirl(): any {
    const data = new Girl()
    data.name = '大梨';
    data.age = 25;
    data.skill = '吃喝玩乐';
    return this.girl.save(data)
  }

  // 删除一个女陔
  delGirl(id: number): any {
    return this.girl.delete(id)
  }

  // 修改女陔信息
  updateGirl(id: number) {
    let data = new Girl()
    data.name = 'xiaoya';
    data.age = 24;
    return this.girl.update(id, data)
  }

  // 查询所有女孩信息
  getAllGirls() {
    return this.girl.find()
  }

  // 根据名称查询女孩信息(模糊搜索)
  getGirlByName(name: string) {
    return this.girl.find({
      where: {
        name: Like(`%${name}%`)
      }
    })
  }

  getGirlById(id: number) {
    let rstPerson: any = {}
    switch (id) {
      case 1:
        rstPerson = { id: 1, name: '璇璇', age: 18 }
        break;
      case 2:
        rstPerson = { id: 2, name: '小柴', age: 18 }
        break;
      case 3:
        rstPerson = { id: 3, name: '小段', age: 18 }
        break;
    }
    return rstPerson
  }
}
