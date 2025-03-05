import { QueryJwtService } from '../../service/query-jwt.service';
import { UserEntity } from '../../../../infrastructure/user/entity/user.entity';

export interface QueryJwtUseCase {
  generateToken(userIdx: number, userName: string): string;
  verifyToken(token: string): any;
}
