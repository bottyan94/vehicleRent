import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as controller from './controller';

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/', controller);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
