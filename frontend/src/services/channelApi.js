const API_BASE_URL = "http://localhost:5003/api";

//exportには２種類ある。これはnamed export
//export default ~ はdefault export
export const getChannels = async () => {
  const response = await fetch(`${API_BASE_URL}/channels`);

  if (!response.ok) {
    throw new Error("Failed to fetch channels");
  }

  return response.json();
};
