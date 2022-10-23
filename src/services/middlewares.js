import Cookie from "js-cookie";

export default {
  auth(to, from, next) {
    const token = Cookie.get("aux_token");

    /** Validar token */

    if (!token) {
      next("/");
    }

    next();
  },
};
