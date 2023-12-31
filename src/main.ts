import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors = require("cors");
  app.use(cors ({
    origin: '*'
  }));

  
  app.useGlobalPipes( 
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,

    })
  )
  useContainer (app.select(AppModule), {fallbackOnErrors:true});
  await app.listen(3000);
}
bootstrap();
