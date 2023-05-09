const About = () => {
    return (

        <div classname="aboutUsPage">
            <div className='divider'>
            <h1> </h1>
            </div>

            <div className="pageTitle">
               <h2 className="pageTitleHistory">Our Mission</h2>
               
  
            </div>
            
            <div classname="coverPic">
                <img src={require('./images/sneakerPile.jpeg')} alt="Pile of sneakers" width="100%"  />
            </div>

            <div className='dividerForPara'>
                <h1> </h1>
            </div>

            
            <img src={require('./images/sneakerShelf.webp')} alt="Nike Dunk Low Medium Olive" className="historyPic" />
            
           
            <h2 className="historyBio">Our History</h2>

            <p className="historyBioPara">Founded in 2005 by Christiaan Ashworth and John Parker, END. was created through a shared passion for fashion, design, art, and music. Through this passion for culture the collective vision was to bring world-renowned names, emerging designers and unearthing brands from all corners of the globe to northeast England’s like-minded community. 15 years later and END. is now a leading fashion, sneaker, and design destination, offering its global community unique experiences via physical concept stores and digital touchpoints.</p>
            
            <div className='dividerForPara'>
                <h1> </h1>
            </div>

            <img src={require('./images/sneakerStore.webp')} alt="Nike Dunk Low Medium Olive" className="shoeShelf"/>
            

             

 
        </div>

        
        
        
    );
}

export default About;