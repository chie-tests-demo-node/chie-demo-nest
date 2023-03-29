import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Girl } from './entities/girl.entity';

@Injectable()
export class GirlService {
  // 依赖注入
  constructor(@InjectRepository(Girl) private readonly girl: Repository<Girl>) { }

  // 增加一个女孩
  async addGirl(data: any) {
	// const onePerson = this.girl.findOne({select:['name']})
	// console.log(onePerson)
    return this.girl.save(data)
  }
  
  findOneGirl(id:any){
	  return this.girl.findOne(id)
  }

  // 删除一个女陔
  delGirl(id: number): any {
    return this.girl.delete(id)
  }

  // 修改女陔信息
  updateGirl(data: any) {
    return this.girl.update(data.id, data)
  }
  
  /**
   * 查询所有女孩信息
   */
  async getAllGirls() {
    const girlInfo = await this.girl.find()
	const newResult = Array.from(new Set(girlInfo))
    const girlTotal = girlInfo.length
    const allGirlInfo = {
      girlList: newResult.reverse(),
      total: girlTotal
    }
    return allGirlInfo
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
