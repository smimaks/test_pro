import { ApiProperty } from '@nestjs/swagger';
export class AppResponse {
  @ApiProperty()
  message: string;
}
