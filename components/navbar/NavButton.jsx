"use client";

import { useEffect, useState } from "react";

const NavButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <li>
      <a>Product</a>
    </li>
  );
};

export default NavButton;
