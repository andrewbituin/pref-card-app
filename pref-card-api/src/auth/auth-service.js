const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");

const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;
const AuthService = {
  parseBasicToken(bearerToken) {
    return Buffer.from(bearerToken, "base64")
      .toString()
      .split(":");
  },
  getUserWithUserName(db, user_name) {
    return db("prefcard_users")
      .where({ user_name })
      .first();
  },
  // Need a getUserIdWithUserName
  getUserById(db, id) {
    return db("prefcard_users")
      .where({ id })
      .first();
  },

  getAllUsers(db) {
    return db("prefcard_users").select("*");
  },
  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash);
  },
  createJwt(subject, payload) {
    return jwt.sign(payload, config.JWT_SECRET, {
      subject,
      algorithm: "HS256"
    });
  },
  verifyJwt(token) {
    return jwt.verify(token, config.JWT_SECRET, {
      algorithms: ["HS256"]
    });
  },
  validatePassword(password) {
    if (password.length < 8) {
      return "Password must be longer than 8 characters";
    }
    if (password.length > 72) {
      return "Password must be less than 72 characters";
    }
    if (password.startsWith(" ") || password.endsWith(" ")) {
      return "Password must not start or end with empty spaces";
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
      return "Password must contain 1 upper case, lower case, number and special character";
    }
    return null;
  }
};

module.exports = AuthService;
