import { useContext } from "react";
import Display from "./Component/Display";
import Player from "./Component/Player";
import Sidabar from "./Component/Sidabar";
import { PlayerContext } from "./Component/context/PlayerContext";

function App() {
  const {audioRef,track} = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidabar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
     
    </div>
  );
}

export default App;
