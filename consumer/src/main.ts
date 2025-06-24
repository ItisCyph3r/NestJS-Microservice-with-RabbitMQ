import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [configService.get<string>('RABBITMQ_URL')],
      queue: 'orders-queue',
      queueOptions: {
        durable: configService.get<string>('NODE_ENV') === 'production',
      },
    },
  });

  await app.startAllMicroservices();   

  // await app.listen(process.env.PORT || 9001);                
  // console.log('App is running on port 9001 and listening for RabbitMQ events');
  
  console.log('Microservice is running and listening for RabbitMQ events');
}
bootstrap();
