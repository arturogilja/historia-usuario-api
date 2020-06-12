import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Product } from '../entities/Product'
import { ResourceNotFound } from '../errors/ResourceNotFound'

export const getAllProducts = async (req: Request, res: Response) => {
  const ProductRepository = getRepository(Product)
  const products = await ProductRepository.find({
    relations: ['image'],
  })

  return res.json({ success: true, products })
}

export const getProduct = async (req: Request, res: Response) => {
  const ProductRepository = getRepository(Product)
  const { id } = req.params
  const product = await ProductRepository.findOne(id, {
    relations: ['image'],
  })

  if (!product) throw new ResourceNotFound()

  return res.json({ success: true, product })
}
