import React from "react";
import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";
import { FaGithub } from "react-icons/fa";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            <div className={styles.githubButton}>
              <FaGithub size="30" title="github logo" /> Login with Github
            </div>
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
