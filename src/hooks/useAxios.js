import { useState, useEffect } from "react";
import axios from "axios";
import baseUrlConfig from "../axiosBaseUrl.json";
import { toast } from "react-toastify";

const useAxios = (  toastMessage = null ) => {
  const baseUrl = baseUrlConfig.baseUrl;

  // Request
  const [url, setUrl] = useState("/");
  const [method, setMethod] = useState("get");
  const [body, setBody] = useState(null);
  const [headers, setHeaders] = useState(null);

  // Response
  const [response, setResponse] = useState({});
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const setFetch = (
    url = "/",
    method = "get",
    body = null,
    headers = null
  ) => {
    setUrl(url);
    setMethod(method);
    setBody(body);
    setHeaders(headers);
  };

  const fetchData = () => {
    setResponse(null);
    setloading(true);
    setError("");

    const axiosPromise = axios({
      method: method,
      url: `${baseUrl}${url}`,
      headers: headers,
      data: body,
    });

    if (toastMessage) {
      toast.promise(axiosPromise, toastMessage);
    }

    axiosPromise
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
        setError(err.response.data.msg);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    if (url != "/") {
      fetchData();
    }
  }, [method, url, body, headers]);

  return { setFetch, response, error, loading };
};

export default useAxios;
