// Server Actions:
// NOTE : When using server actions the function should always be `async` irrespective of what you do
"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

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
