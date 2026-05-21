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

export const createChannel = async (channelData) => {
  const response = await fetch(`${API_BASE_URL}/channels`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(channelData),
  });

  if (!response.ok) {
    throw new Error("Failed to create channel");
  }

  return response.json();
};

export const deleteChannel = async (id) => {
  const response = await fetch(`${API_BASE_URL}/channels/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete channel");
  }

  return response.json();
};
