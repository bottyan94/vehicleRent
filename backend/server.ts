import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as Controller from './controller';
import * as cors from 'cors';

const app = express();
const port = 8080;

const corsOptions = {
  origin: '*',
  optionSuccesStatus: 200
};
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/', Controller);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
