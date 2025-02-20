const ComicsCard = (props)=> {

    const {comic} = props
    const {id, thumb, title} = comic //destracturing così non devo scrivere comic.id ecc
    return(
     <div className="cards" key={id}>
        <img className="img-comics" src={thumb}></img>
        <p className="title-comics">{title}</p>
    </div>
    )
}

export default ComicsCard