const isAuth = () => {
    const authJWT = sessionStorage.getItem('auth');

    // VERIFICAR AUTH
    if(!authJWT) {
        return false
    }

    return true;
}

export default isAuth