export function checkAuthAndTokenRefreshTime() {
    const token = localStorage.getItem('token');
    // const tokenRefreshAfter = localStorage.getItem('tokenRefreshAfter');
    // if (token && tokenRefreshAfter) {
    //     const tokenRefreshAfterTimeStamp = Number(tokenRefreshAfter);
    //     const currentTime = new Date().getTime();
    //     if (token && tokenRefreshAfterTimeStamp > currentTime) {
    //         return true;
    //     }
    // }
    return token === null ? false : true;
}
