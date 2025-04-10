export const csvData = `
,N,1,Y,,공통,화면설계,스토리보드,IT프로젝트를 진행하기 위한 전반적인 설계를 정의 합니다,"1. Mobile 경우 : 본수 기준 1장당 10만원
2. PC 경우 : 본수 기준 1장당 15만원",,,,,
,N,2,Y,,공통,화면디자인,UI/UX디자인,스토리 보드 기반 UI/UX 디자인을 정의합니다,"1. Mobile 경우 : 본수 기준 1장당 10만원
2. PC 경우 : 본수 기준 1장당 15만원",,,,,
,N,3,Y,,공통,화면퍼블리싱,퍼블리싱,디자인기반 화면 UI/UX 코드를 개발합니다,"1. Mobile 경우 : 본수 기준 1장당 10만원
2. PC 경우 : 본수 기준 1장당 15만원",,,,,
,N,4,Y,,Server,서버 셋업,환경구축,고객사 서버내 도커 기반 Back / Front 개발 환경을 조성합니다,,,,,," 	500,000 "
,N,5,선택,,WEB,랜딩페이지,PR 홈페이지,서비스/제품/솔루션등의 주요 특징등을 어필하는 홈페이지 입니다,5~7개 섹션 PC / Mobile 기준 300만원,,,,," 	3,000,000 "
,Y,6,선택,편의기능,공통,백서비스,메일발송,절차 기반으로 특정 시점 발송되는 기능 의미 (메일 디자인 + 퍼블리싱 필요),메일 발송 1건당 20만원 X 구현 숫자,N,,,," 	200,000 "
,Y,7,선택,편의기능,공통,백서비스,카카오 알림톡,절차 기반으로 특정 시점 발송되는 기능 의미,카카오 발송 1건당 10만원 X 구현 숫자,N,,,," 	100,000 "
,Y,8,선택,편의기능,공통,백서비스,문자발송,절차 기반으로 특정 시점 발송되는 기능 의미,문자발송 1건당 10만원 X 구현 숫자,N,,,," 	100,000 "
,Y,9,선택,편의기능,공통,백서비스,Push 알람,절차 기반으로 특정 시점 발송되는 기능 의미,Push발송 1건당 20만원 X 구현 숫자,N,,,," 	200,000 "
,Y,10,선택,편의기능,공통,백서비스,크롤링,"SNS, 뉴스, 웹 정보와 같이 조직 외부에서 공개된 웹문서를 수집하는 방법",Site 1개당 20만원 X 구현 숫자,Y,크롤링 관리,,," 	200,000 "
,Y,11,선택,편의기능,공통,백서비스,배치잡(스케쥴링),"특정 시점 (1일, 1주, 한달 등)에 동작되어야 되는 기능을 의미합니다",배치잡 1건당 20만원 X 구현 숫자,N,,,," 	200,000 "
,Y,12,선택,편의기능,공통,백서비스,공공 Data / 타 서비스 등 API 연결 지원,"다른 서비스 등에서 API를 통한 연결 지원 (공공 API, 타 서비스 활용 API , DB VIEW , MQ 연계 등 )",1건당 20만원 X 구현 숫자,N,,,," 	200,000 "
,Y,13,선택,핵심기능,공통,회원가입,ID/PW,"1. ID/PW 타입으로 회원가입
2. 이용약관 동의  포함( 이용약관 / 개인정보수집 동의 )",,Y,사용자 관리,0.5,0.25," 	300,000 "
,Y,14,선택,핵심기능,WEB,회원가입,SNS 회원가입,"1. SNS(카카오/애플/구글/네이버) 로그인  (ID/PW를 입력해야 합니다)
2. 이용약관 동의  포함( 이용약관 / 개인정보수집 동의 )",SNS 로그인 1개당 가격 금액입니다,Y,사용자 관리,0.5,0.25," 	300,000 "
,Y,15,선택,편의기능,APP,회원가입,SNS 회원가입,"1. SNS(카카오/애플/구글/네이버) 로그인 (ID/PW 입력없이 즉시 로그인 됩니다)
2. 이용약관 동의  포함( 이용약관 / 개인정보수집 동의 )",SNS 로그인 1개당 가격 금액입니다,Y,사용자 관리,1,0.5," 	600,000 "
,Y,16,선택,편의기능,공통,회원가입,통합회원관리,"1. ID/PW 타입 + SNS 로그인 여러 개 계정으로 로그인 시 하나의 계정으로묶어서 회원관리
2. 인증단계에서 이름+전화번호+메일등의 정보로 식별해서 통합 회원관리
3. 계정별 통합 회원으로 묶일 경우 구매,작성,리뷰등 모두 통합 계정으로 관리됨",,Y,사용자 관리,0.3,5," 	2,120,000 "
,Y,17,선택,핵심기능,공통,회원가입,사용자 승인 절차 운영,특정 회원이 심사 / 승인 시에만 로그인 할 수 있는 기능 (회원가입 > 심사요청 > 심사 승인or반려 > 정상 로그인 처리),,Y,사용자 관리,0.5,0.25," 	300,000 "
,Y,18,선택,편의기능,공통,본인식별,실명 / 통신사 인증,실제 본인인지 생년월일과 휴대폰 번호 등을 함께 인증합니다. ,,N,,0.5,1," 	600,000 "
,Y,19,선택,편의기능,공통,계정찾기,ID찾기,ID 찾기 ( 앞뒤 2자리만 보이고 중간은 * 마스킹 처리됨),,N,,0.3,0.15," 	180,000 "
,Y,20,선택,편의기능,공통,PW찾기,PW찾기,본인 인증 후 PW초기화 / 변경 기능 지원,,N,,0.3,0.15," 	180,000 "
,Y,21,선택,편의기능,공통,데이터 기능,맵Data 활용,네이버/카카오/구글 지도 서비스 사용 활용,,N,,5,2.5," 	3,000,000 "
,Y,22,선택,편의기능,공통,데이터 기능,아이템 목록 / 상세 페이지,아이템 목록 및 상세 페이지는 일반적인 페이지에 비해 복잡도가 높음,,Y,컨텐츠 관리,1,0.5," 	600,000 "
,Y,23,선택,편의기능,공통,데이터 기능,좋아요,아이템에 좋아요 표시해서 마이페이지에서 확인하는 기능,,Y,컨텐츠 관리,0.3,0.15," 	180,000 "
,Y,24,선택,편의기능,공통,데이터 기능,북마크 (스크랩),아이템을 북마크해서 마이페이지에서 확인하는 기능,,Y,컨텐츠 관리,0.3,0.15," 	180,000 "
,Y,25,선택,편의기능,공통,데이터 기능,찜 / 북마크 폴더 관리,찜이나 북마크를 폴더 단위로 관리하는 기능,,Y,컨텐츠 관리,1,0.5," 	600,000 "
,Y,26,선택,편의기능,공통,데이터 기능,리뷰 / 별점,아이템에 별점 리뷰를 다는 기능이 있을 때,,Y,컨텐츠 관리,1,0.5," 	600,000 "
,Y,27,선택,편의기능,공통,데이터 기능,검색,아이템명/설명 검색,,N,,1,0.5," 	600,000 "
,Y,28,선택,편의기능,공통,데이터 기능,키워드 알림,"특정 키워드를 설정했을 때, 해당 키워드가 포함되어 있는 콘텐츠를 push 알림 발송 연계",,Y,컨텐츠 관리,1,0.5," 	600,000 "
,Y,29,선택,편의기능,공통,데이터 기능,통합 검색,"아이템명, 카테고리, 회원 등 통합 검색",,N,,2,1," 	1,200,000 "
,Y,30,선택,편의기능,공통,데이터 기능,최근 검색어,사용자가 최근 검색한 검색어를 저장 및 표시,,N,,1,0.5," 	600,000 "
,Y,31,선택,편의기능,공통,데이터 기능,인기 검색어,사용자들이 많이 검색하는 검색어를 저장 및 표시,,N,,1,0.5," 	600,000 "
,Y,32,선택,편의기능,공통,데이터 기능,예약하기,날짜 또는 시간까지 장소 등을 예약을 하는 기능 (예약 관리 필요),,Y,예약 관리,5,2.5," 	3,000,000 "
,Y,33,선택,편의기능,공통,데이터 기능,신고하기,게시물 또는 사용자를 신고하는 기능 (애플 앱스토어 출시를 위해선 필수),,Y,신고 관리,1,0.5," 	600,000 "
,Y,34,선택,편의기능,공통,데이터 기능,랭킹,"조회수, 찜수 등을 랭킹 전체, 월간, 일간으로 합산하여 순위대로 표시하는 기능",,N,,1,0.5," 	600,000 "
,Y,35,선택,편의기능,공통,데이터 기능,추천 / 유사한 아이템,특정 아이템과 연관된 아이템을 표시하는 로직이 복잡하면 비용이 추가될 수 있습니다,,N,,1,0.5," 	600,000 "
,Y,36,선택,편의기능,공통,데이터 기능,상세조건 필터링,"아이템 가격, 카테고리, 기타 부가 정보를 바탕으로 필터링하는 기능",,N,,1,0.5," 	600,000 "
,Y,37,선택,편의기능,공통,데이터 기능,거리순 필터링 / 정렬,주소/좌표 기준으로 가까운 순으로 정렬/필터링하는 기능,,N,,1,0.5," 	600,000 "
,Y,38,선택,편의기능,공통,데이터 기능,게시글,게시글 작성 ( 텍스트 + 이미지 + 파일등 ),,Y,컨텐츠 관리,2,1," 	1,200,000 "
,Y,39,선택,편의기능,공통,데이터 기능,댓글,게시물이나 아이템에 댓글 다는 기능이 있을 때,,Y,컨텐츠 관리,1,0.5," 	600,000 "
,Y,40,선택,편의기능,공통,데이터 기능,대댓글,댓글에 추가로 댓글 다는 기능이 있을 때,,Y,컨텐츠 관리,1,0.5," 	600,000 "
,Y,41,선택,편의기능,공통,데이터 기능,FAQ,자주 묻는 질문에 문답 형태,,Y,FAQ 관리,1,0.5," 	600,000 "
,Y,42,선택,편의기능,공통,데이터 기능,1:1 문의,문의 사항 접수 기능,,Y,문의 관리,1,0.5," 	600,000 "
,Y,43,선택,편의기능,공통,데이터 기능,다국어 처리,"페이지 1장당, 언어 1개당 20만원 (언어 길이가 길어서 칸내림등 UI 보정 작업 포함)",,N,,,," 	200,000 "
,Y,44,선택,편의기능,공통,데이터 기능,쿠폰,"배송비 쿠폰, 금액 쿠폰, 퍼센트 쿠폰 등 다양한 쿠폰 정책을 적용",,Y,쿠폰 관리,1,0.5," 	600,000 "
,Y,45,선택,편의기능,공통,데이터 기능,구글 광고/애드몹,구글 광고 SDK 적용,,N,,3,0," 	1,200,000 "
,Y,46,선택,편의기능,공통,데이터 기능,일반 공지,게시판형 공지사항 안내 페이지 기능,,Y,공지 관리,1,0.5," 	600,000 "
,Y,47,선택,편의기능,공통,데이터 기능,팝업 공지,특정 화면 접속시 팝업 형태로 출력되는 기능,,Y,팝업 공지 관리,1,0.5," 	600,000 "
,Y,48,선택,편의기능,공통,데이터 기능,배너 기능,메인 화면등에 삽입되는 배너 (이미지 중심) 좌우 슬라이드 / 에니메이션 효과 적용,,Y,배너 관리,1,0.5," 	600,000 "
,Y,49,선택,편의기능,공통,데이터 기능,장바구니,특정 상품 장바구니 담기 기능,,Y,,3,1.5," 	1,800,000 "
,Y,50,선택,편의기능,공통,데이터 기능,My 페이지,"1. 사용자 기능 : 로그아웃 / 회원탈퇴 / 서비스 해지 / 이용약관 2. 나의 이력 기능 : 결제 , 구독 , 찜 , 좋아요 , 알림 수신 등 3. 나의 관리 기능 : 결제 카드 , 서비스 사용 현황 등",,N,,4,2," 	2,400,000 "
,Y,51,선택,편의기능,공통,데이터 기능,데이터 마이그레이션,기존 서비스에 데이터 마이그레이션 작업,,N,,0,1," 	400,000 "
,Y,52,선택,편의기능,공통,데이터 기능,사용자 멘션 @,입력창에서 친구 혹은 팔로잉 유저를 멘션하는 기능 (자동완성 포함),,N,,2,1," 	1,200,000 "
,Y,53,선택,편의기능,공통,데이터 기능,단계별 입력,"O2O 서비스에서 카테고리, 지역, 날짜 등 여러 페이지에 걸쳐 순차적인 입력이 필요한 경우",,N,,2,1," 	1,200,000 "
,Y,54,선택,편의기능,공통,데이터 기능,설문 / 투표,질문을 설정하고 주관식 / 객관식 설문 또는 투표하는 기능,,N,,2,1," 	1,200,000 "
,Y,55,선택,편의기능,공통,데이터 기능,게시물 피드,"인스타그램, 페이스북, 카카오스토리, 네이버 밴드 등과 유사한 형태의 게시글 화면",,N,,2,1," 	1,200,000 "
,Y,56,선택,편의기능,공통,데이터 기능,질문 / 답변,"지식인, 스택오버플로우 같은 질문하고 답변하는 기능",,N,,2,1," 	1,200,000 "
,Y,57,선택,편의기능,공통,데이터 기능,게시판 / 권한,"커뮤니티 그룹 입장 및 그룹 내 게시판, 그룹 내 권한 동의 기능 구현",,N,,4,1," 	2,000,000 "
,Y,58,선택,편의기능,공통,데이터 기능,게이미피케이션 뱃지,사용자 활동에 따라 뱃지 부여 (등급 기능과 유사),,N,,4,1," 	2,000,000 "
,Y,59,선택,편의기능,공통,데이터 기능,컨텐츠 열람 권한,결제/구독 등의 특정 행위를 진행한 경우 콘텐츠를 확인할 수 있도록 열람에 제한을 두는 경우,,N,,2,1," 	1,200,000 "
,Y,60,선택,편의기능,공통,데이터 기능,구인/구직,"아르바이트 또는 전문가 구인 구직, 작업 의뢰 등을 요청하는 경우",,N,,2,1," 	1,200,000 "
,Y,61,선택,편의기능,공통,데이터 기능,초대,추천인 코드 등 사용자별로 초대코드를 생성하는 방식,,N,,2,1," 	1,200,000 "
,Y,62,선택,핵심기능,공통,AI,AI 이미지 인식,"이미지 등을 AI를 활용하여 객체 인식 (예시 : 과일, 음식, 상품, 제품 등 ) 후 제품 정보 획득",,N,,2,5," 	2,800,000 "
,Y,63,선택,핵심기능,공통,AI,AI 자연어 처리,챗봇 형태 + AI 자연어 처리 연계 질문 답변 (학습된 데이터를 기반으로 promt 질의 응답),,Y,AI Prompt 관리,5,5," 	4,000,000 "
,Y,64,선택,핵심기능,APP,Native,스토어 앱 등록 지원,AOS / IOS 앱 등록 절차 진행 ( 앱등록 이미지 + 앱설명 + 앱 심사 요청 등 ),AOS / IOS 각 30만원,N,,1.5,0," 	600,000 "
,Y,65,선택,핵심기능,APP,Native,GPS,GPS,,N,,1,0," 	400,000 "
,Y,66,선택,핵심기능,APP,Native,Push,Push 알람 수발신 가능토록 앱내 기초 구성,,N,,1,0," 	400,000 "
,Y,67,선택,핵심기능,APP,Native,갤러리,"갤러리 접근 ( 단일, 다중 이미지 선택 )",,N,,3,0," 	1,200,000 "
,Y,68,선택,핵심기능,APP,Native,자이로센스,자이로센스,,N,,3,0," 	1,200,000 "
,Y,69,선택,핵심기능,APP,Native,웨어러블 연계(워치),웨어러블 연계(워치),,N,,5,0," 	2,000,000 "
,Y,70,선택,핵심기능,APP,Native,Bluetooth (4.0이상만 가능),Bluetooth 찾기 > 연결 > 연결장치 저장 및 재연결 지원,,N,,5,0," 	2,000,000 "
,Y,71,선택,핵심기능,APP,Native,카메라 촬영 / QR 촬영,카메라 촬영 / QR 촬영,,N,,3,0," 	1,200,000 "
,Y,72,선택,핵심기능,APP,Native,영상 촬영,영상 촬영,,N,,3,0," 	1,200,000 "
,Y,73,선택,핵심기능,APP,Native,플레시 제어,플레시 제어,,N,,1,0," 	400,000 "
,Y,74,선택,핵심기능,APP,Native,음성 녹음,음성 녹음,,N,,2,0," 	800,000 "
,Y,75,선택,핵심기능,APP,Native,WIFI 상태 확인,WIFI 상태 확인,,N,,1,0," 	400,000 "
,Y,76,선택,핵심기능,APP,Native,4G / 5G 상태 확인,4G / 5G 상태 확인,,N,,1,0," 	400,000 "
,Y,77,선택,핵심기능,APP,Native,NFC 활용,NFC 읽기 > 값활용 지원,,N,,3,0," 	1,200,000 "
,Y,78,선택,핵심기능,APP,Native,전화걸기,전화걸기,,N,,0.3,0," 	120,000 "
,Y,79,선택,핵심기능,APP,Native,SMS 발송,SMS 발송,,N,,0.5,0," 	200,000 "
,Y,80,선택,핵심기능,APP,Native,연락처 접근,연락처 접근,,N,,2,0," 	800,000 "
,Y,81,선택,핵심기능,APP,Native,배터리 잔량 확인,배터리 잔량 확인,,N,,1,0," 	400,000 "
,Y,82,선택,핵심기능,APP,Native,충전상태 확인,충전상태 확인,,N,,1,0," 	400,000 "
,Y,83,선택,핵심기능,APP,Native,가속도계,가속도계,,N,,2,0," 	800,000 "
,Y,84,선택,핵심기능,APP,Native,자이로스코프,자이로스코프,,N,,2,0," 	800,000 "
,Y,85,선택,핵심기능,APP,Native,자기장 센서,자기장 센서,,N,,2,0," 	800,000 "
,Y,86,선택,핵심기능,APP,Native,조도 센서,조도 센서,,N,,2,0," 	800,000 "
,Y,87,선택,핵심기능,APP,Native,근접 센스,근접 센스,,N,,2,0," 	800,000 "
,Y,88,선택,핵심기능,APP,Native,기압 센스,기압 센스,,N,,2,0," 	800,000 "
,Y,89,선택,핵심기능,APP,Native,지문인식,지문인식,,N,,3,0," 	1,200,000 "
,Y,90,선택,핵심기능,APP,Native,얼굴인식,얼굴인식,,N,,3,0," 	1,200,000 "
,Y,91,선택,핵심기능,APP,Native,홍채 인식,홍채 인식,,N,,3,0," 	1,200,000 "
,Y,92,선택,핵심기능,APP,Native,PIN / 패턴 / 비밀번호 잠금,PIN / 패턴 / 비밀번호 잠금,,N,,3,0," 	1,200,000 "
,Y,93,선택,핵심기능,APP,Native,멀티태스킹 / 백그라운드,멀티태스킹 / 백그라운드,,N,,5,0," 	2,000,000 "
,Y,94,선택,핵심기능,APP,Native,앱 내 결제 (In-App Purchase),앱 내 결제 (In-App Purchase),,N,,5,0," 	2,000,000 "
,Y,95,선택,핵심기능,APP,Native,DeepLink (앱 설치 여부에 따라 달리 작동),"링크 접속시 앱 미설치시 -> 스토어 이동 , 앱설치시 -> 앱 실행 및 특정 절차 수행",,N,,4,2," 	2,400,000 "
,Y,96,선택,핵심기능,APP,Native,RS통신 지원,"RS 232 ,485 등 시리얼 직렬 통신",,N,,2,0," 	800,000 "
,Y,97,선택,핵심기능,공통,파일 입출력,단일 파일 선택,갤러리 or 파일을 단건 업로드 하는 기능,,N,,0.5,0.25," 	300,000 "
,Y,98,선택,핵심기능,공통,파일 입출력,다건 파일 선택,갤러리 or 파일을 다건 업로드 하는 기능 (이미지 압축 기능 포함),,N,,1,1," 	800,000 "
,Y,99,선택,핵심기능,공통,파일 입출력,FILE or 이미지 업로드,이미지 압축 저장 기능 포함 + 파일 업로드 ( 최대10건 이내 ) ,,N,,0,2," 	800,000 "
,Y,100,선택,핵심기능,공통,채팅,1:1 채팅 - 심플,텍스트 형태 단순 채팅 + Push알람 On/Off 기능,,Y,채팅 관리,5,2.5," 	3,000,000 "
,Y,101,선택,핵심기능,공통,채팅,1:1 채팅 - 고급,텍스트 + 이미지 + 파일 + URL + 푸시 알람 On/Off 기능,,Y,채팅 관리,10,5," 	6,000,000 "
,Y,102,선택,핵심기능,공통,채팅,1:N 채팅 - 심플,텍스트 형태 단순 채팅 + 방장(관리자) 개념 + 댓글 가림처리 + 톡 참여자 탈퇴 처리등,,Y,채팅 관리,10,5," 	6,000,000 "
,Y,103,선택,핵심기능,공통,채팅,1:N 채팅 - 고급,텍스트 + 방장(관리자) 개념 + 댓글 가림처리 + 톡 참여자 탈퇴 처리등 + 이미지 + 파일 + URL + 푸시 알람 On/Off 기능,,Y,채팅 관리,15,7.5," 	9,000,000 "
,Y,104,선택,핵심기능,공통,결제,1차 PG 연계 - 메이저 기업,1차 PG사에 가이드에 따라 모든 카드 결제 관련 절차를 Interface 합니다,,Y,결제이력 관리,2,1," 	1,200,000 "
,Y,105,선택,핵심기능,공통,결제,2차 PG 연계 - 그외 커스텀 맞춤 기업,2차 PG사에 가이드에 따라 모든 카드 결제 관련 절차를 Interface 합니다,,Y,결제이력 관리,5,2.5," 	3,000,000 "
,Y,106,선택,핵심기능,공통,결제,결제 취소(환불) / 부분 취소,국내 PG사를 통해 카드 결제 연동 / 가상계좌 결제 / 해외 결제 등을 가능하게 합니다. / 취소 포함,,Y,결제이력 관리,1,0.5," 	600,000 "
,Y,107,선택,핵심기능,관리자,로그인,ID/PW,"로그인 기능 제공 ( 관리자 회원관리에서 계정 추가 / 삭제 / 패스워드 수정 기능 제공 )
 - 탈퇴 , 패스워드 잘못입력 , ID 입력 잘못등 밸리데이션 기능 포함",,N,,0.5,0.25," 	300,000 "
,Y,108,선택,핵심기능,관리자,대시보드,5~6개 섹션 관리 (그래프 X),그래프 없이 간단한 숫자 형태 지표 대시보드,,N,,1.5,0.75," 	900,000 "
,Y,109,선택,핵심기능,관리자,대시보드,5~6개 섹션 관리 (그래프 O),그래프를 포함한 지표 대시보드,,N,,5,2.5," 	3,000,000 "
,Y,110,선택,핵심기능,관리자,관리자 관리,관리자 관리,"관리자 회원관리 
 - 생성, 수정, 삭제 , 비번 변경 기능 제공 "," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,1,0.5," 	600,000 "
,Y,111,선택,핵심기능,관리자,사용자 관리,사용자 관리,사용자 현황 리스트," 1. 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공
 2. 가입 승인절차가 있을 경우 60만원 추가됨",N,,1,0.5," 	600,000 "
,Y,112,선택,핵심기능,관리자,사업자 관리,사업자 관리,사업자 현황 리스트," 1. 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공
 2. 가입 승인절차가 있을 경우 60만원 추가됨",N,,1,0.5," 	600,000 "
,Y,113,선택,핵심기능,관리자,재고 관리,재고 관리,재고 현황 리스트," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,3,1.5," 	1,800,000 "
,Y,114,선택,핵심기능,관리자,상품 관리,상품 관리,상품 현황 리스트," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,3,1.5," 	1,800,000 "
,Y,115,선택,핵심기능,관리자,주문 관리,주문 관리,주문 관리 리스트," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,3,1.5," 	1,800,000 "
,Y,116,선택,핵심기능,관리자,배송 관리,배송 관리,배송 관리 리스트," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,3,1.5," 	1,800,000 "
,Y,117,선택,핵심기능,관리자,광고 관리,광고 관리,광고 관리 리스트," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,3,1.5," 	1,800,000 "
,Y,118,선택,핵심기능,관리자,예약 관리,예약 관리,예약 관리 리스트," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,3,1.5," 	1,800,000 "
,Y,119,선택,핵심기능,관리자,휴일 관리,휴일 관리,휴일 관리 리스트," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,1,0.5," 	600,000 "
,Y,120,선택,핵심기능,관리자,모임 관리,모임 관리,모임 관리 리스트," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,1,0.5," 	600,000 "
,Y,121,선택,핵심기능,관리자,쿠폰 관리,쿠폰 관리,쿠폰 관리 리시트," 1.  조회, 검색, 페이징, 엑셀 다운로드 기능 제공
 2. 쿠폰 일괄 업로드 (엑셀 템플릿기반)",N,,3,1.5," 	1,800,000 "
,Y,122,선택,핵심기능,관리자,컨텐츠 관리,컨텐츠 관리,"작성 , 신고된 컨텐츠 일괄 관리"," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,2,1," 	1,200,000 "
,Y,123,선택,핵심기능,관리자,정산 관리,정산 관리,정산 대상별 정산 현황 관리," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,2,1," 	1,200,000 "
,Y,124,선택,핵심기능,관리자,매출 관리,매출 관리,결제 이력 기반 매출 관리," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,2,1," 	1,200,000 "
,Y,125,선택,핵심기능,관리자,구독자 관리,구독자 관리,구독자 현황 관리," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,2,1," 	1,200,000 "
,Y,126,선택,핵심기능,관리자,결제이력 관리,결제이력 관리,결제 이력기반 관리," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,2,1," 	1,200,000 "
,Y,127,선택,핵심기능,관리자,데이터 관리,공지 관리,"공지 게시글 관리 ( 작성, 수정, 삭제 포함) - 웹에디터 적용"," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,2,1," 	1,200,000 "
,Y,128,선택,핵심기능,관리자,데이터 관리,팝업 공지 관리,"팝업  게시글 관리 ( 작성, 수정, 삭제 포함)  - 웹에디터 적용"," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,2,1," 	1,200,000 "
,Y,129,선택,핵심기능,관리자,데이터 관리,배너 관리,"배너  게시글 관리 ( 작성, 수정, 삭제 포함)  - 클릭시 이동 좌표 기능 포함"," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,2,1," 	1,200,000 "
,Y,130,선택,핵심기능,관리자,데이터 관리,AI Prompt 관리,AI가 동문서답 하지 않도록 프롬프트 기능을 수정 보완 하는 기능," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,2,1," 	1,200,000 "
,Y,131,선택,핵심기능,관리자,데이터 관리,FAQ 관리,"FAQ  게시글 관리 ( 작성, 수정, 삭제 포함)"," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,1,0.5," 	600,000 "
,Y,132,선택,핵심기능,관리자,데이터 관리,1:1 문의 관리,1:1 문의  게시글 관리 (답변) - 웹에디터 미적용," 조회, 검색 , 페이징, 엑셀 다운로드 기능 제공",N,,1,0.5," 	600,000 "
,Y,133,선택,핵심기능,관리자,약관 관리,약관관리,"이용약관 , 개인정보 방침, 취소 및 환불 규칙, 마케팅 활용 동의, 사업자 정보 등 (수정 기능 포함) - 웹에디터 적용",,N,,0.5,0.25," 	300,000 "
`;
