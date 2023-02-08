import ItemCard from "../ItemCard/ItemCard";

const ItemList = ({ products }) => {
  return (
    <section className="flex justify-start items-start pt-24 pb-36 flex-col gap-10">
      <h1 className=" self-center text-2xl">Our catalogue</h1>
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
  );
};

export default ItemList;
