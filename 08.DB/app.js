const express = require('express');
const app = express();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

app.set('port', process.env.PORT || 8000);
app.set('view engine','html');
nunjucks.configure('views', {
    express : app,
    watch : true
});

app.use(bodyParser.urlencoded({extended : true}));
app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(app.get('port'), () => {
    console.log(`Server is listening on port ${app.get('port')}`);
})