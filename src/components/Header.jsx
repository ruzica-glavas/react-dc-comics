const links=[
    {id: 1, text: Characters, url: '#'},
    {id: 2, text: Comics, url: '#'},
    {id: 3, text: Movies, url: '#'},
    {id: 4, text: TV, url: '#'},
    {id: 5, text: Games, url: '#'},
    {id: 6, text: Collectibles, url: '#'},
    {id: 7, text: Videos, url: '#'},
    {id: 8, text: Fans, url: '#'},
    {id: 9, text: News, url: '#'},
    {id: 10, text: Shop, url: '#'},
]


const Header =(links)=>{
    return(
        <header>
            <figure>
                <img src="/dc-logo.png" alt="logo"></img>
            </figure>
                <nav>
                    <ul className="list-horrizzontal">
                        <li><a href="#">{ links.text }</a></li>
                        <li><a href="#">{ links.text }</a></li>
                        <li><a href="#">{ links.text }</a></li>
                        <li><a href="#">{ links.text }</a></li>
                        <li><a href="#">{ links.text }</a></li>
                        <li><a href="#">{ links.text }</a></li>
                        <li><a href="#">{ links.text }</a></li>
                        <li><a href="#">{ links.text }</a></li>
                        <li><a href="#">{ links.text }</a></li>
                        <li><a href="#">{ links.text }</a></li>
                    </ul>
                </nav> 
        </header>
    )
}

export default Header