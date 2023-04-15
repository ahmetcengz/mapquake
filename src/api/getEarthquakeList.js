import axios from "axios";

const getEarthquakeList = async () => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_API_URI);

    if (data?.status) {
      return data?.result;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getEarthquakeList;
