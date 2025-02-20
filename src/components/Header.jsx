

const Header =({links})=>{

    {/* const links=[
        {id: 1, text: "Characters", url: '#'},
        {id: 2, text: "Comics", url: '#'},
        {id: 3, text: "Movies", url: '#'},
        {id: 4, text: "TV", url: '#'},
        {id: 5, text: "Games", url: '#'},
        {id: 6, text: "Collectibles", url: '#'},
        {id: 7, text: "Videos", url: '#'},
        {id: 8, text: "Fans", url: '#'},
        {id: 9, text: "News", url: '#'},
        {id: 10, text: "Shop", url: '#'},]
        
        L'array di oggetti é stato spostato in App.jsx*/}
    
    
    return(
        <header>
            <figure>
                <img src="/dc-logo.png" alt="logo"></img>
            </figure>
                <nav>
                    <ul className="list-horrizzontal">

                        {
                            links.map((element) =>
                                <li key = {element.id}>
                                    <a href ={element.url}>{element.text}</a>
                                </li>

                                //Reso dimanico l'inserimento dei dati
                        )
                        }


                        {/*<li><a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Collectibles</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Fans</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Shop</a></li>
                        Questa é la parte statica dell'inserimento dei dati*/}
                    </ul>
                </nav> 
        </header>
    )
}

export default Header