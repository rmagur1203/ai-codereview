# 2025 KKnock CTF 랜딩 페이지

경기대학교 정보보안 동아리 KKnock에서 주최하는 2025 CTF 대회 랜딩 페이지입니다.

## 🚀 시작하기

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 `http://localhost:5173`을 열어 확인하세요.

### 빌드

```bash
pnpm build
```

### 프리뷰

```bash
pnpm preview
```

## ✨ 특징

- 🎨 현대적이고 세련된 디자인
- ⭐ 애니메이션 배경 (별 효과)
- 🌈 그라데이션 및 글리치 효과
- 🎯 인터랙티브 파티클 효과
- 📱 반응형 디자인
- ⚡ Vite 기반 초고속 개발 환경
- 🔷 TypeScript로 타입 안정성 보장
- ⚛️ React 컴포넌트 기반 구조
- 🎨 Tailwind CSS로 효율적인 스타일링

## 🛠️ 기술 스택

- **프레임워크**: React 18
- **언어**: TypeScript
- **빌드 도구**: Vite 5
- **스타일링**: Tailwind CSS 3
- **린팅**: ESLint

## 📁 프로젝트 구조

```
.
├── src/
│   ├── components/
│   │   ├── CTAButton.tsx      # 메인 CTA 버튼 + 파티클 효과
│   │   ├── FeatureCard.tsx    # 기능 카드 컴포넌트
│   │   ├── GlitchText.tsx     # 글리치 효과 텍스트
│   │   ├── Notification.tsx   # 알림 메시지
│   │   └── Stars.tsx          # 배경 별 애니메이션
│   ├── App.tsx                # 메인 앱 컴포넌트
│   ├── main.tsx               # 앱 엔트리 포인트
│   ├── index.css              # Tailwind CSS 설정
│   └── vite-env.d.ts          # Vite 타입 정의
├── index.html                 # HTML 템플릿
├── package.json
├── tsconfig.json              # TypeScript 설정
├── tailwind.config.js         # Tailwind 설정
├── postcss.config.js          # PostCSS 설정
└── vite.config.ts             # Vite 설정
```

## 🎨 주요 컴포넌트

### App.tsx
메인 애플리케이션 컴포넌트로, 전체 레이아웃과 상태 관리를 담당합니다.

### Stars.tsx
우주 테마의 애니메이션 배경을 생성합니다.

### GlitchText.tsx
사이버펑크 스타일의 글리치 효과가 적용된 텍스트 컴포넌트입니다.

### FeatureCard.tsx
각 기능을 소개하는 카드 컴포넌트로, 호버 효과가 포함되어 있습니다.

### CTAButton.tsx
클릭 시 파티클 효과와 함께 인터랙션을 제공하는 버튼 컴포넌트입니다.

### Notification.tsx
사용자에게 메시지를 표시하는 알림 컴포넌트입니다.

## 📝 라이선스

MIT
