const path = require('path');
const dotenv = require('dotenv');
const env_file = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV.trim()}` : '.env';
dotenv.config({ path: path.resolve(__dirname, env_file) })

console.log('Running....');
console.log('process.env.VAR1:', process.env.VAR1);
