const { server } = require('./src/server');
const { config } = require('dotenv');

config();

server.listen(process.env.PORT || 3000);