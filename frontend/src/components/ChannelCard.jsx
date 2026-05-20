function ChannelCard({ channel, onDeleteChannel }) {
  return (
    <div>
      <h2>{channel.title}</h2>
      <p>Subscribers: {channel.subscriberCount}</p>
      <p>Last watched: {channel.lastWatchedAt}</p>
      {/*()は、eventが引数にない。それは、ユーザーが直接操作するのには関係ないから。*/}
      <button onClick={() => onDeleteChannel(channel._id)}> Delete</button>
    </div>
  );
}

export default ChannelCard;
