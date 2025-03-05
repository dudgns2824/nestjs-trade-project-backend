import { IsNotEmpty } from 'class-validator';

export class ResponseHealthCheckDto {
  @IsNotEmpty()
  userIdx: number;
  @IsNotEmpty()
  admin: boolean;
}
