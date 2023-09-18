import axios from "axios";

const config = {
  api: "https://newsapi.org/v2",
  apiKey: "218718cb675b4806865e0c64dd0ce2f9",
};

const httpGet = async (endpoint) => {
  try {
    console.log("inside httpGet");
    const response = await axios.get(`${config.api}${endpoint}`, {
      params: {
        apiKey: config.apiKey,
        country: "us",
        category: "general",
      },
    });
    return handleResponse(response);
  } catch (error) {
    console.log("httGet error block");
    console.log(error);
  }
};

const handleResponse = (response) => {
  //         console.log("inside handleResponse")
  //   console.log(response);
  //   console.log(response.status);
  // You can handle errors here

  if (response.status === 200) {
    console.log("handleResponse IF loop");
    console.log(response.data);
    //return "Gaurav Shitole";
    return response.data;
  } else {
    throw Error(response.data | "error");
  }
};

const aa = (name1) => {
  return bb(name1);
};

const bb = (name) => {
  return name + " How the fuck are ";
};

// export default { httpGet, httpPost, httpPut, httpDelete };
export default { httpGet, aa };
