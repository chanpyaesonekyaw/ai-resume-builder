import React from "react";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-3 px-5 flex justify-between items-center shadow-md">
      {isSignedIn ? (
        <Link to={"/dashboard"}>
          <img src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
      ) : (
        <Link to={"/"}>
          <img src="/logo.svg" alt="Logo" width={100} height={100} />
        </Link>
      )}

      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button variant='outline' className='cursor-pointer'>Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button className='cursor-pointer'>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
