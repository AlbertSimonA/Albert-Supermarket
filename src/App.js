
import './App.css';

function App() {
  return (
    <div className="App">
     {/* Header */}
     <div className='header'>

     <div className='headerleft'>
      <img className='headerlogo'
       src="./logoalbert.png" alt="" />

     </div>
     <div className='headersearch'>
      <input placeholder='What are you looking for ?' type="text" />

      
     </div>
     <div className='headerright'>
        <button type="button" class="btn btn-info">Log In</button>
        
        <button type="button" class="btn btn-primary">Sign Up</button>
        <button type="button" class="btn btn-success">Cart</button>

      </div>

     </div>

    <div >
      <img
      className='bannerimg'
      src="https://kasadoo.com/assets/site/images/Czech-Republic/Prague/Supermarkets/Albert-Supermarket-in-the-center-of-Prague/thumb/albert-supermarket-prague.jpg" alt="" />
    </div>
    

    {/* Sidebar */}
    <div className='sidebar'>
      
      <div className='sidebar-left'>
      

        <ul>
        <button type="button" class="btn btn-primary">Grocery</button>
        <br />
        <li>Bakery and Bread</li>
        <li>Meat and Seafood</li>
        <li>Frozen Foods</li>
        <li>Dairy, Cheese, and Eggs</li>
        <br />
        <button type="button" class="btn btn-primary">Electronics</button>
        <br />
        <li>Television</li>
        <li>Music Player</li>
        <li>Digital Camera</li>
        <li>Bluetooth Speaker</li>
        <br />
        <button type="button" class="btn btn-primary">Mobile Phones</button>
        <br />
        <li> Samsung Glaxy A14 5G</li>
        <li>Iphone 14</li>
        <li>Pocco C50</li>
        <li>Redmi K60E</li>

          

        </ul>
        
        

      </div>
      <div className='feed'>
          <div className='feed-container'>
            <p>Albert Group International is an Indian Emirati-based multinational conglomerate company that operates <br />
             a chain of hypermarkets and retail companies, headquartered in Abu Dhabi, United Arab Emirates. It was founded <br />
             in 2023 by ALBERT SIMON from Kerala, India. Albert Group International mainly operates the international chain of <br />
             hypermarkets named "ALBERT Hypermarket". Albert has over 57,000 employees of various nationalities. <br />

             Albert Mall is a large shopping mall located in the city of Kochi, in the Indian state of Kerala. <br />
              Developed by the Albert Group, it is one of the largest malls in India and the largest in the state of Kerala.
            <br />
             The mall features a wide range of stores, including international and domestic fashion brands, electronics stores, <br />
              and a wide variety of food and dining options. Additionally, it features a multiplex movie theater, a bowling alley, and <br />
               an ice-skating rink.</p>

               <img className='feed-img' src="https://i.pinimg.com/736x/66/5f/6e/665f6e397be2717d47030082365e3aa9.jpg" alt="" />

          </div>
        </div>
      

    </div>
    




    {/* Body */}
    <div className="places" id="places">
        <div class="heading">
            <img src="https://www.luluhypermarket.in/medias/Ac-01.jpg?context=bWFzdGVyfHJvb3R8MzkxMjk1fGltYWdlL2pwZWd8aGY1L2hkOC85MjIyMDc4MDcwODE0L0FjXy0wMS5qcGd8ZmNmMGZiNzJkYWRjOTkwN2EwZTNiZjNlZjRmNjE5NGMwNGQzNDBhNWJmODdhNWZjNDU0Nzk2ZjMzY2ViOTNjMQ" alt="" />

        </div>
        <div className="places-container">
            <div class="box">
                <div class="place-img">
                   <img src="https://media.aholddelhaize.com/media/klvelirk/webp-net-compress-image-5.jpg?t=637594292195300000" alt="" />
                </div>
                <div class="place=text">
                    <h2>Trivandrum</h2>

                </div>
                <i class='bx bx-right-arrow-alt place-icon'></i>

            </div>

            <div class="box">
                <div class="place-img">
                   <img src="https://d48-a.sdn.cz/d_48/c_img_QI_V/Vw9EAq.jpeg" alt="" />
                </div>
                <div class="place=text">
                    <h2>Kochi</h2>

                </div>
                <i class='bx bx-right-arrow-alt place-icon'></i>

            </div>

            <div class="box">
                <div class="place-img">
                    <img src="https://d48-a.sdn.cz/d_48/c_img_H_H/Z3Db5U.jpeg" alt="" />
                </div>
                <div class="place=text">
                    <h2>Calicut</h2>

                </div>
                <i class='bx bx-right-arrow-alt place-icon'></i>

            </div>

        </div>
    </div>

    <img src="https://www.luluhypermarket.in/medias/Smrt-phn-Main-BAnners-01.jpg?context=bWFzdGVyfHJvb3R8MjUzODA2fGltYWdlL2pwZWd8aGY2L2hiNC85MjE2NjA4OTYwNTQyL1NtcnQgcGhuXyBNYWluIEJBbm5lcnMtMDEuanBnfGIxY2NmMDNlMjZmYjAzYzk0N2IxNTY0NTlhYjNlNGFmNjAwM2FhYTUxNTcxODJlNWU4MjZmYzE0NzQ4YWViZjE" alt="" />




    {/* Footer */}
    <div className="footer">
        <div class="footer-box">
            <img className='footer-img' 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYd-yO_bYQL11-pqWCjyWQHDilSllgUc5wBWPYwGyD8MBfMwuKQ7XuIPsyrKe0IS-gzoM&usqp=CAU" alt="" />
           
          
              

              
        </div>

        <div class="footer-box">
            <h3>KNOW US</h3>
            <li>About Us</li>
            <li>Feedback</li>
            <li>FAQs</li>
            <li>News & Events</li>
            <li>Site Map</li>
        </div>

        <div class="footer-box">
            <h3>POLICIES</h3>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
            <li>Website Accessibility</li>
            <li>Privacy Policy</li>
            <li>Service and Warranty</li>
        </div>

        <div class="footer-box">
            <h3>CONTACT</h3>
            <li>Contact Us</li>
            <li>Grocery Store Locations</li>
            <br />
            <br />
            <h3>SUBSCRIBE US</h3>
            <input placeholder='Enter Email ID' type="text" />
          
        </div>

    </div>
   <div class="copyright">
    <p>&#169; 2023 Albert Super Market</p>
   </div>

   <img className='lastpic' src="./lastpic.png" alt="" />


    </div>
 
  )
}
  
export default App;   

   
    
  
  
