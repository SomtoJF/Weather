// Module containing various Useful DOM methods
function attributeSetter(){
    for(let i = 1; i < arguments.length; i++){
        arguments[0].setAttribute(arguments[i][0], arguments[i][1]);
    }
    return arguments[0];
};

function childAppender(parent, childArray){
    for(let i = 0; i < childArray.length; i++){
        parent.appendChild(childArray[i]);
    }
    return parent;
}
export 
{
    attributeSetter, 
    childAppender
};