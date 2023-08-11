import React from "react";
import Logo from "../assets/codepen-logo-png-transparent.png";
import { UserAuthInput } from "../components";

const SignUp = () => {
  return (
    <div className="bg-red-90 w-full py-6">
      <img
        src={Logo}
        alt="Logo"
        className="object-contain w-32 opacity-50 h-auto"
      />
      <div className="bg-blue-90 w-full flex flex-col items-center justify-center py-8">
        <p className="py-12 text-2xl text-primaryText">Join With Us! 😍</p>

        <div className="px-8 w-full md:w-auto py-4 rounded-xl bg-red-900 shadow-md flex flex-col items-center justify-center gap-8">
          {/* email */}
          <UserAuthInput />
          {/* password */}
          {/* alert section */}
          {/* login button */}
          {/* account text section */}
          {/* or section */}
          {/* sign in with google */}
          {/* or section */}
          {/* sign in with github */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
