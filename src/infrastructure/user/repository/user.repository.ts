import { ResponseUserDto } from 'src/domain/user/dto/response/response-user.dto';
import { QueryUserRepository } from '../../../domain/user/port/out/query/query-user.repository';
import { UserEntity } from '../../../domain/user/entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements QueryUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async getUserByUserIdx(userIdx: number): Promise<ResponseUserDto | null> {
    const user = await this.userRepo.findOne({ where: { idx: userIdx } });
    return user ? this.toResponseDto(user) : null;
  }

  private toResponseDto(user: UserEntity): ResponseUserDto {
    return {
      idx: user.idx,
      userId: user.userId,
      userName: user.userName,
      userPassword: user.userPassword,
      userEmail: user.userEmail,
      profileImgUrl: user.profileImgUrl,
      headerImgUrl: user.headerImgUrl,
      userRole: user.userRole,
    };
  }
}
