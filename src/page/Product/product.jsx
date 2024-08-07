import './product.css';
import { addtocart } from '../../Logintoolkit/authSlice';
import { useDispatch } from 'react-redux';
import Cart from '../../component/cart';
const Product=()=> {

  const dispatch = useDispatch();

    const pro = [
      {
        name: 'Shirts',
        image: 'https://img0.junaroad.com/uiproducts/18636836/zoom_0-1667625918.jpg',
        price: "$19.99",
        rating: 4.5,
        id:1
      },
      {
        name: 'Pants',
        image: 'https://images.meesho.com/images/products/142474229/8n5iu_512.webp',
        price: "$29.99",
        rating: 5,
        id:2
      },
      {
        name: 'Jeans',
        image: 'https://static.zara.net/photos///2023/I/0/3/p/1538/702/400/2/w/824/1538702400_6_1_1.jpg?ts=1690377594899',
        price: "$19.99",
        rating: 4.5,
        id:3
      },
      {
        name: 'Belts',
        image: 'https://www.gazman.com.au/cdn/shop/collections/belts.jpg?v=1645999354',
        price: "$29.99",
        rating: 5,
        id:4
      },{
        name: 'Glasses',
        image: 'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D',
        price: "$19.99",
        rating: 4.5,
        id:5
      },
      {
        name: 'Shoes',
        image: 'https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=',
        price: "$29.99",
        rating: 5,
        id:6
      },{
        name: 'Tie',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/10/353209091/DH/PJ/DA/1044551/school-uniform-ties-500x500.jpg',
        price: "$19.99",
        rating: 4.5,
        id:7
      },
      {
        name: 'Blazers',
        image: 'https://img3.junaroad.com/uiproducts/19620477/pri_175_p-1680152047.jpg',
        price: "$29.99",
        rating: 5,
        id:8
      }
      
    ];

    const add = (arg)=>{
      dispatch(addtocart(arg))
    }
      return (
        <>
       
        <section id="cardouter">
          {pro.map(e=>{
            return <div key={e.id}>
                 <div class="product-card">
          <div class="product-image">
              <img src={e.image} alt="Product Image"/>
          </div>
          <div class="product-details">
              <div class="product-name">{e.name}</div>
              <div class="product-price">{e.price}</div>
              
          </div>
          <center><button onClick={()=>{add(e)}}> Add to cart </button></center>
      </div> 
            </div>
          })}
          </section>


          
       {/* <center>
        <section id="products">
            <div>
              <h3>Product pages</h3>
              <div>Grid 1 coloum</div> <br />
              <div>Grid 2 coloum</div><br />
              <div>Grid mix</div><br />
              <div>Slider 1 coloum</div><br />
              <div>Slider 2 coloumn</div>
            </div>

            <div>
              <h3>Product pages</h3>
              <div>channels <br />organise team and work</div> <br />
              <div>slack Connect <br />Work with external partners</div><br />
              <div>Messaging <br />Chat with your team</div><br />
              <div>Huddles <br />Meet using audio and video</div><br />
              <div>Clips <br />Record and sharre updates</div>
            </div>

            <div>
              <h3>Product pages</h3>
              <div>channels <br />organise team and work</div> <br />
              <div>slack Connect <br />Work with external partners</div><br />
              <div>Messaging <br />Chat with your team</div><br />
              <div>Huddles <br />Meet using audio and video</div><br />
              <div>Clips <br />Record and sharre updates</div>
            </div>


            <div>
              <h3>Product pages</h3>
              <div>Grid 1 coloum</div> <br />
              <div>Grid 2 coloum</div><br />
              <div>Grid mix</div><br />
              <div>Slider 1 coloum</div><br />
              <div>Slider 2 coloumn</div>
            </div>

              <img id="p1" src="https://next.minimog.co/cdn/shop/products/1.1.1.jpg?v=1631845996&width=350" alt="" />
              <img  id="p2" src="https://next.minimog.co/cdn/shop/products/1.2.1.jpg?v=1631845921&width=360" alt="" />
        </section>
        </center> */}
        </>
    
        
    )
}
export default Product;
       
       
       


