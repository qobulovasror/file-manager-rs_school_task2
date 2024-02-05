
const getUsername = () => {
    for(let arg of process.argv){
        if(arg.startsWith("--username=")){
            return arg.slice(11);
        }
    }
    return "unknown user";
}
export default getUsername;