
const express = require('express'),
      path = require('path'),
      cors = require('cors'),
      errorhandler = require('errorhandler'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');
// const isProduction = process.env.NODE_ENV === 'production';

const app = express();

// LOCALHOST PORT
const port = 4200;
//BODY PARSER
app.use(bodyParser.json());
// CORS
app.use(cors());

// ability to use images, etc.. from public folder
// app.use(express.static(__dirname + '/public'));
//
// if (!isProduction) {
//     app.use(errorhandler());
// }
// // development error handler
// if (isProduction) {
//     mongoose.connect(process.env.MONGODB_URI)
// }  else {
//     mongoose.connect('mongodb://localhost/mediumclone');
//     mongoose.set('debug', true)
// }
//
// // will print stacktrace
// if (!isProduction) {
//     app.use(function(err, req, res, next) {
//         console.log(err.stack);
//
//         res.status(err.status || 500);
//
//         res.json({'errors': {
//                 message: err.message,
//                 error: err
//             }});
//     });
// }
//
// require('./models/User');
//
// // app.use(require('./routes'));
// app.get('/', (req, res) => res.send('Hello World!'));
// app.use('/',router);
// app.use('/', routes.Router());

app.use(express.static(path.join(__dirname, 'public')));

const users = require('./routes/users');
app.use('/', users);

// ROUTE index
app.get('/', (req, res) => {
   res.send('inv. Endpoint');
});

// SERVER
app.listen(port, () => {
    console.log('Server starting on port 4200')
});
