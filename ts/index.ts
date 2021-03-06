import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {
  config
} from 'dotenv';
import mongoose from 'mongoose';
import methodOverride from 'method-override';

import routes from './routes';

config();
const app = express();

app.use(cors({
  "origin": '*',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}));

app.use(bodyParser.json());
app.use(methodOverride('_method'));

mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DB_CONNECT!, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('Connected to db!'))
  .catch(err => console.log(`Error occurred! ${err}`));
app.use(routes);

app.listen(process.env.PORT || 3004, () => console.log(`Server is running on port 3004`));
