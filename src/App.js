import { ContactShadows, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Watch from "./Watch";

export default function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Rolex
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bg-new">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center align-items-center">
            <h3 class="display-4 text-center">
              Check out our best and the cheapest watches{" "}
            </h3>
          </div>

          <div className="col-lg-6 col-md-5 col-sm-12">
            <Canvas
              shadows
              style={{ height: "500px" }}
              // className="canvas-new"
              dpr={[1, 2]}
              camera={{ position: [0, 0, 4], fov: 50 }}
            >
              <ambientLight intensity={0.2} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                shadow-mapSize={[512, 512]}
                castShadow
              />
              <PresentationControls
                global
                snap={{ mass: 4, tension: 1500 }}
                config={{ mass: 2, tension: 500 }}
                polar={[-Math.PI / 3, Math.PI / 2]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                rotation={[0, 0.3, 0]}
              >
                <Watch
                  rotation={[-Math.PI / 2, 0, 0]}
                  position={[0, 0, 0]}
                  scale={0.003}
                />
              </PresentationControls>
              <ContactShadows
                rotation-X={Math.PI / 2}
                position={[0, -1.4, 0]}
                opacity={0.75}
                width={10}
                height={10}
                blur={2.6}
                far={2}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
