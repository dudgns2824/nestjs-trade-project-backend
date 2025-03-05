import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule, // 환경 변수 사용을 위한 모듈
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // .env에서 설정
      }),
    }),
  ],
  exports: [JwtModule], // 다른 모듈에서 사용 가능하도록 export
})
export class JwtConfigModule {}
