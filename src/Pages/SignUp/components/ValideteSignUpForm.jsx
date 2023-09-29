export const handleForm = (e, setAllUsersData, allUsersData,setSuccessMessage) => {
  e.preventDefault();
  const userName = document.getElementById("userName");
  const userEmail = document.getElementById("userEmail");
  const userPassword = document.getElementById("Pass");
  const userImage = document.getElementById("userImage");

  // Error messages
  const userNameError = document.getElementById("userNameError");
  const userEmailError = document.getElementById("userEmailError");
  const userPasswordError = document.getElementById("userPasswordError");
  const userImageError = document.getElementById("userImageError");

  let img = "";
  let userData = {};

  // Validation checks
  let isValid = true;

  if (userName.value.trim() === "") {
    userNameError.innerText = "User Name is required";
    isValid = false;
  } else {
    userNameError.innerText = "";
  }

  if (userEmail.value.trim() === "") {
    userEmailError.innerText = "Email is required";
    isValid = false;
  } else {
    userEmailError.innerText = "";
  }

  if (userPassword.value.trim() === "") {
    userPasswordError.innerText = "Password is required";
    isValid = false;
  } else if (userPassword.value.length < 8) {
    userPasswordError.innerText = "Password must be at least 8 characters long";
    isValid = false;
  } else {
    userPasswordError.innerText = "";
  }

  if (!userImage.files || userImage.files.length === 0) {
    userImageError.innerText = "Please upload an image";
    isValid = false;
  } else {
    userImageError.innerText = "";
  }

  if (isValid) {
    // Continue with form submission
    if (userImage.files && userImage.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        img = e.target.result;
        userData = {
          uname: userName.value,
          uEmail: userEmail.value,
          uPass: userPassword.value,
          uImg: img,
        };

        // Use setAllUsersData to update the state with the new user data
        setAllUsersData((prevData) => {
          const updatedData = [...prevData, userData];
          localStorage.setItem("users", JSON.stringify(updatedData)); // Move this inside the callback
          console.log(updatedData);
          return updatedData;
        });

        // Clear form fields
        userName.value = "";
        userEmail.value = "";
        userPassword.value = "";
        userImage.value = null;

        // Set the success message
        setSuccessMessage("Registration successful!");
      };

      // Read the image data as a data URL
      reader.readAsDataURL(userImage.files[0]);
    }
  }
};
