//import core lib
import path from 'path';

//import custom lib and func
import getUsername from './utilits/args.mjs'

const main = async () => {
    const user = getUsername();
    console.log(`Welcome to the File Manager, ${user}!`);
    process.on('exit', ()=>console.log(`Thank you for using File Manager, ${user}, goodbye!`));
}

main().then()