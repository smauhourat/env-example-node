//const environment = require('./environment');


const something = () => {
    //console.log(environment.var1);
    console.log(global.environment.var1)
}


module.exports = something;