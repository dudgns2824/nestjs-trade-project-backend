import { ResponseHealthCheckDto } from '../../../dto/response/response-health-check.dto';

export interface QueryUserUseCase {
  healthCheck(): ResponseHealthCheckDto;
}
