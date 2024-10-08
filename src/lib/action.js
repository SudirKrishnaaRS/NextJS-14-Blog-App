// Server Actions:
// NOTE : When using server actions the function should always be `async` irrespective of what you do
"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

// addPost() - To add a new Post (Server action)
export const addPost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  //   console.log("formData", title, desc, slug, userId);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    // HINT : All these title, desc, userId and slug are the same string value given to the `name` in input fields

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog"); // to revalidate the cache and make an API call to refresh the blog page as we added a new post
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  // HINT :  The `id` is the same string value given to the `name` in input field

  //   console.log("formData", id);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog"); // to revalidate the cache and make an API call to refresh the blog page as we added a new post
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// Authetication Handlers :

// GitHub Login Handler - very easy just below 3 lines of code
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

// Logout Handler
export const handleLogout = async () => {
  "use server";
  await signOut();
};

// Register Handler
export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  // Check if password and passwordRepeat are equal
  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    // Check if the user is already registered
    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username already exists" };
    }

    // Encrypt the password using `bcrypt` package
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    // HINT : All these username, email, password, passwordRepeat, img are the same string value given to the `name` in input fields

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// Login Handler
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(err);

    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
