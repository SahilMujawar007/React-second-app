
import { useState } from "react";
import "./Counter.css"

function Counter (){
    const [x, Setx] = useState(0);

    return (
        <> 
           <div className="container">
              <div className="content">
                  <div id="count">{x}</div> 
                  <div id="Btn">
                      <button id="btn-1" onClick={() => Setx(x+1)}>Increment</button>
                      <button id="btn-2" onClick={() => Setx(x-1)}>Decrement</button>
                  </div>
              </div>
           </div>
        </>
        
    )
 }

 export default Counter;
