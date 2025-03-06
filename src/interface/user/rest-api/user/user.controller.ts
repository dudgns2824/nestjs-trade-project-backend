import { Controller, Get, UseGuards } from '@nestjs/common';
import { QueryUserService } from '../../../../domain/user/service/query/query-user.service';
import { JwtFilter } from '../../../../infrastructure/security/jwt/filter/jwt.filter';
import { GetUserIdx } from '../../../../common/decorator/get-user.decorator';
import { ResponseHealthCheckDto } from '../../../../domain/user/dto/response/response-health-check.dto';

@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly queryUserService: QueryUserService) {}

  @UseGuards(JwtFilter)
  @Get('/healthCheck')
  healthCheck(@GetUserIdx() userIdx: number): ResponseHealthCheckDto {
    return this.queryUserService.healthCheck(userIdx);
  }
}
