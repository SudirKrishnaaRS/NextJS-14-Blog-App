"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  // CLIENT SIDE NAVIGATIONS
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  //  useRouter() Examples -
  const handleClick = () => {
    console.log("Clicked");
    router.push("/"); // uses the browser history stack
    // router.replace("/"); // does'nt use the browser history stack
    // router.back(); // go back based on browser history stack
    // router.forward(); // go next based on browser history stack
  };

  //  usePathname() Examples -
  console.log("Path name: " + pathName); //Does not contain query params
  // LOG : Path name: /contact

  //  useSearchParams() Examples -
  const q = searchParams.get("q");
  console.log("Search Params q - ", q);

  // URL : http://localhost:3000/navigationtest?q=sudir&sort=asc
  // LOG : Search Params q -  sudir

  return (
    <div>
      <Link href={"/"} prefetch={false}>
        Click here
      </Link>

      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
