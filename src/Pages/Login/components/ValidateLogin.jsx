export const handleLogin = (
  e,
  loginError,
  setLoginError,
  navigate,
  language
) => {
  e.preventDefault();

  // Retrieve the values of the username and password fields
  const userName = document.getElementById("userName").value;
  const userPassword = document.getElementById("Pass").value;

  // Check if the fields are empty
  if (!userName || !userPassword) {
    setLoginError(
      language === "ar-KSA"
        ? "خطأ في اسم المستخدم أو كلمة المرور."
        : "Username and password are required."
    );
    return;
  }

  // Retrieve the users from localStorage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if a user with the entered username and password exists
  const user = storedUsers.find(
    (u) => u.uname === userName && u.uPass === userPassword
  );

  if (user) {
    // Set the user as logged in in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    // Redirect to the logged-in user's profile or dashboard
    navigate("/");
  } else {
    setLoginError(
      language === "ar-KSA"
        ? "اسم المستخدم أو كلمة المرور غير صحيحة."
        : "Invalid username or password."
    );
  }
};
