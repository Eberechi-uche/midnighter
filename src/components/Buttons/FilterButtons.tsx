import { Button, Flex } from "@chakra-ui/react";

type FilterButtonsProps = {
  name: string;
  filter: (value: string) => void;
  selected: boolean;
};

const FilterButtons: React.FC<FilterButtonsProps> = ({
  name,
  selected,
  filter,
}) => {
  return (
    <>
      <Flex m={"2"}>
        <Button
          size={"sm"}
          onClick={() => {
            filter(name);
          }}
          colorScheme={"orange"}
          borderRadius={"full"}
          variant={selected ? "solid" : "outline"}
        >
          {name}
        </Button>
      </Flex>
    </>
  );
};
export default FilterButtons;
