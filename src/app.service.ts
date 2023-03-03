import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  postHello(body): string {
    console.log(body);
    return 'Success!';
  }
}
