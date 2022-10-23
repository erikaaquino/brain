import "./App.css";
import "tachyons";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkform/ImageLinkform";
import Rank from "./components/Rank/Rank";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useState, useCallback, useEffect} from "react";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

const particleOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};



function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("SignIn");
  const [isSignedIn,setisSignedIn]=useState(false)
  const [user,setUser]=useState({
    id:'',
    name:'',
    email:'',
    entries:0,
    joined:'',
  })

  useEffect(
    ()=>{
      fetch('https://nameless-island-50939.herokuapp.com/').then(response=>response.json())
      .then(data=>console.log(data))
    }, []
  )

const loadUser=(user)=>{
 
  setUser(user)
}

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onButtonSubmit = () => {
    setImageUrl(input);
    fetch('https://nameless-island-50939.herokuapp.com/imageurl',{
      method: 'post',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ input })
    }).then(resp=> resp.json())
      .then((resp) => {
        if(resp){
          fetch('https://nameless-island-50939.herokuapp.com/image',{
            method: 'put',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({ id: user.id })
          })
          .then(response=>response.json())
          .then(count=>setUser({...user, entries:count }))
          .catch(console.log)
        }
        displayFaceBox(calculateFaceLocation(resp));
      })
      .catch((err) => console.log("me kero murir", err));
  };

  const onRouteChange=(route)=>{
    if (route==='signout'){
      setisSignedIn(false);
      setImageUrl('');
    }else if(route==="home") { 
      setisSignedIn(true);
    }
    setRoute(route);
  }


  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Particles
        className="particles"
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
      />
      <Navigation isSignedIn={isSignedIn}  onRouteChange={onRouteChange} />
      {route === "home" ? (
        <div>
        <Logo />
        <Rank name={user.name} entries={user.entries}/>
        <ImageLinkForm
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
        />
        <FaceRecognition box={box} imageUrl={imageUrl} />
      </div>
        
      ) : (
        route==="SignIn"? <SignIn onRouteChange={onRouteChange} loadUser={loadUser}/> 
        :<Register onRouteChange={onRouteChange} loadUser={loadUser} /> 
      )}
      
    </div>
  );
}

export default App;
