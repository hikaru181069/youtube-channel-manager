import { useState } from "react";

function ChannelForm({ onAddChannel }) {
  const [formData, setFormData] = useState({
    channelId: "",
    title: "",
    thumbnailUrl: "",
    subscriberCount: "",
    lastWatchedAt: "",
  });

  //event を使うのはユーザーが直接操作する時など。
  //event は、ユーザーが画面上で何か操作した時に、その
  //操作の情報を受け取るために使うものです。

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const channelData = {
      channelId: formData.channelId,
      title: formData.title,
      thumbnailUrl: formData.thumbnailUrl,
      subscriberCount: Number(formData.subscriberCount) || 0,
      lastWatchedAt: formData.lastWatchedAt || undefined,
    };

    await onAddChannel(channelData);

    setFormData({
      channelId: "",
      title: "",
      thumbnailUrl: "",
      subscriberCount: "",
      lastWatchedAt: "",
    });
  };

  return (
    <form className="channel-form" onSubmit={handleSubmit}>
      <h2>Add Channel</h2>

      <label>
        Channel ID
        <input
          name="channelId"
          value={formData.channelId}
          onChange={handleChange}
          placeholder="UC..."
          required
        />
      </label>

      <label>
        Title
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Channel title"
          required
        />
      </label>

      <label>
        Thumbnail URL
        <input
          name="thumbnailUrl"
          value={formData.thumbnailUrl}
          onChange={handleChange}
          placeholder="https://..."
        />
      </label>

      <label>
        Subscriber Count
        <input
          name="subscriberCount"
          type="number"
          min="0"
          value={formData.subscriberCount}
          onChange={handleChange}
          placeholder="0"
        />
      </label>

      <label>
        Last Watched At
        <input
          name="lastWatchedAt"
          type="date"
          value={formData.lastWatchedAt}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Add Channel</button>
    </form>
  );
}

export default ChannelForm;
