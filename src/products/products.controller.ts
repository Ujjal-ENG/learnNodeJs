import {
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Redirect,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('/all')
  @HttpCode(200)
  @Header('Authorization', 'Bearer 123456')
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

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(
    @Res()
    response: Response,
    @Query()
    query: { isSuccess: boolean },
  ): any {
    if (query.isSuccess) {
      return response.redirect('https://docs.nestjs.com/v5');
    }
    return response.json({ message: 'Product Docs!' });
  }
}
