import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { CustomLogger } from './common/logger/customLogger';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  const systemConfig: ConfigService = app.get(ConfigService);
  const logger: CustomLogger = app.get(CustomLogger);
  await app.listen(systemConfig.get<number>('system.SERVER_PORT'), ()=>{
    logger.log(`API running in '${systemConfig.get<number>('system.NODE_ENV')}' environment`,'AppConfiguration')
    logger.log(`API running on port ${systemConfig.get<number>('system.SERVER_PORT')}`,'AppConfiguration')
  });
}
bootstrap();
