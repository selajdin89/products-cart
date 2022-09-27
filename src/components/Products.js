import React from "react";

const Products = ({ state, dispatch }) => {
  const { cart, products } = state;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
            border: "1px solid grey",
            width: "30%",
            marginTop: 10,
            gap: 10,
          }}
        >
          <img
            src={prod.thumbnail}
            alt={prod.title}
            style={{ height: 200, objectFit: "cover" }}
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{prod.title}</span>
            <b>$ {prod.price}</b>
          </div>

          {cart.some((p) => p.id === prod.id) ? (
            <button
              style={{
                border: 0,
                padding: 5,
                borderRadius: 5,
                backgroundColor: "#e53935",
                color: "white",
              }}
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
              }
            >
              Remove from Cart
            </button>
          ) : (
            <button
              style={{
                border: 0,
                padding: 5,
                borderRadius: 5,
                backgroundColor: "green",
                color: "white",
              }}
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    id: prod.id,
                    title: prod.title,
                    thumbnail: prod.thumbnail,
                    price: prod.price,
                    qty: 1,
                  },
                })
              }
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Products;
