import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {
  //   // Server Action example within the same component
  //   const actionInComponent = async () => {
  //     "use server";
  //     console.log("first comp action");
  //   };

  return (
    <div>
      ServerActionTestPage
      <form action={addPost}>
        {/* HINT: for successful action - always remember to use the `name` attribute in put fields */}
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />

        <button>Create</button>
      </form>
      <form action={deletePost}>
        {/* HINT: for successful action - always remember to use the `name` attribute in put fields */}
        <input type="text" placeholder="postId" name="id" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
