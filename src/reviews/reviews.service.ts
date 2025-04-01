import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewsService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createReviewDto: Prisma.ReviewsCreateInput) {
    return this.databaseService.product.create({
      data: createReviewDto
    })
  }

  async findAll() {
    return this.databaseService.reviews.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.reviews.findUnique({
      where: {
        id: id
      },
    })
  }

  async update(id: number, updateReviewDto: Prisma.ReviewsUpdateInput) {
    return this.databaseService.reviews.update({
      where: {
        id: id
      },
      data: updateReviewDto
    })
  }

  async remove(id: number) {
    return this.databaseService.reviews.delete({
      where: {
        id: id
      }
    })
  }
}
