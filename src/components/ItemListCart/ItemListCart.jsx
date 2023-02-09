import ItemCardCart from "../ItemCardCart/ItemCardCart";

const ItemListCart = ({ cartList }) => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-5">
      {cartList.map((p) => (
        <ItemCardCart
          name={p.name}
          image={p.image}
          cant={p.cant}
          price={p.price}
          id={p.id}
          key={Math.random() * 1000000000}
        />
      ))}
    </div>
  );
};

export default ItemListCart;
