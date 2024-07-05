import NavLink from "../navLink/navLink";
import styles from "./links.module.css";

const Links = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  // Temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => {
        return <NavLink item={link} key={link.title} />;
      })}

      {/* 
        To handle 
        - Login (if yes then show Admin based on role) 
        - Logout 
      */}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
