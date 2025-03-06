import { ResponseUserDto } from '../../../dto/response/response-user.dto';

export interface QueryUserRepository {
  getUserByUserIdx(userIdx: number): Promise<ResponseUserDto | null>;
}
