# Global Korean class

Global Korean class는 한국어를 배우고 싶은 모든 사람을 위한 무료 온라인 한국어 교육 플랫폼입니다. 원어민과의 실제 대화를 통해 한국어를 제대로 배울 수 있는 기회를 제공합니다.

## 프로젝트 개요

이 프로젝트는 React 기반의 정적 웹사이트로, Global Korean class의 교육 프로그램을 소개하고 학생들이 쉽게 접근할 수 있도록 설계되었습니다. 직관적인 인터페이스와 반응형 디자인을 통해 모든 기기에서 최적화된 경험을 제공합니다.

## 주요 기능

### 🎯 Hero 섹션
- 자동 슬라이드 이미지 캐러셀
- 스크롤 패럴랙스 효과
- 메인 타이틀 및 서브 타이틀

### 📚 프로그램 소개
- Welcome 섹션: 프로그램 개요 및 목표
- 코스 작동 방식: 두 가지 일정 옵션 제공
- 원어민과의 실제 대화: 원어민과 소통할 수 있는 기회 강조

### 📅 코스 일정
- 3단계 학습 과정 (Introductory, Intermediate, Advanced)
- 각 단계별 상세 설명 및 기간 표시
- 시각적 진행 표시

### 💡 학습 혜택
- 4단계 프로세스 (무료 코스, 입문 클래스, 신청, 전체 코스 접근)
- 인터랙티브 UI로 각 단계별 상세 정보 제공
- 시각적 차트 및 게이지 표시

### 💬 후기
- 학생 후기 캐러셀
- 반응형 슬라이더 (react-slick)
- 패럴랙스 배경 효과

### 📸 클래스 사진
- 파노라마 스크롤 애니메이션
- 자동 무한 루프 스크롤
- 클래스 활동 사진 갤러리

### ❓ FAQ
- 아코디언 스타일 질문/답변
- 자주 묻는 질문에 대한 답변

### 📝 신청 폼
- Google Forms 연동
- 스티키 신청 바 (하단 고정)
- 200개 장학금 안내

### 🔗 소셜 미디어 연결
- Facebook Group 연결
- WhatsApp Channel 연결
- 커뮤니티 참여 유도

## 기술 스택

### 프론트엔드
- **React 18.2.0** - UI 라이브러리
- **JavaScript (ES6+)** - 프로그래밍 언어
- **CSS3** - 스타일링
- **HTML5** - 마크업

### 라이브러리 및 프레임워크
- **react-slick** - 캐러셀/슬라이더 컴포넌트
- **slick-carousel** - 캐러셀 스타일
- **Bootstrap 4.6.2** - CSS 프레임워크
- **Font Awesome 5.5** - 아이콘 라이브러리

### 빌드 도구
- **Create React App** - React 프로젝트 생성 및 빌드
- **react-scripts 5.0.1** - 빌드 스크립트

### 배포
- **Vercel** - 정적 웹사이트 호스팅

## 프로젝트 구조

```
koreanclass/
├── public/
│   ├── img/              # 이미지 파일
│   ├── css/              # Bootstrap CSS
│   ├── fontawesome-5.5/  # Font Awesome 아이콘
│   ├── index.html        # HTML 템플릿
│   └── logo.png         # 로고
├── src/
│   ├── components/       # React 컴포넌트
│   │   ├── Navbar.jsx   # 네비게이션 바
│   │   ├── Hero.jsx     # 메인 히어로 섹션
│   │   ├── WhatWeDo.jsx # 프로그램 소개
│   │   ├── Connect.jsx  # 소셜 미디어 연결
│   │   ├── CourseSchedule.jsx # 코스 일정
│   │   ├── Benefits.jsx  # 학습 혜택
│   │   ├── Testimonials.jsx # 후기
│   │   ├── ClassPanorama.jsx # 클래스 사진 파노라마
│   │   ├── Gallery.jsx  # FAQ
│   │   ├── ApplicationForm.jsx # 신청 폼
│   │   ├── Footer.jsx   # 푸터
│   │   └── StickyApplyBar.jsx # 스티키 신청 바
│   ├── App.jsx          # 메인 앱 컴포넌트
│   ├── App.css          # 앱 스타일
│   ├── index.js         # 진입점
│   └── index.css        # 글로벌 스타일
├── package.json         # 프로젝트 설정
├── vercel.json          # Vercel 배포 설정
└── README.md            # 프로젝트 문서
```

## 시작하기

### Prerequisites

- Node.js (v14 이상)
- npm 또는 yarn

### Installation

1. 저장소 클론
```bash
git clone <repository-url>
cd koreanclass
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 실행
```bash
npm start
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 빌드

프로덕션 빌드를 생성하려면:

```bash
npm run build
```

빌드된 파일은 `build` 폴더에 생성됩니다.

## 주요 컴포넌트 설명

### Hero
- 자동 슬라이드 이미지 (5초 간격)
- 스크롤 패럴랙스 효과
- 반응형 디자인

### WhatWeDo
- 3개 섹션으로 구성된 프로그램 소개
- 텍스트와 이미지 교차 배치
- 부드러운 스크롤 네비게이션

### Benefits
- 인터랙티브 탭 UI
- 4단계 프로세스 시각화
- 차트 및 게이지 표시

### ClassPanorama
- 자동 스크롤 파노라마 효과
- 무한 루프 애니메이션
- requestAnimationFrame을 사용한 부드러운 애니메이션

### Testimonials
- react-slick을 사용한 캐러셀
- 자동 재생 (4초 간격)
- 반응형 슬라이드 수 조정

## 배포

이 프로젝트는 Vercel을 통해 배포됩니다:

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 저장소 연결
3. 자동 배포 완료

또는 Vercel CLI 사용:

```bash
npm i -g vercel
vercel --prod
```

## 주요 특징

- ✅ 완전 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ 부드러운 스크롤 애니메이션
- ✅ 인터랙티브 UI 컴포넌트
- ✅ 최적화된 이미지 로딩
- ✅ SEO 친화적인 구조
- ✅ 빠른 로딩 속도

## 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 라이선스

©Copyright Global Korean class. All Rights Reserved.
