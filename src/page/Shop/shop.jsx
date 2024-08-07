import axios from "axios";
import { useEffect, useState } from "react";

const Shop=()=>{
  const [store,setStore] = useState([])
  useEffect(()=>{
     const fetchdata = async()=>{
           const data = await axios.get('https://jsonplaceholder.typicode.com/photos');
           const response = await data.data;
           setStore(response)
     }
     fetchdata()
  },[])
    return(
        <>
         {
                store.map((e)=>{
                    return <div key={e.id}>
                       <div>{e.title}</div>
                </div>
})
            }
       {/* <center>
        <section id="shops">
            <div>
              <h3>Shop pages</h3>
              <div>Filter left sidebar</div> <br />
              <div>Filter right sidebar</div><br />
              <div>Canvas sidebar</div><br />
              <div>Hidden sidebar</div><br />
              <div>Filter OS 2.0</div>
            </div>

            <div>
              <h3>Shop pages</h3>
              <div>Grid 2 columns</div> <br />
              <div>Grid 3 columns</div><br />
              <div>Grid 4 columns</div><br />
              <div>Grid 5 columns</div><br />
              <div>List view</div>
            </div>

            <div>
              <h3>Shop pages</h3>
              <div>Pagination page</div> <br />
              <div>Load more button</div><br />
              <div>Infinite scrolling</div><br />
              <div>Advanced filter</div><br />
              <div>Full-width layout</div>
            </div>

            <div>
              <h3>Shop pages</h3>
              <div>Collection list</div> <br />
              <div>Custom content</div><br />
              <div>Custom header banner</div><br />
              <div>Cookies law info</div><br />
            </div> 
             
            <img src="https://next.minimog.co/cdn/shop/files/bg-3.jpg?" alt="" />
            
    
        </section>
    </center>*/}
        </>
    )
}
export default Shop;
