"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { Button } from "../ui/button";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleLogOut = () => {
    toast({ description: "You have been signed out." });
  };
  return (
    <>
      <SignOutButton redirectUrl='/'>
        <Button onClick={handleLogOut} variant='outline' size='sm'>
          Sign out
        </Button>
      </SignOutButton>
    </>
  );
};

export default SignOutLink;
