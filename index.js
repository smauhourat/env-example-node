// const path = require('path');
// const dotenv = require('dotenv');
// const env_file = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV.trim()}` : '.env';
// dotenv.config({ path: path.resolve(__dirname, env_file) })

const environment = require('./environment');
//console.log(environment.var1);

global.myNumber = 5
global.environment = environment;

const something = require('./far/away/something');


console.log('Running....');
something();
console.log(global.environment.var1);
console.log('process.env.VAR1:', process.env.VAR1);
