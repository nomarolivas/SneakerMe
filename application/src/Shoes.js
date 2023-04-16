const Shoes = () => {
    return (
        <div className="shoesPage">

            <h1 className="shoesName">Shoes Page</h1>

            <div className="row">
            
                <div className="column">
                  <img src={require('./images/Nike_Dunk_grey.webp')} alt="Nike_Dunk_Panda" width="300" height="200"/>
                  <h2>Product 1</h2>
                   <p>Item details</p>

                </div>

                <div className="column">
                  <img src={require('./images/Nike_OW_Dunk.jpeg')} alt="Nike_Dunk_Panda" width="300" height="200"/>

                   <h2>Product 2</h2>
                   <p>Item details</p>
                   

                </div>

                <div className="column">
                  <img src={require('./images/Nike_dunk_green.webp')} alt="Nike_Dunk_Panda" width="320" height="200"/>
                   <h2>Product 3</h2>
                   <p>Item details</p>

                </div>

                <div className="column">
                <img src={require('./images/Air-Jordan-4-Retro-SB-Pine-Green-Product.webp')} alt="Nike_Dunk_Panda" width="300" height="200"/>
                   <h2>Product 4</h2>
                   <p>Item details</p>

                </div>

                <div className="column">
                <img src={require('./images/jordan_4_amm.webp')} alt="Nike_Dunk_Panda" width="300" height="200"/>
                   <h2>Product 5</h2>
                   <p>Item details</p>

                </div>

                <div className="column">
                <img src={require('./images/Jordan_4_Oreo.webp')} alt="Nike_Dunk_Panda" width="300" height="200"/>
                   <h2>Product 6</h2>
                   <p>Item details</p>

                </div>

                <div className="column">
                <img src={require('./images/Jordan_1_OB.webp')} alt="Nike_Dunk_Panda" width="300" height="200"/>
                   <h2>Product 7</h2>
                   <p>Item details</p>

                </div>

                <div className="column">
                <img src={require('./images/Jordan-1-L-F.webp')} alt="Nike_Dunk_Panda" width="300" height="200"/>
                   <h2>Product 8</h2>
                   <p>Item details</p>

                </div>

                <div className="column">
                <img src={require('./images/Jordan_1_BL.webp')} alt="Nike_Dunk_Panda" width="300" height="200"/>
                   <h2>Product 9</h2>
                   <p>Item details</p>

                </div>


            </div>






        </div>





        

        
        
        
    );
}

export default Shoes;