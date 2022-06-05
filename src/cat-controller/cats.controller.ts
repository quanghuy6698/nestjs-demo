import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  /**
   *
   * @example: http://localhost:3000/cats/all
   */
  @Get('/all')
  findAll(): string {
    return 'All cats in shop.';
  }

  /**
   *
   * @example: http://localhost:3000/cats/findByName/bibi
   */
  @Get('/findByName/:name')
  async findOneByParam(@Param('name') catName: string) {
    let returnStr = catName + ' has created (by Param).';
    // return `${catName} has created.`;
    return returnStr;
  }

  /**
   *
   * @example: http://localhost:3000/cats/findByName2?name=bibi
   */
  @Get('/findByName2')
  async findOneByQuery(@Query('name') name: string) {
    let returnStr = name + ' has created (by Query).';
    // return `${catName} has created.`;
    return returnStr;
  }

  /**
   *
   * @example: http://localhost:3000/cats/findByName3?name=bibi
   */
  @Get('/findByName3')
  async findOneByQuery2(@Query() query: { name: string }) {
    let returnStr = query.name + ' has created (by Query2).';
    // return `${catName} has created.`;
    return returnStr;
  }

  /**
   *
   * @example: http://localhost:3000/cats
   * use @Body like this:
   * {
   *    "name": "bibi"
   * }
   */
  @Post()
  createOne(@Body() body: { name: string }) {
    // return body;
    return `${body.name} has created (by Post).`;
  }
}
