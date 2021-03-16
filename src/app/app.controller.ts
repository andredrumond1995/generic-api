import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller(`/`)
@ApiTags(`root`)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(`/`)
  getHello() {
    return this.appService.rootPathMsg();
  }


   @Get(`/test`)
  testTest() {
    return {"msg":"testing route"};
  }
}
