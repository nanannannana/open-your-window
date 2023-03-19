/* eslint-disable @typescript-eslint/no-var-requires */
const multer = require('multer');
const path = require('path');

const upload = multer({
  storage: multer.diskStorage({
    // 이미지 저장 경로 설정
    destination(req, file, done) {
      done(null, '../public/img');
    },
    filename(req, file, done) {
      // 파일명 겹침 방지를 위해 timestamp로 파일명 지정
      done(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

exports.imgUpload = upload.single('img');
