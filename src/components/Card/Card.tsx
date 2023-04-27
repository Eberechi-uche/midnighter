import { Flex, Text, Image, Icon } from "@chakra-ui/react";

type CardProps = {
  name: string;
  image: string;
};
const Card: React.FC<CardProps> = ({ name, image }) => {
  return (
    <>
      <Flex
        width={"fit-content"}
        height={"max-content"}
        flexDir={"column"}
        position={"relative"}
        my={"7px"}
        borderRadius={"10px"}
        overflow={"hidden"}
      >
        <Flex
          position={"absolute"}
          top={"0"}
          background={
            "linear-gradient(0deg, rgba(34,193,195,0.616) 31%, rgba(223,158,17,0.5866666666666667) 60%)"
          }
          width={"100%"}
          color={"white"}
        >
          <Text fontWeight={"bold"}> MB </Text>
          <Text>{name} </Text>
        </Flex>

        <Flex>
          <Image
            src={image}
            alt={"card image"}
            width={"500px"}
            objectFit={"scale-down"}
          />
        </Flex>
      </Flex>
    </>
  );
};
export default Card;
