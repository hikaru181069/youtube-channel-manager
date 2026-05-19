import { useEffect, useState } from "react";
import ChannelList from "../components/ChannelList";
import { getChannels } from "../services/channelApi";

function Home() {
  const [channels, setChannels] = useState([]);

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
    };

    fetchChannels();
  }, []); //useEffectこの場合初回実行時のみ作動

  return (
    <main>
      <h1>YouTube Channel Manager</h1>
      <ChannelList channels={channels} />
    </main>
  );
}

export default Home;
