import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const sliderImages = [
    {
       url: 'https://images.unsplash.com/photo-1669205073423-5da5a5280572?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        url: "https://images.unsplash.com/photo-1552346154-7841f684d259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        url: "https://images.unsplash.com/photo-1530202218-5a52c6d42753?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        url: "https://images.unsplash.com/photo-1604852116498-d442170c1738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        url: "https://images.unsplash.com/photo-1622831617330-bc799d6236b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
        url: "https://images.unsplash.com/photo-1678266622924-c7c38ddc25e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
    },
 ];

const Home = () => {
    const [imageNum, setImageNum] = useState(1);
    return (

        <div className="homePage">

            <div className='divider'>
                <h1> </h1>
                </div>

                <div className="pageTitle">

                </div>

            <div className="image-slider">
                

            <SimpleImageSlider
            style={{ margin: '0 auto', padding: '0', width: '100% auto'}}
                // width= {1070} 
                width= "100%"
                height={600}

                navMargin={0}
                images={sliderImages}
                showBullets={true}
               

                showNavs={true}
                autoPlay={true} 
                onStartSlide = {(index, length) => {
                    setImageNum(index);
                }}
                autoPlayDelay = {8}
                        
            />

            </div>  

            {/* End of slider */}

                <div className='dividerForPara'>
                    <h1> </h1>
                </div>

                <div className='latestReleases'>
                    <h1> Latest Releases </h1>
                </div>

                <div className="row">

                <div className="column">
                <img src={require('./images/Jordan-1-L-F.webp')} alt="Air Jordan 1 Lost & Found" width="300" height="200"/>
                   <h3>Air Jordan 1 Lost & Found</h3>
                   <p>$200</p>
                   

                </div>

                <div className="column">
                <img src={require('./images/Air-Jordan-4-Retro-SB-Pine-Green-Product.webp')} alt="Air Jordan 4 SB Pine Green" width="300" height="200"/>
                   <h3>Air Jordan 4 SB Pine Green </h3>
                   <p>$225</p>
                   

                </div>

                <div className="column">

                    <img src={require('./images/Yeezy-750.jpeg')} alt="Yeezy 750 Grey Gum" width="350" height="200"/>
                    <h3>Adidas Yeezy 750 Grey Gum</h3>
                    
                    <p>$220</p>
                    
                </div>
            </div>

            <div className='footer'> Nomar Olivas @ 2023 </div> 

        </div>
        
    );
}

export default Home;