import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      Navbar
      {children}
      Footer
    </>
  );
};

export default layout;
