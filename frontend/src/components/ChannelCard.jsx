function ChannelCard({ channel }) {
  return (
    <div>
      <h2>{channel.title}</h2>
      <p>Subscribers: {channel.SubscriberCount}</p>
      <p>Last watched: {channel.lastWatchedAt}</p>
    </div>
  );
}

export default ChannelCard;
