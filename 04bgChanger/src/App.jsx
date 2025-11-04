import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    
  <div className="w-full min-h-screen duration-200"  
   style={{backgroundColor: color, minHeight: '100vh'}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex ... gap-10 shadow-xl ring-4 ring-white/10 hover:ring-black/20 transition-all duration-200 px-3 py-2 rounded-2xl">
          
          <button onClick={()=> setColor("red")} className="outline-none px-4 py-1 rounded-full font-semibold shadow-lg text-white"
           style={{backgroundColor: "red"}}>Red</button>

           <button onClick={()=> setColor("green")} className="outline-none px-4 py-1 rounded-full font-semibold text-white"
           style={{backgroundColor: "green"}}>Green</button>

           <button onClick={()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full font-semibold text-white"
           style={{backgroundColor: "blue"}}>Blue</button>

           <button onClick={()=> setColor("yellow")} className="outline-none px-4 py-1 rounded-full font-semibold text-black"
           style={{backgroundColor: "yellow"}}>Yellow</button>

           <button onClick={()=> setColor("black")} className="outline-none px-4 py-1 rounded-full font-semibold text-white"
           style={{backgroundColor: "black"}}>Black</button>
        </div>
      </div>
     </div>
    
  )
}

export default App
