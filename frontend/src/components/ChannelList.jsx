import ChannelCard from "./ChannelCard";

function ChannelList({ channels }) {
  return (
    <div>
      {channels.map((channel) => (
        <ChannelCard key={channel._id} channel={channel} />
      ))}
    </div>
  );
}

export default ChannelList;
