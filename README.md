#⛰ 나와 지구를 위한 등산 커뮤니티, 클린 하이커스
![](./preview.gif)

---

## 목차

[1. 개요](#1-개요)

[2. 기술스택](#2-기술스택)

[3. 사용 라이브러리](#3-사용-라이브러리)

[4. 주요 기능](#4-주요-기능)

[5. 프로토타입](#5-프로토타입)

---

### 1. 개요

등산로 공공데이터를 활용하여 등산로의 쓰레기량 및 등산 난이도와 관련된 정보를 제공하고,
일반인이 운동 및 선행 목적으로 쓰레기를 주우며 등산하는 활동에 참여할 수 있도록 독려하는 서비스입니다.

#### 2. 기술스택

- front
  - React
  - Styled-Components
  - Ant Design
- back
  - Express
  - MongoDB, Mongoose
- data
  - Python

### 3. 사용 라이브러리

- front
  - `antd`: 통일된 UI를 구성하기 위한 라이브러리
  - `styled-components`: 세부적인 스타일 설정을 위한 라이브러리
  - `axios`: 비동기 통신을 위한 라이브러리
  - `moment`: 날짜 및 시간 정의를 위한 라이브러리
  - `react-simple-maps`: 지도 출력 라이브러리
  - `react-kakao-maps-sdk`: 카카오맵 지도 출력 라이브러리
- back
  - `bcrypt`: 비밀번호 암호화를 위한 라이브러리
  - `cors`: 서버와 클라이언트 간 연동을 위한 라이브러리
  - `dotenv`: 환경변수 관리 라이브러리
  - `jsonwebtoken`: jwt 토큰 생성 라이브러리
  - `uuid`: 고유 아이디값을 만들기 위한 라이브러리
- data
  - `d3-scale`: 선형 스케일링 라이브러리
  - `react-tooltip`: hover시 사용할 효과 라이브러리
  - `d3-geo`
  - `strip-ansi`
  - `web-vitals`

### 4. 주요 기능

- 데이터 시각화
  - 메인 페이지에서 산 별로 연간 쓰레기 처리량을 지도에 버블차트 형태로 나타냄
  - 쓰레기 처리량에 따른 온실가스 발생량 및 나무의 수와 비교해서 나타냄
- 회원관리
  - 회원가입, 로그인
  - 회원 정보 조회, 수정
  - 개인 작성 글 목록 조회
- 커뮤니티
  - 게시글 CRUD
  - 댓글 CRUD
- 산찾기
  - 데이터셋 기반으로 한 쓰레기 처리량 수치가 높은 산 추천
  - 등산 난이도, 지역별 산 검색

## 5. 프로토타입

🔗 [프로토타입(figma)](https://www.figma.com/file/gTNTHKNp00bQgPAOetsWbJ/%EC%97%98%EB%A6%AC%EC%8A%A4-AI%ED%8A%B8%EB%9E%99-5%EA%B8%B0-2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-10%ED%8C%80?node-id=2%3A3)
