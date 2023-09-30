// COOKIES, LOCAL STORAGE

export const setAuthUser = (data) => {
  // save object to the local storage
  // Stringify OBJECT TO TEXT
  localStorage.setItem("user", JSON.stringify(data));
};

export const getAuthUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeAuthUser = () => {
  if (localStorage.getItem("user")) {
    localStorage.removeItem("user");
  }
};
