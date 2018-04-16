const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const path = require('path');

app.use(
    serve(
        path.resolve(__dirname, '../hcl/vgtimeImitation/output')
    )
);

app.listen(8080);

console.log(`app Server running at localhost:8080`);
