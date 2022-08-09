import { Box } from "@chakra-ui/react";
import { FC } from "react";

type ComponentWrapperProps = {
  children: React.ReactNode;
};

const ComponentWrapper: FC<ComponentWrapperProps> = (
  props: ComponentWrapperProps
) => {
  const { children } = props;
  return (
    <Box w="30%" border="1px solid black">
      {children}
    </Box>
  );
};

export default ComponentWrapper;
