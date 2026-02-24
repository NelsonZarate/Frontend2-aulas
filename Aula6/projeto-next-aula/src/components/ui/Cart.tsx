"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart, clearCart } from "@/redux/cartSlice";

const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (!items || items.length === 0) {
    return <div>O carrinho está vazio.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Carrinho ({items.length})</h2>
      <ul className="space-y-2">
        {items.map((p) => (
          <li key={p.id} className="flex justify-between items-center bg-white p-2 rounded shadow">
            <div>
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm text-gray-600">{p.body}</div>
            </div>
            <div className="ml-4 flex gap-2">
              <button
                onClick={() => dispatch(removeFromCart(p.id))}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button onClick={() => dispatch(clearCart())} className="bg-gray-800 text-white px-3 py-1 rounded">
          Limpar carrinho
        </button>
      </div>
    </div>
  );
};

export default Cart;
