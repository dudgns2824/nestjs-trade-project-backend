import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { QueryJwtUseCase } from '../../port/in/query/query-jwt.use-case';
import { TokenType } from '../../enumeration/token.type';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class QueryJwtService implements QueryJwtUseCase {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  generateToken(
    userIdx: number,
    userName: string,
    tokenType: TokenType,
  ): string {
    return tokenType == TokenType.ACCESS
      ? this.jwtService.sign(
          { id: userIdx },
          {
            expiresIn: this.configService.get<string>(
              'ACCESS_TOKEN_VALID_TIME_MS',
            ),
          },
        )
      : this.jwtService.sign(
          { id: userIdx },
          {
            expiresIn: this.configService.get<string>(
              'REFRESH_TOKEN_VALID_TIME_MS',
            ),
          },
        );
  }

  verifyToken(token: string): any {
    return this.jwtService.verify(token);
  }
}
