# 💪 Enter-8ollow
[![Enter-8ollow 바로가기](src/assets/qr.png)](https://euid-8ollow.netlify.app/) <br>
*👆 Enter-8ollow 배포 링크 바로가기 👆*


## 📋 목차 
1. [프로젝트 소개](#프로젝트-소개)
2. [팀 정보](#팀-정보)
3. [기술 스택](#기술-스택)  
4. [주요 기능](#주요-기능)


## 1️⃣ 프로젝트 소개
![그레이 블랙 심플한 마케터 포트폴리오 프레젠테이션 (28)](https://github.com/user-attachments/assets/fd86120a-b6a9-4644-a574-082260ad3af7)


- 페이지 구성 (👉 [피그마 시안](https://www.figma.com/design/kw6F0ieWRmXHYdqNu1Xmc2/EnterEuid-(Copy)?node-id=2-60&p=f&t=C3ZyldLQiF6jcSp0-0))
  - 회원가입 및 로그인
  - 게시판: 선배님 이야기 / 같이해요(스터디 모집) / 기기거래 / Q&A
  - 프로필 관리

- 요구사항 (👉 [노션 문서](https://productive-printer-b81.notion.site/598d67dde9f041c481858fc13c38b073))
  - 회원가입 기능
    
     ✅ 휴대폰 번호와 인증 번호 입력 필드를 포함한 회원가입 화면 구성<br>
     ✅ 인증 번호 유효성 검사<br>
     ✅ 제출 버튼은 조건 만족 시 활성화<br>
     ✅ 휴대폰 번호를 `localStorage` key로 저장<br>
     ✅ 인증 번호를 고유 ID로 저장<br>
     ✅ SMS 서비스는 약식으로 구현<br>
    
  - 유저 생성 및 관리<br>
     ✅ 회원가입을 통해 유저 생성<br>
     ✅ 중복 유저 여부 확인<br>
     ✅ 유저 데이터 관리<br>
     ✅ 로그인 여부에 따라 UI 렌더링<br>
    - [ ] 회원 탈퇴 기능 제공<br>
    - [ ] 비로그인 상태에서는 회원가입 페이지로 리디렉션<br>
  - 관심분야 선택<br>
     ✅ `localStorage`를 사용하여 "관심분야 선택 항목" 저장<br>
  - 기기 거래 화면<br>
     ✅ 데이터 설계 및 화면에 해당 데이터를 렌더링<br>
     ✅ 거래 항목 선택 시 디테일 페이지로 이동<br>
     ✅ 디테일 페이지에 이미지, 유저 정보, 본문 표시<br>
  - 검색창 기능<br>
     - [ ] 거래 항목의 텍스트와 일치하는 항목 검색 및 리렌더링<br>
     - [ ] `throttle` 또는 `debounce`를 사용하여 이벤트 관리<br>
  - 슬라이드 UI 구현<br>
     ✅ `swiper.js`를 사용해 슬라이드를 구현<br>
     ✅ 동적으로 렌더링<br>
     ✅ `prev`, `next` 버튼 구현<br>
     ✅ 키보드 키로 조작 가능<br>
  - 마이크로 애니메이션<br>
     ✅ UI에 필요한 경우 마이크로 애니메이션 추가 (반만... ㅎ)


## 2️⃣ 팀 정보

| 👑 명재휘 | 🍦 성유진 | 😎 박윤경 | 🍑 김수정 | 🥹 정성민 |
| :------: | :------: | :------: | :------: | :------: |
| [<img src="https://github.com/user-attachments/assets/92c10b25-aeb4-4190-9952-964483033bc5" height=100 width=100> <br/> @myeong-jae-hwi](https://github.com/myeong-jae-hwi) |[<img src="https://github.com/user-attachments/assets/f4c0c2cc-cfa9-4cfe-951f-71f3d9583e9f" height=100 width=100> <br/> @akman12914](https://github.com/akman12914) | [<img src="https://github.com/user-attachments/assets/5e70bee6-ddc9-434c-af8a-80d41e8b6ab9" height=100 width=100> <br/> @photoby64](https://github.com/photoby64) | [<img src="https://github.com/user-attachments/assets/a26c2942-1ad2-46e8-8d62-af7871f9d336" height=100 width=100> <br/> @peachily](https://github.com/peachily) | [<img src="https://github.com/user-attachments/assets/43d6edf2-55cd-418e-9c7a-a2c2a132be23" height=100 width=100> <br/> @karrpp](https://github.com/karrpp) | 
  | 로그인 페이지 | 게시판 페이지 | 메인 페이지 | Q&A 페이지 | 프로필 페이지 |

- 팀 목표 🎯
  1. 싸우지 말기 ```!important ``` ```!important ``` ```!important ```
  2. 접근성 & 성능
  3. 문서화 열심히 하기


## 3️⃣ 기술 스택
### Frontend
  [![Frontend](https://skillicons.dev/icons?i=html,css,js,lit)](https://skillicons.dev)

### Database
<img width = "5%" src = "https://github.com/user-attachments/assets/b1c31a0d-2ede-4f11-bc1c-8f6a06f5e607"/>  

### Version Control Systems
  [![Version control](https://skillicons.dev/icons?i=git,github)](https://skillicons.dev)

### CI/CD
  [![Version control](https://skillicons.dev/icons?i=vite,netlify)](https://skillicons.dev)

### Etc...
  [![Version control](https://skillicons.dev/icons?i=figma,discord,npm)](https://skillicons.dev) <img width = "46px" src = "https://github.com/user-attachments/assets/4290db27-3b35-42c4-90c4-487369b734ae"/>  

  
## 4️⃣ 주요 기능

- [회원가입](https://euid-8ollow.netlify.app/)
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![회원가입](GIF_URL) | - 전화번호를 입력하고 인증번호를 받아 올바르게 입력하면 회원가입을 할 수 있다. <br> - 인증번호는 sweetAlert2를 이용해 토스트 메세지가 뜨도록 했다. <br> - 회원가입 과정에서 관심분야를 유저에게 입력받아 localstorage에 저장한다. <br> - 초기 닉네임은 랜덤 닉네임을 부여한다. (ex: 게으른 이무기) <br> - 만약 이미 가입되어 있다면 문구가 뜨고 로그인 페이지로 이동한다. |

- [로그인](https://euid-8ollow.netlify.app/src/pages/login/)
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![로그인](src/assets/logingif.gif) | - 전화번호를 입력하고 인증번호를 받아 올바르게 입력하면 로그인을 할 수 있다. |

- [홈 화면](https://euid-8ollow.netlify.app/src/pages/main/)
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![홈 화면](GIF_URL) |   - 화면을 옆으로 넘기거나 상단의 탭 메뉴를 클릭하여 각 카테고리의 게시판을 확인할 수 있다. <br> - 게시글을 클릭하면 해당 게시글 화면으로 이동한다. <br> - '+' 버튼을 누르면 탭 메뉴에 맞는 메뉴를 확인할 수 있다. |

- [전체 게시판 목록]()
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![전체 게시판 목록](GIF_URL) | - 하단 메뉴에서 '게시판'을 클릭하면 전체 게시판 목록을 확인할 수 있다. <br> - 전체 게시판 목록에서 '주제' 버튼을 클릭하면 관심있는 주제를 선택하여 참여할 수 있다. <br> - '같이해요' 버튼 클릭 시 '같이해요' 게시판으로 이동한다. <br> - 화면 맨 위의 '화살표' 버튼 클릭 시 자기가 저장한 지역 목록을 볼 수 있다. |

- [같이해요 목록]()
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![같이해요 목록](GIF_URL) | - '같이해요' 카테고리의 게시글만 모아 볼 수 있다. <br> - 플러스(+) 버튼 클릭 시 글쓰기 페이지로 이동한다. <br> - '스터디', '오프라인' 등 각각의 버튼을 클릭하면 해당 특성의 모집 글을 조회할 수 있다. |


- [같이해요 게시글 작성]()
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![같이해요 게시글 작성](GIF_URL) | - 설명 |

- [기기거래 목록]()
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![기기거래 목록](GIF_URL) | - PocketBase 서버에서 데이터를 가져와 설계된 데이터 스키마를 기반으로 기기 거래 화면에 상품 항목을 렌더링한다. <br> - 상품 목록에서 거래 상태(거래 완료, 예약 중)와 지역, 날짜 정보를 확인할 수 있다. <br> - 각 거래 항목에 대해 받은 총 좋아요 수가 표시된다. <br> - 탭 메뉴의 특정 탭(ex: '선배님 스토리', '기기 거래', '질의응답', '함께해요')에 들어가야 하위 옵션 메뉴를 제공하는 플러스(+) 버튼이 활성화된다. <br> - 플러스(+) 버튼을 누르면 해당 탭에서 사용할 수 있는 추가 옵션(헤드셋, 키보드, 마우스, 컴퓨터, 기타 등등)이 리스트 형태로 표시된다. |

- [기기거래 게시글]()
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![기기거래 게시글](GIF_URL) | - 여러 장의 사진이 등록된 경우, 좌우로 스와이프하여 상품 이미지를 확인할 수 있다. <br> - 하트 아이콘 클릭 시 색상이 토글되며, 상태가 PocketBase 서버에 저장되어 새로고침하거나 페이지를 이동해도 좋아요 상태가 유지된다. <br> - 상품의 거래 상태에 따라 버튼 색상이 동적으로 변경된다. (판매 완료 상태일 때 버튼이 '판매 완료'로 표시) <br> - 페이지 왼쪽 상단의 '뒤로가기 아이콘'을 통해 직전 페이지로, '홈 아이콘'을 통해 기기 거래 목록 페이지로 이동할 수 있다. <br> - 오른쪽 상단의 링크 아이콘 클릭 시 현재 페이지의 URL을 복사할 수 있다. |

- [Q&A 목록]()
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![Q&A 목록](GIF_URL) | - 질의응답 게시판의 글만 모아서 볼 수 있다. |

- [Q&A 게시글 작성]()
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![Q&A 게시글 작성](GIF_URL) | - 제목과 본문 란에 각각 한 글자 이상 입력하면 완료 버튼이 활성화된다. <br> - 완료 버튼을 누르면 PocketBase 서버에 저장되고 Q&A 페이지에서 확인할 수 있다. |

- [Q&A 게시글]()
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![Q&A 게시글](GIF_URL) | - 게시글을 확인하고 댓글을 입력하거나 확인할 수 있다. <br> - '스마일' 버튼을 누르면 이모지를 사용할 수 있다. |

- [프로필]()
  | 동작 화면 | 기능 및 구현 방법 |
  | :------: | :------ |
  | ![프로필](GIF_URL) | - PocketBase 서버에 저장된 각 사용자의 평가 수를 바탕으로 열정 온도를 산출한다. (현재는 댓글 10개 당 온도 1이 오름) <br> - 로그인 시 PocketBase 서버에 저장되어 있는 닉네임과 아이디를 통해 로그인한 유저를 인식하고 UI를 다르게 렌더링한다. <br> - '받은 매너 평가' 탭을 클릭하면 PocketBase 서버 내에 저장된 세부 평가를 확인할 수 있다. <br> - '나의 프로필' 버튼을 클릭하면 프로필 디테일 페이지로 이동한다. <br> - 팝업 창을 통해 기본정보와 추가정보를 입력할 수 있다. |
  
