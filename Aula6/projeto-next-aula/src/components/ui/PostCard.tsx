"use client";

import { Post } from "@/types/posts";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

const PostCard = ({ post }: { post: Post }) => {
    const dispatch = useDispatch();
    const handleAdd = () => dispatch(addToCart(post));

    return (
        <div className="bg-gray-100 text-black p-4 rounded-md">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <p className="text-gray-500">{post.body}</p>
                    <p className="text-gray-500">User: {post.userId}</p>
                </div>
                <div className="ml-4">
                    <button
                        onClick={handleAdd}
                        className="bg-blue-600 text-white px-3 py-1 rounded-md"
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;