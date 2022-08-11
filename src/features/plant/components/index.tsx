import { Box, Heading } from "@chakra-ui/react";
import { FC } from "react";
import ComponentWrapper from "../../common/components/ComponentWrapper";
import usePlantData from "../api/usePlantData";

const Plant: FC = () => {
  const { data: plantData, isLoading: plantIsLoading } = usePlantData();

  if (!plantData || plantIsLoading) {
    return <Box>Loading...</Box>;
  }

  const PlantElements = plantData.map((item) => (
    <Box key={item.id}>{item.data.plantName}</Box>
  ));
  return <ComponentWrapper title={"Planter"}>{PlantElements}</ComponentWrapper>;
};

export default Plant;
