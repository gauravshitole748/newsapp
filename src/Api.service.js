import axios from "axios";

const config = {
  api: "https://newsapi.org/v2",
  apiKey: "218718cb675b4806865e0c64dd0ce2f9",
};

const httpGet = async (endpoint, params) => {
  try {
    //console.log("inside httpGet");
    ////console.log(params);
    var response = await axios.get(`${config.api}${endpoint}`, {
      params: {
        apiKey: config.apiKey,
        ...params,
      },
    });
    //return handleResponse(response);
  } catch (error) {
    //console.log("httGet error block");
    //console.log(error);
  } finally {
    //console.log("httpGet finally");
    return handleResponse(response);
  }
};

const handleResponse = (response) => {
  //console.log("inside handleResponse");
  if (response.status === 200) {
    //console.log("handleResponse IF loop");
    //console.log(response.data);
    //return "Gaurav Shitole";
    return response.data;
  } else {
    //console.log("inside handleResponse else block");
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
