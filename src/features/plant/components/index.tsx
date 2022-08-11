import { Box } from "@chakra-ui/react";
import { FC } from "react";
import ComponentWrapper from "../../common/components/ComponentWrapper";
import CommonSpinner from "../../common/components/CommonSpinner";
import usePlantData from "../api/usePlantData";

const Plant: FC = () => {
  const { data: plantData, isLoading: plantIsLoading } = usePlantData();

  return (
    <ComponentWrapper title={"Planter"}>
      {!plantData || plantIsLoading ? (
        <CommonSpinner />
      ) : (
        plantData.map((item) => <Box key={item.id}>{item.data.plantName}</Box>)
      )}
    </ComponentWrapper>
  );
};

export default Plant;
