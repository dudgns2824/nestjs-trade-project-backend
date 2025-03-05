import { QueryJwtService } from '../../../service/query/query-jwt.service';
import { UserEntity } from '../../../../user/entity/user.entity';

export interface QueryJwtUseCase {
  generateToken(userIdx: number, userName: string): string;
  verifyToken(token: string): any;
}
