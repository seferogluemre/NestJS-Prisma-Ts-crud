import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductsService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createProductDto: Prisma.ProductCreateInput) {
    return this.databaseService.product.create({
      data: createProductDto
    })
  }

  async findAll() {
    return this.databaseService.product.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where: {
        id: id
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        availibility: true,
        createdAt: true,
        sale: true,
        reviews: true,
        tags: true
      }
    })
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.databaseService.product.update({
      where: {
        id: id
      },
      data: updateProductDto
    })
  }

  async remove(id: number) {
    return this.databaseService.product.delete({
      where: {
        id: id
      }
    })
  }
}
