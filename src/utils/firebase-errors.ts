type FirebaseMessageErrors =
  | "auth/email-already-in-use"
  | "auth/user-not-found"
  | "auth/wrong-password"
  | "auth/invalid-display-name";

enum ErrorMessage {
  EMAIL_ALREADY_IN_USE = "This email already in use, try a different one",
  WRONG_PASSWORD = "This is wrong password, try again",
  USER_NOT_FOUND = "This email is not registered, plese sign up",
  UNKNOWN_ERROR = "Unknown error, reload page",
  PASSWORDS_ARE_NOT_THE_SAME = "Password is not the same",
}

const getFirebaseeMessageError = (code: FirebaseMessageErrors): ErrorMessage => {
  switch (code) {
    case "auth/email-already-in-use":
      return ErrorMessage.EMAIL_ALREADY_IN_USE;
    case "auth/wrong-password":
      return ErrorMessage.WRONG_PASSWORD;
    case "auth/user-not-found":
      return ErrorMessage.USER_NOT_FOUND;
    default:
      return ErrorMessage.UNKNOWN_ERROR;
  }
};

export { getFirebaseeMessageError };
