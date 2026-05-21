import ChannelCard from "./ChannelCard";

function ChannelList({ channels, onDeleteChannel }) {
  return (
    <div>
      {channels.map((channel) => (
        <ChannelCard
          key={channel._id}
          channel={channel}
          onDeleteChannel={onDeleteChannel}
        />
      ))}
    </div>
  );
}

export default ChannelList;
