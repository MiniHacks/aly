export const getUserFromCookie = () => {
  const cookie = localStorage.getItem("auth");
  if (!cookie) {
    return null;
  }
  return JSON.parse(cookie);
};

export const setUserCookie = (user) => {
  localStorage.setItem("auth", JSON.stringify(user));
};

export const removeUserCookie = () => localStorage.removeItem("auth");
