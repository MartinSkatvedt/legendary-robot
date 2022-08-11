import { Box, Spinner } from "@chakra-ui/react";
import { FC } from "react";

const CommonSpinner: FC = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="teal"
      size="xl"
    />
  );
};

export default CommonSpinner;
