import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

function App() {


  return (
    <div id='canvas-container'>
      <Canvas>
        <mesh>
          <gridHelper args={[20, 20]} />
          <boxGeometry args={[3, 3, 3]} />
          <meshBasicMaterial wireframe />
          <OrbitControls />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
