import { Controller, Get, Redirect, Res, HttpStatus } from '@nestjs/common';
import { Post, Req, Header, HttpCode } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { Response, Request } from 'express';

// Routing mechanism controls which controller receives which requests
@Controller() // associate class with required metadata and enable Nest to create a routing map
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Cache-Control', 'none') // add custom headers
  @HttpCode(204) // and custom response codes. Default 200 (except POST which is 201)
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @Redirect('https://nestjs.com', 301) // also add redirections
  postHello(@Req() request: Request): string {
    return this.appService.postHello(request.body);
  }

  @Get('res')
  getResponse(@Res() res: Response) {
    res.status(HttpStatus.OK).send();
  }
}
