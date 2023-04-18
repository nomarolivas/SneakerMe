const Sale = () => {
    return (

        <div className="salePage">

            <div className='divider'>
            <h1> </h1>

            </div>

            <div className="pageTitle">
            <h2 className="salePageTitle">Sale</h2>
            <h4 className="salePageDesc"> Items are discounted for a limited time</h4>
            </div>

            <div className="row">

                <div className="column">

                    <img src={require('./images/adidas-Yeezy-Boost-350-V2-Cream.webp')} alt="Yeezy 350 Cream" width="280" height="200"/>
                    <h3>Adidas Yeezy 350 Cream</h3>
                    <strike>$220</strike>
                    <p>$120</p>
                    <button className='addToCart'>Add to cart</button>
                </div>

                 <div className="column">

                    <img src={require('./images/Adidas-Yeezy-500-Blush.webp')} alt="Yeezy 500 Blush" width="300" height="200"/>
                    <h3>Adidas Yeezy 500 Blush</h3>
                    <strike>$200</strike>
                    <p>$100</p>
                    <button className='addToCart'>Add to cart</button>
                </div>

                 <div className="column">

                    <img src={require('./images/Yeezy-750.jpeg')} alt="Yeezy 750 Grey Gum" width="350" height="200"/>
                    <h3>Adidas Yeezy 750 Grey Gum</h3>
                    <strike>$300</strike>
                    <p>$220</p>
                    <button className='addToCart'>Add to cart</button>
                </div>





            </div>








        </div>





        
        
        
    );
}

export default Sale;