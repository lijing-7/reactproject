export function gettoken(){
    return localStorage.getItem("token");
}

export function  settoken(token){
   localStorage.setItem("token",token);
}

export function cleartoken(){
    localStorage.removeItem("token")
}

export function isLogin(){
    if (localStorage.getItem("token")){
        return true;
    }
    return false;
}