import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { QueryJwtUseCase } from '../../../../domain/auth/port/in/query/query-jwt.use-case';
import { AuthenticatedRequest } from '../interface/authenticate-request.interface';

@Injectable()
export class JwtFilter implements CanActivate {
  constructor(private readonly queryJwtUseCase: QueryJwtUseCase) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<AuthenticatedRequest>();
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException('JWT 토큰이 필요합니다.');
    }

    try {
      request.userIdx = this.queryJwtUseCase.verifyToken(token).id;
      return true;
    } catch (error) {
      throw new UnauthorizedException('유효하지 않은 JWT 토큰입니다.', error);
    }
  }

  private extractToken(request: Request): string | null {
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return null;
    }
    return authHeader.split(' ')[1];
  }
}
