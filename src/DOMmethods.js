// Module containing various Useful DOM methods
function attributeSetter(){
    for(let i = 1; i < arguments.length; i++){
        arguments[0].setAttribute(arguments[i][0], arguments[i][1]);
    }
    return arguments[0];
};

export {attributeSetter};