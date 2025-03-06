import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  userIdx?: number;
}
