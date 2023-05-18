# 🪟<a href="http://3.36.96.127:3000/">openYourWindow</a>
> 창 밖 풍경/오늘의 우주 사진 공유 및 소통을 기반으로 한 힐링 서비스

* 어디서든지 원하는 장소의 풍경을 감상할 수 있으면 좋겠다는 생각에서 시작된 **OpenYourWindow**는, 풍경의 아름다움을 놓치고 스트레스와 피로를 쌓아 올리는 현대사회에서 작은 위로가 되고자 만들어졌습니다. 이 서비스는 우주와 창밖 풍경을 공유하여 사용자들이 작은 위로를 느낄 수 있도록 개발되었으며, 행맨 게임과 같은 오락 요소를 제공하여 사용자들이 스트레스를 해소할 수 있도록 개발하였습니다.

<br>

<div align="center">
   
   ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white)
   ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white)
   ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
   ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white)
   ![Amazon EC2](https://img.shields.io/badge/Amazon_EC2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)
   
   ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)
   ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)
   ![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
   ![AntDesign](https://img.shields.io/badge/Ant_Design-0170FE?style=for-the-badge&logo=Ant_Design&logoColor=white)
   
</div>

<br>
<br>

## ⭐️ 아키텍처
<img width="450" alt="아키텍처" src="https://github.com/nanannannana/nanannannana/assets/114964102/74513d94-0541-4da3-a3d9-e09ba7bcf621">

<br>
<br>
<br>

## ⭐️ 주요 기능
* 회원관리 CRUD 및 소셜 로그인(카카오) 제공
* NASA Open API를 사용하여 일자별 우주 사진 공유
* 우주를 연상시키는 단어를 주제로 한 행맨게임
* React Simple Maps API를 사용하여 지도 시각화
* 게시물 CRUD 기능 및 태그별, 검색어별 게시글 필터링 제공

<br>
<br>
<br>

## ⭐️ 구현 기능
* Sequelize ORM을 이용한 게시물 CRUD 구현
* multer 미들웨어를 사용하여 이미지 파일 저장(timestamp로 파일명 지정)
* fs 모듈의 비동기 promise 메서드를 사용하여 이미지 삭제
* offset과 limit을 사용한 서버 페이징 처리 수행
* AWS EC2, Nginx를 사용하여 무중단 
* Axios를 사용한 RESTful API호출
* Redux를 사용한 state 관리


<br>
<br>
<br>

## ⭐️ API 명세서
![api 명세서](https://github.com/nanannannana/nanannannana/assets/114964102/0a16d01a-e51c-4ea0-af05-b44e039c6f74)
