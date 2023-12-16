import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppResponse } from './app-dto/app-response';
@ApiTags('app')
@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Успешное выполнение запроса',
    type: AppResponse,
  })
  getHello(): Record<string, string> {
    return this.appService.getHello();
  }
}
