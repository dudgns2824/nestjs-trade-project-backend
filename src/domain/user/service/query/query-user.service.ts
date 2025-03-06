import { ResponseHealthCheckDto } from '../../dto/response/response-health-check.dto';
import { QueryUserUseCase } from '../../port/in/query/query-user.use-case';

export class QueryUserService implements QueryUserUseCase {
  healthCheck(): ResponseHealthCheckDto {
    throw new Error('Method not implemented.');
  }
}
