import { Flex } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Flex px={"15px"} flexDir={"column"}>
        <Navbar />
        <main>{children}</main>
      </Flex>
    </>
  );
};

export default Layout;
