# AGENTS Guide for heewon.dev

`.cursor/rules`에 있는 규칙을 직접 조회해 사용하는 요약 인덱스입니다. 세부 내용은 각 파일을 열어 확인하세요.

## ⚠️ 필수 준수 사항

**코드를 작성하기 전에 반드시 해당 영역의 규칙 파일을 읽고 준수해야 합니다.**

| 작업 유형 | 필수 참조 규칙 파일 |
|-----------|---------------------|
| 프론트엔드 개발 | `100-client-development.mdc`, `110-frontend-performance.mdc`, `500-styling-system.mdc` |
| 백엔드 개발 | `200-server-development.mdc`, `210-backend-performance.mdc` |
| 테스트 작성 | `410-backend-testing.mdc` |
| 패키지 생성/관리 | `300-package-management.mdc` |
| 모든 작업 공통 | `000-core-architecture.mdc`, `400-code-quality.mdc` |

## 사용법
- 필요한 규칙을 찾으면 아래 파일명을 참고해 `cat .cursor/rules/<파일명>` 으로 열어 확인합니다.
- `description`과 `alwaysApply` 값을 먼저 읽고 적용 여부를 판단하세요.

## 규칙 파일 인덱스
- `000-core-architecture.mdc` — Clean Architecture + DDD, 모노레포 구조, 계층 의존성 규칙 (`alwaysApply: false`)
- `100-client-development.mdc` — Next.js 클라이언트 계층 구조, MVVM bind 패턴, Suspense 활용, Apollo/Clerk 패턴 (`alwaysApply: false`)
- `110-frontend-performance.mdc` — React 렌더링/Hook/Context 성능 규칙 (`alwaysApply: false`)
- `200-server-development.mdc` — GraphQL API 서버 계층, Entity/Repository 패턴 (`alwaysApply: false`)
- `210-backend-performance.mdc` — 백엔드 성능(알고리즘, 비동기, DB, 캐싱) 규칙 (`alwaysApply: false`)
- `300-package-management.mdc` — 패키지 생성/의존성/index.ts export/workspace 규칙 (`alwaysApply: false`)
- `400-code-quality.mdc` — 가독성, TypeScript, 에러 처리 원칙 (`alwaysApply: false`)
- `410-backend-testing.mdc` — 백엔드 테스트 작성 규칙 (Vitest, Domain Entity, UseCase 테스트 패턴) (`alwaysApply: false`)
- `500-styling-system.mdc` — Tailwind 4 + shadcn/ui 스타일링 시스템, CVA, 토큰 활용 (`alwaysApply: false`)

## 빠른 조회 예시
- 아키텍처 규칙 확인: `cat .cursor/rules/000-core-architecture.mdc`
- 클라이언트 개발 규칙 확인: `cat .cursor/rules/100-client-development.mdc`
- 서버 개발 규칙 확인: `cat .cursor/rules/200-server-development.mdc`
- 테스트 작성 규칙 확인: `cat .cursor/rules/410-backend-testing.mdc`
- 스타일링 시스템 규칙 확인: `cat .cursor/rules/500-styling-system.mdc`

