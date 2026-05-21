import { useEffect, useState } from "react";
import ChannelForm from "../components/ChannelForm";
import ChannelList from "../components/ChannelList";
import {
  createChannel,
  deleteChannel,
  getChannels,
} from "../services/channelApi";

function Home() {
  const [channels, setChannels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //useEffectを使う理由は、reactは、render中にapi通信してはいけないから。api通信は副作用
  //副作用はuseEffectに分離する。これ基本。
  //reactは、
  //function Home() {
  // return <h1>Hello</h1>;
  //}
  //のように入力->jsx出力だけを期待している。
  //useEffectを使わないと、サイレンダリングするたびに 呼び出されるため、
  //無限ループになる。
  useEffect(() => {
    const fetchChannels = async () => {
      const data = await getChannels();
      setChannels(data);
      setIsLoading(false);
    };

    fetchChannels();
  }, []); //useEffectこの場合初回実行時のみ作動

  const handleAddChannel = async (channelData) => {
    const newChannel = await createChannel(channelData);
    setChannels([...channels, newChannel]);
  };

  const handleDeleteChannel = async (id) => {
    await deleteChannel(id);

    setChannels(channels.filter((channel) => channel._id !== id));
  };

  return (
    <main>
      <h1>YouTube Channel Manager</h1>
      <ChannelForm onAddChannel={handleAddChannel} />
      {isLoading ? (
        <p>Loading channels...</p>
      ) : (
        <ChannelList
          channels={channels}
          onDeleteChannel={handleDeleteChannel}
        />
      )}
    </main>
  );
}

export default Home;
