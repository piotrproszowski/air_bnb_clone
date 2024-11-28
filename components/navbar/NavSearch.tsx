import { Input } from "../ui/input";
import React from "react";

const NavSearch = () => {
  return (
    <Input
      type='text'
      placeholder='Search'
      className='max-w-xs dark:bg-muted'
    />
  );
};

export default NavSearch;
