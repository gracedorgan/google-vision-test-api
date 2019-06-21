import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';
import apiRouter from './router';

// DB Setup
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/vision';
mongoose.connect(mongoURI);
// set mongoose promises to es6 default
mongoose.Promise = global.Promise;

// initialize
const app = express();

// enable/disable cross origin resource sharing if necessary
app.use(cors());

// enable/disable http request logging
app.use(morgan('dev'));

// enable only if you want templating
app.set('view engine', 'ejs');

// enable only if you want static assets from folder static
app.use(express.static('static'));

// this just allows us to render ejs from the ../app/views directory
app.set('views', path.join(__dirname, '../src/views'));

// enable json message body for posting data to API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// additional init stuff should go before hitting the routing

// default index route
app.get('/', (req, res) => {
  res.send('hi');
});
app.use('/api', apiRouter);
// START THE SERVER
// =============================================================================
const port = process.env.PORT || 9090;
app.listen(port);

console.log(`listening on: ${port}`);

// mong ocommand to create a photo obj
// db.photos.insert(
//    {
//        'img': 'https://cdn.shopify.com/s/files/1/0495/7773/products/A_grade_skirt_Man_O_War_Stellla_3.jpg?v=1525686210',
//        'vis_tag': 'woman',
//       'tag_correct': 'null',
//     }
//   )

// db.photos.insert(
//    {
//        "vis_tag" : "0",
//        "dummy" : true,
//        "tag_correct" : "0"
//     }
//   )

// curl to create a post
// curl -X POST -H "Content-Type: application/json" -d '{
//   "img": "fake-url",
//   "vis_tag": "cat",
//   "tag_correct": "null"
// }' "http://localhost:9090/api/photos"
