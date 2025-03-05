import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../enumeration/user-role';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  // 유저 id
  @Column({ name: 'user_id', nullable: false })
  userId: string;

  // 유저 이름
  @Column({ name: 'user_name', nullable: false })
  userName: string;

  // 유저 패스워드
  @Column({ name: 'user_password', nullable: false })
  userPassword: string;

  // 유저 이메일
  @Column({ name: 'user_email', nullable: false })
  userEmail: string;

  // 프로필 이미지 url
  @Column({ name: 'profile_img_url', nullable: true })
  profileImgUrl: string;

  // 헤더 이미지 url
  @Column({ name: 'header_img_url', nullable: true })
  headerImgUrl: string;

  // 유저 권한
  @Column({ name: 'user_role', nullable: true, enum: UserRole })
  userRole: UserRole;
}
