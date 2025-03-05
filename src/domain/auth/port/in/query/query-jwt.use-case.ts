import { TokenType } from '../../../enumeration/token.type';

export interface QueryJwtUseCase {
  generateToken(
    userIdx: number,
    userName: string,
    tokenType: TokenType,
  ): string;

  verifyToken(token: string): any;
}
