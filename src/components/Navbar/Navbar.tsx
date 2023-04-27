import { Box, Button, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaWallet } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <>
      <Flex borderRadius={"15px"} padding={"5px"} mt={"5"}>
        <Flex justify={"space-between"} align={"center"} width={"100%"}>
          <Text fontWeight={"extrabold"} fontSize={"4xl"}>
            <Link href={"/"}>midnighter</Link>
          </Text>
          <Link href={"https://fungibles.vercel.app"}>
            <Icon as={FaWallet} fontSize={"2xl"} color={"orange"} />
          </Link>

          <Text> 2023</Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};
export default Navbar;
