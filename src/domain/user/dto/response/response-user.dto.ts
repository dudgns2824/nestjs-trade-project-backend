import { UserRoleType } from '../../enumeration/user-role.type';

export class ResponseUserDto {
  // idx
  idx: number;
  // 유저 id
  userId: string;
  // 유저 이름
  userName: string;
  // 유저 패스워드
  userPassword: string;
  // 유저 이메일
  userEmail: string;
  // 프로필 이미지 url
  profileImgUrl: string;
  // 헤더 이미지 url
  headerImgUrl: string;
  // 유저 권한
  userRole: UserRoleType;
}
