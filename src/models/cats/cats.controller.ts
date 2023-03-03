import { Controller, Get, Param, Put, Delete, Body } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats') // takes requests under /cats route
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAll(): string {
    return this.catsService.getAll();
  }

  /**
   * params can be obtaind in general from @Param() params
   * or specific parameters such as @Param('id') id: string
   */
  @Get('breed/:id') // produce a route mapping for requests like GET /cats/breed/:id
  getBreed(@Param('id') id: string): string {
    console.log('getBreed', id);
    return this.catsService.getBreed(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
