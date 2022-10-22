import axios from "axios";
export default async function request(method, url, body, token) {
  const options = {
    method,
    url,
    data: body,
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
