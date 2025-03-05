import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { QueryJwtUseCase } from '../../port/in/query/query-jwt.use-case';

@Injectable()
export class QueryJwtService implements QueryJwtUseCase {
  constructor(private readonly jwtService: JwtService) {}

  generateToken(userIdx: number, userName: string): string {
    return this.jwtService.sign({ id: userIdx, username: userName });
  }

  verifyToken(token: string): any {
    return this.jwtService.verify(token);
  }
}
