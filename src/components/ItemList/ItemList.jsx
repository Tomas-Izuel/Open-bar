import ItemCard from '../ItemCard/ItemCard'

const ItemList = ({products}, {productsId}) => {
  return (
    <section className="w-screen h-screen flex justify-start items-start pt-24 flex-col gap-10">
      <h1 className=" self-center text-xl">Our catalogue of {productsId}</h1>
      <div>
      <div className="flex justify-center items-center flex-wrap gap-5">
        {products.map((product) => (
          <ItemCard 
            name={product.name}
            image={product.image}
            price={product.price}
            id={product.id}
            key={product.id}
          />
        ))}
      </div>
      </div>
    </section>
  )
}

export default ItemList