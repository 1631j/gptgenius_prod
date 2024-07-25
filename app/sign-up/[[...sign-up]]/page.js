import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex justify-centre items-centre">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
