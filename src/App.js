import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import Bike from './components/Bike';
import Movies from './components/Movies';

function App() {
  return (
    <div >
      <h1>***COMPONENTS***</h1>
      <h3>without using components</h3>
      <div className='player_container'>
        <img src='./images/jb.png'></img>
        <h2>NAME:Buttler</h2>
        <h2>TEAM:RR</h2>
        <h2>S/R:185.6</h2>
      </div>
      <video src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' controls></video>
      <hr></hr>
      <h3>**using components**</h3>
      <Player name="HenrichKlasen" team="SRH" sr="198.3" src="./images/klsn.png"> </Player>
      <Player name="JonnyBairstow" team="PBSK" sr="168.3" src="./images/jbr.png"></Player>
      <Player name="TimDavid" team="Mi" sr="197.3" src="./images/td.png"></Player>
      <Player name="ViratKohli" team="RCB" sr="148.3" src="./images/vk.png"></Player>
      <hr></hr>
      <h1>BIKES</h1>
      <div>
        <Bike name= "RC390" power="398.5cc" company="KTM" link="./images/rc390.png"></Bike>
        <Bike name= "Classic350" power="366.5cc" company="RoyalEnfiled" link="./images/classic350.png"></Bike>
        <Bike name= "S1000rr" power="999cc" company="BMW" link="./images/bmw1rr.jpeg"></Bike>
      </div>
      <h1>MOVIES</h1>
      <div>
        <Movies moviename="Avatar" image="./images/avatar.jpeg" trailer= "https://www.youtube.com/embed/5PSNL1qE6VY?rel=0"></Movies>
        <Movies moviename="Terminator" image="./images/terminator.jpg" trailer= "https://www.youtube.com/embed/CRRlbK5w8AE?rel=0"></Movies>
        <Movies moviename="Avatar" image="./images/godzilla.jpg" trailer= "https://www.youtube.com/embed/vIu85WQTPRc?rel=0"></Movies>
      </div>
    </div>

  );
}

export default App;
