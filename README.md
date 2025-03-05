## 폴더 구조 예시 (헥사고널 아키텍쳐 + 도메인 주도 개발 방식)

src/      
│── domain/ 도메인 계층 (비즈니스 로직)      
│   ├── 도메인 명/     
│   │   ├── dto/ response dto model      
│   │   │   ├── response/ response dto model      
│   │   │   ├── request/ 요청 dto model      
│   │   ├── enumeration/ enum 모음      
│   │   ├── port/ 포트       
│   │   │   ├── in/ in-포트      
│   │   │   ├── out/ out-포트      
│   │   ├── service/ 서비스 (비즈니스 로직 구현체 폴더)      
│      
│── infrastructure/ 인프라 계층 (DB, 외부 API, WebSocket)      
│   ├── 도메인 명/      
│   │   ├── repository/ 유저 도메인 에서의 DB 통신 구현체 (adapter out 역할)      
│   │   ├── entity/ entity typeORM entity      
│   │   ├── external-api/ 유저 도메인 에서의 외부 API 통신      
│   │   ├── websocket/ 유저 도메인 에서의 웹소켓 API 통신      
│   │   │   ├── rest-api/ rest-api 엔드포인트     
│   │   │   ├── config/ 웹소켓의 gateway 및 설정, 인터셉터 등의 파일이 존재하는 폴더.      
│      
│── interface/ 컨트롤러 모음 (어댑터의 in 역할)      
│   ├── 도메인 명/      
│   │   ├── 컨트롤러 파일들/ 유저 도메인 관련 API 및 WebSocket 엔드포인트 컨트롤러      
│      
│── common/                     공통 유틸리티 및 라이브러리      
│   ├── logger/                 로깅 관련 유틸리티      
│   ├── exception/              예외 처리 관련 유틸리티      
│   ├── encryption/             암호화 관련 유틸리티      
│── main.ts      
│── app.module.ts      