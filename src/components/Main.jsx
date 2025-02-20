import ComicsList from "./ComicsList"

const Main = () =>{
    return(
        <main>
            <section id="click">
                <img className="teen-titans" src="src\assets\img\jumbotron.jpg"></img>
                <span className="etichetta">Current series</span>
            </section>

            <ComicsList />

            <section id="products">
                <ul className="list-horrizzontal">
                    <li className="list-item-main">
                        <img className= "img-main" src="src\assets\img\buy-comics-digital-comics.png"></img>
                        <a className="content" href="#">Digital Comics</a>
                    </li>

                    <li className="list-item-main">
                        <img className= "img-main" src="src\assets\img\buy-comics-merchandise.png"></img>
                        <a className="content" href="#">Dc Merchandise</a>
                    
                    </li>

                    <li className="list-item-main">
                        <img className= "img-main" src="src\assets\img\buy-comics-subscriptions.png"></img>
                        <a className="content" href="#">Subscription</a>
                    
                    </li>

                    <li className="list-item-main">
                        <img className= "img-main" src="src\assets\img\buy-comics-shop-locator.png"></img>
                        <a className="content" href="#">Comic Shop Locator</a>
                    </li>

                    <li className="list-item-main">
                        <img className= "img-main" src="src\assets\img\buy-dc-power-visa.svg"></img>
                        <a className="content" href="#">Dc Power Visa</a>
                    </li>
                </ul>
            </section>
        </main>
        
       
    )
}

export default Main