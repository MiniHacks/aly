import cookies from "js-cookie";

export const getUserFromCookie = () => {
  const cookie = cookies.get("auth");
  if (!cookie) {
    return null;
  }
  return JSON.parse(cookie);
};

export const setUserCookie = (user) => {
  cookies.set("auth", JSON.stringify(user), {
    expires: 1 / 24,
  });
};

export const removeUserCookie = () => cookies.remove("auth");
