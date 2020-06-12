import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { Product } from './Product'

@Entity({ name: 'images' })
export class Image {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  smallUrl: string

  @Column()
  mediumUrl: string

  @Column()
  bigUrl: string

  @OneToOne((t) => Product, (product) => product.image)
  product: Product
}
