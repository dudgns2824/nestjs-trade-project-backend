import { ResponseHealthCheckDto } from '../../dto/response/response-health-check.dto';
import { QueryUserUseCase } from '../../port/in/query/query-user.use-case';

export class QueryUserService implements QueryUserUseCase {
  healthCheck(userIdx: number): ResponseHealthCheckDto {
    return {
      userIdx: userIdx,
      admin: false,
    };
  }
}
