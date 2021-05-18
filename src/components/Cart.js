import React from "react";
import { useCart, useDispatchCart } from "./CartProvider"

const CartItem = ({ product, index, handleRemove }) => {
    return (
        <div>
            <article className="px-8">
                <div className="dt w-100 bb b--black-10 pb2 mt2 dim blue" href="#0">
                    <div className="dtc w3">
                        <img src={`http://localhost:1337${product.img.formats.small.url}`} className="db w-100" />
                    </div>
                    <div className="dtc v-top pl2">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">{product.name}</h1>
                        <h2 className="f6 fw4 mt2 mb0 black-60">{product.description}</h2>
                        <dl className="mt2 f6">
                            <dt className="clip">Price</dt>
                            <dd className="ml0">
                                {product.price.toLocaleString("se", {
                                    style: "currency",
                                    currency: "SEK"
                                })}
                            </dd>
                        </dl>
                        <button onClick={() => handleRemove(index)}>Remove from cart</button>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default function Store() {
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b) => total + b.price, 0);

    const handleRemove = (index) => {
        dispatch({ type: "REMOVE", index });
    };

    if (items.length === 0) {
        return (
            <main>
                <p>Cart is empty</p>
            </main>
        );
    }
    return (
        <main className="min-h-screen flex">
            <p className="px-8">
                Total price:{" "}
                {totalPrice.toLocaleString("se", {
                    style: "currency",
                    currency: "SEK"
                })}
            </p>
            {items.map((item, index) => (
                <CartItem
                    handleRemove={handleRemove}
                    key={index}
                    product={item}
                    index={index}
                />
            ))}
        </main>
    );
}

