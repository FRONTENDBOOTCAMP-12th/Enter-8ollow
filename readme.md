# popcorn-euid

## 1.주제

javascript를 활용한 vanilla-project 입니다

## 2.페이지 소개

이듬이라는 기기거래 어플리케이션입니다.

## 3.목차

1. HTML5 마크업 구조 설계
2. Tailwind CSS 를 사용한 화면단의 배치
3. Javascript 와 PocketBase를 사용한 기능 및 데이터베이스 구현
4. Vite를 사용한 빌드 및 Netlify를 사용한 배포

---

### 1. HTML5 마크업 구조 설계

#### 접근성준수

- Tab 키로 접근 가능
- Img태그의 alt 속성 기입
- button태그의 aria-label 또는 title 속성

#### 페이지 영역

1. 스타트/로그인/회원가입 영역
2. 프로필/프로필수정/프로필상세 영역
3. 기기거래/상품리스트/상품작성/페이지수정/채팅 영역
4. 같이해요/커뮤니티/글작성/채팅 영역

#### 페이지 플로우 차트

![image](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/c18fa14c-42b5-46a1-b9c5-87d96b145b49)

![image](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/f73f6024-d5a1-4939-875c-a6e4b9a49468)

![image](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/fa8d272e-1648-432b-b293-5bd3dab628b3)

![image](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/ef19ea0b-ee3d-42cd-8427-8206e3c90626)

### 2. Tailwind CSS를 사용한 화면단의 배치

![image](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/c4373f07-2368-4c59-bfeb-f02ef51d89d9)

초기 폴더와 파일 세팅

![image](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/984020ad-c059-4595-823b-2a06ab89eb2b)

Tailwind.config 파일 설정

![image](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/ac56b300-0676-417e-8d8d-cec669b883e5)

tailwind.css 내의 구성 global 폰트 설정과 layout을 통해 공통 클래스를 지정합니다

### 3. Javascript 와 PocketBase를 사용한 기능 및 데이터베이스 구현

![image](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/a625044f-4e8c-4f1c-a374-e183941e92c3)

collection/field relation 구조 계획

![image](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/9f467fcd-2dfc-4ab2-9f2c-d400d96b1c71)

계획에 따른 pocketbase 생성

![signup](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/b0ba45cb-eedc-46f7-b1bc-a9b80ab49bb3)

signUP의 정보 유효성검사와 유저정보유무에 따른 기능 구현

![profileCard](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/d3beb24c-f87c-4ea7-9de3-91cd537f8029)

프로필카드의 유저정보 수정 업데이트 기능

![exchange](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/ba455b88-fc4d-474d-aa51-8602426bf529)

기기거래의 gsap을 사용한 페이지 로딩 애니메이션과 필터에 따른 페이지 구현

![board](https://github.com/FRONTENDSCHOOL8/popcorn-euid/assets/148796897/22e7f056-0f2d-4e36-b277-92770e878b48)

게시판의 filter기능과 gsap을 사용한 페이지 애니메이션 랜더링

### 4. Vite를 사용한 빌드 및 Netlify를 사용한 배포

https://popcorn-euids.netlify.app/
