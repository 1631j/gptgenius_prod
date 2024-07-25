import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex justify-centre items-centre">
      <SignIn />
    </div>
  );
};

export default SignInPage;
