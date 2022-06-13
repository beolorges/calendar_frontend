export const TOKEN_KEY = "@calendar-Token";
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
export const login = (token) => {
    sessionStorage.setItem(TOKEN_KEY, token.accessToken);
    localStorage.setItem("user", JSON.stringify(token.user));
};
export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("user");
};
