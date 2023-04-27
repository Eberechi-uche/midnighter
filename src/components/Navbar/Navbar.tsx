import { Button, Divider, Flex, Text } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  return (
    <>
      <Flex borderRadius={"15px"} padding={"5px"} mt={"5"}>
        <Flex justify={"space-between"} align={"center"} width={"100%"}>
          <Text fontWeight={"extrabold"} fontSize={"4xl"}>
            midnighter
          </Text>
          <Text> 2023</Text>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};
export default Navbar;
