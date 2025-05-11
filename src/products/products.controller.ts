import { Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('/all')
  findAll(
    @Req()
    request: Request,
    @Res()
    response: Response,
    @Query()
    query: { page: number; limit: number },
  ): any {
    return response.json({ message: 'All Products!', query });
  }
  findOne(id: string) {
    return `This action returns a #${id} product`;
  }

  @Post('create')
  create(
    @Res()
    response: Response,
  ): any {
    return response.json({ message: 'Product Created!' });
  }
  update(id: string) {
    return `This action updates a #${id} product`;
  }
  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
