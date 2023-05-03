const path = require('path');
const dotenv = require('dotenv');
const env_file = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV.trim()}` : '.env';
dotenv.config({ path: path.resolve(__dirname, env_file) })
const env = process.env;

const environment = {
    var1: env.VAR1
}


module.exports = environment;