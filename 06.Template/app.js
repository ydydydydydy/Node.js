/*
Template Engine
- 서버 측의 동적인 HTML을 생성하기 위한 도구
- Nunjucks, EJS, PUG, ...
- HTML과 유사한 넌적스 사용

Nunjucks 사용 방법
(1) Nunjucks 설치
    npm install nunjucks cokidar
(2) nunjucks 가져오기
    const nunjucks = require('nunjucks');
(3) view engine 확장자 설정
    app.set('view engine', 'html')
    => 넌적스 확장자? html
(4) 넌적스 구성 설정
    nunjucks.configure(path, options({}))
    {express : app, watch : ture}
    - express : app => express가 담겨 있는 객체 연결
    - watch : true => html 변경 시 템플릿 엔진 리렌더링
 */

    const express =require('express');
    const app = express();
    const nunjucks = require('nunjucks');
    const indexRouter = require('./routes');
    
    app.set('view engine', 'html');
    nunjucks.configure('views', {
        express : app,
        watch : true
    })
    
    app.use('/', indexRouter);
    
    app.set('port', process.env.PORT || 8000);
    app.listen(app.get('port'), ()=>{
        console.log(`Server is listening on port ${app.get('port')}`);
    })