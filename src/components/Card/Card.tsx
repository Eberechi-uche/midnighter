import { Flex, Text, Image, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

type CardProps = {
  name: string;
  image: string;
};
const Card: React.FC<CardProps> = ({ name, image }) => {
  const [imageLoad, setImageLoad] = useState(true);
  return (
    <>
      <Flex
        width={"fit-content"}
        flexDir={"column"}
        position={"relative"}
        my={"7px"}
        borderRadius={"4px"}
        height={"fit-content"}
        overflow={"hidden"}
      >
        <Flex
          position={"absolute"}
          top={"0"}
          background={"linear-gradient(to  bottom, #232526, #4143452c);"}
          width={"100%"}
          height={"40px"}
          color={"white"}
          padding={"2"}
        >
          <Text fontWeight={"bold"}> MB </Text>
          <Text>{name} </Text>
        </Flex>

        <Flex>
          <Skeleton isLoaded={imageLoad}>
            <Image
              src={image}
              alt={"card image"}
              width={"500px"}
              onLoad={() => setImageLoad(true)}
              height={"250px"}
              objectFit={"cover"}
            />
          </Skeleton>
        </Flex>
      </Flex>
    </>
  );
};
export default Card;
