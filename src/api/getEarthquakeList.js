import axios from "axios";

const getEarthquakeList = async () => {
  try {
    const { data } = await axios.get("https://api.orhanaydogdu.com.tr/deprem/kandilli/live");

    if (data?.status) {
      return data?.result;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getEarthquakeList;
