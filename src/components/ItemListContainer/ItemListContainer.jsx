import './ItemListContainer.css'

const ItemListContainer = ({text}) => {
    return (
        <div className='container'>
            <h1>{text}</h1>
        </div>
    )
}

export default ItemListContainer;