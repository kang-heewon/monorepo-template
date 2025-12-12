# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Clean Architecture + DDD 패턴을 따르는 TypeScript 기반 모노레포입니다.
pnpm workspace와 Turbo를 사용하며, GraphQL API 서버와 Next.js 클라이언트 애플리케이션들로 구성되어 있습니다.

## 공통 명령어

### 개발 실행
```bash
pnpm dev                  # 모든 앱 개발 모드 실행
pnpm dev --filter={app}   # 특정 앱만 실행 (예: pnpm dev --filter=console-web)
```

### 빌드 및 검증
```bash
pnpm build               # 전체 빌드
pnpm typecheck           # 타입 체크
pnpm lint                # ESLint 검사
pnpm test                # 테스트 실행
```

### 데이터베이스 마이그레이션
```bash
pnpm migrate:generate    # 마이그레이션 파일 생성
pnpm migrate:dev         # 개발 DB 마이그레이션 실행
pnpm migrate:prod        # 프로덕션 DB 마이그레이션 실행
```

### GraphQL Codegen
```bash
pnpm codegen             # GraphQL 스키마에서 타입 생성
```

## 아키텍처 핵심 원칙

### Clean Architecture + DDD 패턴
- **의존성 방향**: 항상 안쪽(Domain)으로 향함
- **Domain Layer**: 외부 의존성 없이 순수 비즈니스 로직만 포함
- **Repository 패턴**: 데이터 접근 추상화

### 모노레포 구조
```
apps/                           # 애플리케이션 진입점
├── graphql-api/               # GraphQL API 서버 (Serverless Framework + AWS Lambda)
├── slack-api/                 # Slack API 서버
├── console-web/               # 콘솔 웹 앱 (Next.js 15)
├── admin-web/                 # 어드민 웹 앱
└── service-web/               # 서비스 웹 앱

libs/                          # 재사용 가능한 라이브러리
├── {domain}/                  # 도메인별 패키지 (예: user, catalog, pricing)
│   ├── service/              # GraphQL Resolvers, UseCase
│   ├── domain/               # Entity, Repository Interface
│   ├── datasource/           # Repository 구현체 (Drizzle ORM)
│   ├── shell/                # 페이지/모달 컨테이너
│   ├── feature/              # 비즈니스 로직 + GraphQL 연동
│   └── ui/                   # 도메인 특화 UI 컴포넌트
└── shared/                    # 공통 유틸리티
    ├── ui/                   # shadcn/ui 기반 공통 UI 라이브러리
    ├── provider-*/           # Provider 패키지 (graphql, database, gid)
    └── utils-*/              # 유틸리티 패키지 (form, mvvm, router 등)
```

### 계층별 의존성 규칙
- **서버**: Service → Domain → Datasource
- **클라이언트**: Apps → Shells → Features → UI → shared/ui
- **상위 레이어는 하위 레이어만 참조 가능**
- **같은 레이어끼리는 참조 금지** (같은 도메인 내에서도)
- **순환 의존성 절대 금지**

## 서버 개발 (Backend)

### 기술 스택
- **API**: type-graphql (GraphQL 스키마 및 리졸버)
- **Database**: Drizzle ORM + Supabase (postgres)
- **DI**: TypeDI 컨테이너
- **Auth**: Clerk (@clerk/backend)
- **Deployment**: Serverless Framework + AWS Lambda (Node.js 22.x, ARM64)

### 새 도메인 기능 개발 순서
1. **Domain Layer**: Entity 설계, Repository Interface 정의
   - Entity는 `create()`, `reconstitute()` 팩토리 메서드 사용
   - Repository는 인터페이스와 Token 함께 정의
2. **Datasource Layer**: Repository 구현체 작성
   - `{Entity}RepositoryImpl` 네이밍 사용
   - Drizzle ORM을 통한 타입 안전한 DB 접근
3. **Service Layer**: GraphQL Resolver, UseCase 구현
   - type-graphql decorators 활용
   - `resolvers` 배열 export

### graphql-api 통합
- **DI Container**: `apps/graphql-api/src/config/container.ts`에서 datasource 패키지 re-export
- **Resolvers 등록**: `apps/graphql-api/src/app/resolvers.ts`에서 service 패키지의 resolvers 통합

## 클라이언트 개발 (Frontend)

### 기술 스택
- **Framework**: Next.js 15 + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **UI Components**: @radix-ui/react-* + shared/ui
- **GraphQL**: Apollo Client (@apollo/client, @apollo/client-integration-nextjs)
- **Auth**: Clerk (@clerk/nextjs)
- **Deployment**: Cloudflare (@opennextjs/cloudflare)

### 계층별 역할
- **Apps**: 라우팅, 전역 설정만 담당
- **Shells**: 페이지/모달 레이아웃 및 Feature 조합 (비즈니스 로직 금지)
- **Features**: 비즈니스 로직 + GraphQL 연동 (MVVM 패턴: bind + hook)
- **UI**: 도메인 특화 프레젠테이션 컴포넌트 (비즈니스 로직 금지)

### MVVM 패턴 (Feature Layer)
```typescript
// useViewModel.ts
export function useCreateProject({ onSuccess }: { onSuccess?: () => void }) {
  const [createProject, { loading }] = useMutation(CreateProjectDocument);
  const form = useForm({
    defaultValues: { name: '' },
    onSubmit: async ({ value }) => {
      await createProject({ variables: { input: value } });
      onSuccess?.();
    },
  });
  return { form, loading };
}

// Component.tsx
export const CreateProjectForm = bind(useCreateProject, ({ form, loading }) => {
  return <form>...</form>;
});
```

### 스타일링 원칙
- **shared/ui 컴포넌트를 최우선 활용**
- **새로운 UI 컴포넌트 필요시 shared/ui에 추가 후 사용**
- Tailwind CSS 유틸리티 클래스 활용
- CVA (class-variance-authority)로 variant 관리
- cn 유틸리티로 조건부 클래스 병합
- Design token 사용 (하드코딩된 색상값 금지)

## 패키지 관리

### 새 패키지 생성
- 명명 규칙: `{domain}-{layer}`
- workspace:* 프로토콜로 내부 패키지 참조
- 각 패키지는 독립적으로 빌드/테스트 가능

### index.ts Export 규칙
```typescript
// 명시적 export 사용 (export * 금지)
export { User } from './libs/entities/User';
export { Workspace } from './libs/entities/Workspace';
// 타입은 export type으로 분리
export type { UserRepository } from './libs/repositories/UserRepository';
export { UserRepositoryToken } from './libs/repositories/UserRepository';
```

## 코드 품질 원칙

### 가독성 우선
- 명확함이 간결함보다 우선
- 과도한 추상화 지양
- 직관적인 네이밍

### TypeScript
- strict 모드 사용
- interface 우선 사용
- as any 사용 금지 (unknown 활용)
- 명시적 타입 정의

### 성능 최적화
- **프론트엔드**: React 렌더링 최적화 (memo, useMemo, useCallback은 필요시에만)
- **백엔드**: N+1 쿼리 방지, 알고리즘 복잡도 최적화
- **조기 최적화 지양**: 병목이 확인된 후에 최적화

## 상세 개발 규칙 (.cursor/rules/)

**⚠️ 필수**: 코드를 작성하기 전에 반드시 해당 영역의 규칙 파일을 읽고 준수해야 합니다.

| 작업 유형 | 필수 참조 규칙 파일 |
|-----------|---------------------|
| 프론트엔드 개발 | `100-client-development.mdc`, `110-frontend-performance.mdc`, `500-styling-system.mdc` |
| 백엔드 개발 | `200-server-development.mdc`, `210-backend-performance.mdc` |
| 테스트 작성 | `410-backend-testing.mdc` |
| 패키지 생성/관리 | `300-package-management.mdc` |
| 모든 작업 공통 | `000-core-architecture.mdc`, `400-code-quality.mdc` |

### 아키텍처 및 구조
- **000-core-architecture.mdc**: Clean Architecture + DDD 패턴, 모노레포 패키지 구조, 계층별 의존성 관리 규칙

### 클라이언트 개발
- **100-client-development.mdc**: Next.js 클라이언트 개발 규칙 (Shell, Feature, UI 계층 구조, MVVM bind 패턴, Suspense 활용, Apollo Client, Clerk 인증)
- **110-frontend-performance.mdc**: React 렌더링 최적화, Hook 패턴, Context 성능, 메모리 누수 방지 등 프론트엔드 성능 규칙

### 서버 개발
- **200-server-development.mdc**: GraphQL API 서버 개발 규칙 (Service, Domain, Datasource 계층, Entity/Repository 패턴)
- **210-backend-performance.mdc**: 알고리즘 복잡도, 비동기 처리, DB 쿼리, 캐싱 등 백엔드 성능 최적화 규칙

### 패키지 및 코드 품질
- **300-package-management.mdc**: 모노레포 패키지 생성, 의존성 관리, index.ts export 규칙, pnpm workspace 설정
- **400-code-quality.mdc**: 가독성 우선 원칙, TypeScript 작성 규칙, 에러 처리
- **410-backend-testing.mdc**: 백엔드 테스트 작성 규칙 (Vitest, Domain Entity, UseCase 테스트 패턴, Fixtures 작성법)

### 스타일링
- **500-styling-system.mdc**: Tailwind CSS 4 + shadcn/ui 스타일링 시스템, CVA variant 관리, Design Token 활용

## 중요한 디렉토리 및 파일

- `migrations/`: Drizzle 마이그레이션 파일
- `apps/graphql-api/schema.graphql`: GraphQL 스키마 (codegen 소스)
- `.cursor/rules/`: 개발 규칙 문서 (위 목록 참조)
- `turbo.json`: Turbo 빌드 설정
