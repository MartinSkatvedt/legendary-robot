import { Box, Divider, Heading } from "@chakra-ui/react";
import { FC } from "react";

type ComponentWrapperProps = {
  title: string;
  children: React.ReactNode;
};

const ComponentWrapper: FC<ComponentWrapperProps> = (
  props: ComponentWrapperProps
) => {
  const { title, children } = props;
  return (
    <Box
      w="32%"
      border="2px solid white"
      borderRadius="5px"
      px="3%"
      position="relative"
    >
      <Heading as="h3">{title}</Heading>
      <Divider my="10px" />
      {children}
    </Box>
  );
};

export default ComponentWrapper;
