import { NestFactory } from '@nestjs/core'; // exposes a few static methods that allow creating an application instance
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // returns an application object with `INestApplication` interface
  //const app = await NestFactory.create<NestExpressApplication>(AppModule); // only if actually want to access the underlying platform API.
  await app.listen(3000);
}
bootstrap();
