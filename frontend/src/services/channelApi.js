const API_BASE_URL = "http://localhost:5003/api";

export const getChannels = async () => {
  const response = await fetch(`${API_BASE_URL}/channels`);

  if (!response.ok) {
    throw new Error("Failed to fetch channels");
  }

  return response.json();
};
