import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

/**
 * Set cookie in localhost, get value from env variable VUE_APP_LOCAL_COOKIE
 */
function setCookieLocal() {
  if (process.env.NODE_ENV === "development") {
    Cookies.set("AUX_JWT", process.env.VUE_APP_LOCAL_COOKIE);
  }
}

/**
 * Get Token from cookie
 *
 * @returns {string} token
 */
function getToken() {
  let token = null;
  if (process.env.NODE_ENV === "production") {
    const cookieName = `AUX_JWT${window.location.pathname
      .split("/")[1]
      .toUpperCase()}`;
    const cookie = Cookies.get(cookieName);
    if (cookie) {
      token = cookie.replace("Token=", "");
    }
  } else if (process.env.NODE_ENV === "development") {
    setCookieLocal();
    token = Cookies.get("AUX_JWT");
    if (!token) {
      setCookieLocal();
      token = Cookies.get("AUX_JWT");
    }
  }

  return token;
}

/**
 * Decode JWT Token
 *
 * @returns {string} decoded token
 */
function decodeToken() {
  const token = getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
}

export { getToken, setCookieLocal, decodeToken };
