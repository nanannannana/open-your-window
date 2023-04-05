<div align="center">
<img src="https://img.shields.io/badge/Node.js-339933?logo=Node.js&logoColor=white"/> 
<img src="https://img.shields.io/badge/Express-000000?logo=Express&logoColor=white"/>
<img src="https://img.shields.io/badge/Sequelize-52B0E7?logo=Sequelize&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?logo=MySQL&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=black"
<img src="https://img.shields.io/badge/Ant Design-0170FE?logo=Ant Design&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?logo=Axios&logoColor=white"/>
<br>
<img src="https://img.shields.io/badge/AWS-FF9900?style=flat-square&logo=Amazon EC2&logoColor=white"/> 
<img src="https://img.shields.io/badge/Github-181717?logo=Github&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?logo=Figma&logoColor=white"/> 
<img src="https://img.shields.io/badge/Notion-000000?logo=Notion&logoColor=white"/> 
<img src="https://img.shields.io/badge/Slack-4A154B?logo=Slack&logoColor=white" />
</div>

<br><br>

# 🪟<a href="http://3.38.106.174:3000/">openYourWindow</a>
> 창 밖 풍경/오늘의 우주 사진 공유 및 소통을 기반으로 한 힐링 서비스

* 어디서든지 원하는 장소의 풍경을 감상할 수 있으면 좋겠다는 생각에서 시작된 **OpenYourWindow**는, 풍경의 아름다움을 놓치고 스트레스와 피로를 쌓아 올리는 현대사회에서 작은 위로가 되고자 만들어졌습니다. 이 서비스는 우주와 창밖 풍경을 공유하여 사용자들이 작은 위로를 느낄 수 있도록 개발되었으며, 행맨 게임과 같은 오락 요소를 제공하여 사용자들이 스트레스를 해소할 수 있도록 개발하였습니다.
* **multer 미들웨어**를 사용하여 이미지 파일을 저장 하였으며, 파일명 중복 방지를 위해 **timestamp로 파일명을 설정**하였습니다. 게시글 삭제 및 이미지 수정의 경우, **fs모듈**을 사용하여 이미지 파일이 삭제되도록 하였습니다. 클라이언트로부터 offset과 limit 값을 받아와 **MySQL에서 페이징 처리를 수행**하는 방식으로 페이지네이션을 구현하였으며, **Redux**를 사용하여 전반적인 상태 관리를 진행했습니다. 게시글 CRUD 및 회원 수정 기능을 구현하기 위해 **Axios와 Sequelize**를 사용했습니다. 지리적 데이터를 시각화하기 위해 **React Simple Maps API**를 활용하였고, FileReader 클래스를 사용하여 **이미지 미리보기 기능**도 구현하였습니다. 또한 쿼리 파라미터를 사용하여 원하는 조건(태그별, 검색별)에 맞게 데이터 필터링하는 기능을 구현하였습니다. **AWS EC2**와 **Nginx**를 활용하여 무중단 배포를 하였습니다.

<br>

## 주요 기능
* 회원관리 CRUD 및 소셜 로그인(카카오) 제공
* NASA Open API를 사용하여 일자별 우주 사진 공유
* 우주를 연상시키는 단어를 주제로 한 행맨게임
* React Simple Maps API를 사용하여 지도 시각화
* 게시물 CRUD 기능 및 태그별, 검색어별 게시글 필터링 제공

<br>

## API 명세서
|기능|URL|Method|Request|Response|
|---|---|---|---|---|
|게시물 업로드|/window/posts|Post|{<br> country, <br> city, <br> comment, <br> date, <br> tags, <br> user_id, <br> img <br> }|{<br> num <br>}|
|게시물 정보 가져오기(이미지 수정용)|/window/posts|Get|{ num }|{<br>num, <br>country, <br>city, <br>img, <br>comment, <br>user_id, <br>window_date, <br>tags <br>}|
|게시물 수정<br>(이미지 수정)|/window/posts-image|patch|{<br>country, <br> city, <br> comment, <br>date, <br>tags, <br>user_id, <br>num, <br>img, <br> imgServer <br> }|true|
|게시물 수정<br>(이미지 수정X)|/window/posts|patch|{<br>country, <br>city, <br>comment, <br>date, <br>tags, <br>user_id, <br>num, <br> img <br> }|true|
|게시물 삭제|/window/posts|delete|{<br>num,<br>country,<br>city,<br>img,<br>comment,<br>user_id,<br>window_date,<br>tags<br>}|true|
게시물 가져오기|/window/board|get|**전체** <br> { } <br><br> **국가별** <br> {country, page} <br><br> **검색 태그별** <br> { tag } <br>|{<br>posts(*num, country, city, window_date, tags, user_id, img, 'user_name'*), <br>totalNum(*count*)<br>}|
|마이페이지 정보 가져오기|/mypage/user|post|{user_id, page}|**게시물 有**<br>{<br>showPosts(*num, country, city, window_date, tags, user_id, img*), <br>postTotalNum(*count*), <br> userInfo(*user_id, user_pw, user_name, phone*)<br>}<br> **게시물 無**<br>{<br>userInfo: <br>user_id, <br>user_pw, <br>user_name, <br>phone <br>}|
|회원정보 수정|/mypage/user|patch|{<br>user_id, <br>user_pw, <br> user_name, <br> phone <br> }|{<br>user_id, <br>user_pw, <br>user_name <br> phone <br>}|
