import axios from "axios";
import { getCropCategory } from "../utils/utils";

export const getCropsByCategory = async (category) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/forecast/${category}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("ERROR : get crops by category", error);
    throw error;
  }
};

export const fetchCropRetailAndSimilar = async (cropName) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/base/${cropName}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR : get crop retail price and similar crop price", error);
    throw error;
  }
};

export const fetchPriceCompareInfo = async (cropName, pathVariable) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/comparison/${pathVariable}/${cropName}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log("ERROR : get compare price info", error);
    throw error;
  }
};

export const getPopularCrops = async () => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/comparison/category/채소`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.cropList.sort(() => Math.random() - 0.5).slice(0, 3);
  } catch (error) {
    console.log("ERROR : get popular crops", error);
    throw error;
  }
};

export const getSeasonsCrops = async () => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/search/two`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data.cropList;
  } catch (error) {
    console.log("ERROR : get season crop", error);
    throw error;
  }
};

export const getPastPriceInfo = async (crop) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/prediction/past/${crop}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("ERROR : get past prediction price info", error);
    throw error;
  }
};

export const getFuturePriceInfo = async (crop) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/prediction/future/${crop}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("ERROR : get future prediction price info", error);
    throw error;
  }
};

export const getRecentIssue = async (crop) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/issue/${crop}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("ERROR : get future prediction price info", error);
    throw error;
  }
};

export const getRecommandList = async (crop) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}/api/recommendation/${crop}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log("ERROR : get future prediction price info", error);
    throw error;
  }
};

export const getCropImage = async (crop) => {
  try {
    const url = `${
      process.env.REACT_APP_BASE_URL
    }/api/forecast/${getCropCategory(crop)}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.crops.find((item) => item.cropsName === crop)
      ?.cropsImage;
  } catch (error) {
    console.log("ERROR : get future prediction price info", error);
    throw error;
  }
};
