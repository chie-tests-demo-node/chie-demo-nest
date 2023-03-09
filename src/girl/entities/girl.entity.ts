import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated } from 'typeorm'

@Entity()

export class Girl {

  // 生成不规则不重复的自动编号
  @Generated('uuid')
  uuid: string

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  age: number

  @Column()
  skill: string

  //自动生成时间
  @CreateDateColumn({ type: 'timestamp' })
  entryTime: Date

}