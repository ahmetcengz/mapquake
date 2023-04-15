import { useQuery } from "react-query";

import { getEarthquakeList } from "../api";

const useEarthquakeData = () => {
  const queryResponse = useQuery("getEarthquakeList", getEarthquakeList);
  return queryResponse;
};

export default useEarthquakeData;
