import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('/all')
  @HttpCode(200)
  findAll(
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

  @Put('update/:id')
  update(@Param('id') id: string): { message: string } {
    return { message: `Product #${id} Updated!` };
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string, @Res() response: Response): any {
    return response.json({
      message: `Product #${id} Removed!`,
    });
  }
}
