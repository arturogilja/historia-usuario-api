import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm'
import { Image } from './Image'

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column('text')
  description: string

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  price: string

  @OneToOne((t) => Image, (image) => image.product)
  @JoinColumn()
  image: Image
}
