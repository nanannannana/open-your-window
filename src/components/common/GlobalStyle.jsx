import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SDSwaggerTTF';
    src: url('/font/SDSwaggerTTF.woff');
  }
  body {
    font-family: 'SDSwaggerTTF';
    /* -ms-overflow-style: none; */
  }

  ::-webkit-scrollbar {
    display:none;
  }

  // switch 관련 공통 css
  .ant-switch-checked{
   background:#797284 !important;
  }
  .switchCss {
    text-align: left;
    padding: 10px 0 0 10px;
  }

  // 풍경 사진 게시물 관련 공통 css
  .iconBox {
    position: fixed;
    width:100%;
    text-align: right;
    padding: 7px 8px 3px 0;
    background-color: rgb(0, 0, 0, 0.256);
    display: flex;
    justify-content: space-between;
    z-index: 100;
  }
  .iconBoxChild {
    margin: 5px 0 -5px 0;
  }
  .infoBox {
    color: white;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 10px 0 0 10px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.256);
  }
  .trashIcon {
    margin-left: 8px;
    display: inline-block;
  }
  .comment {
    padding-top: 10px;
    margin-bottom: 10px;
    font-size: 1.5em;
  }
  .nickName {
    padding-right: 10px;
    font-size: 3em;
    font-weight: bold;
  }
  @media(max-width: 1440px) {
    .nickName {
      font-size: 1.5em;
    }
    .comment {
      font-size: 1em;
      margin-bottom: 15px;
    }
  }
`;

export default GlobalStyle;
