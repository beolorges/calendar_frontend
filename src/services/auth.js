export const TOKEN_KEY = "@calendar-Token";
export const login = (token) => {
    sessionStorage.setItem(TOKEN_KEY, token.accessToken);
    localStorage.setItem("user", JSON.stringify(token.user));
};
export const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("user");
};
export const isAuthenticated = () => sessionStorage.getItem(TOKEN_KEY) !== null;
