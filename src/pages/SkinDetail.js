import { useParams } from "react-router-dom";
import { skins } from "../skins";
export default function SkinDetail() {
    const { id } = useParams();
    const skin = skins.find((s) => s.id.toString() === id);
    if (!skin) return <div className="p-10 text-white">Skin not found</div>;

    return (
        <div className="p-10 text-white max-w-xl mx-auto">
            <h1 className="text-4xl font-bold text-green-300 mb-4">{skin.name}</h1>
            <img src={skin.image} alt={skin.name} className="w-full rounded mb-6" />
            <p className="text-green-400 text-xl mb-2">{skin.price}</p>
            <p className="text-gray-400 mb-6">{skin.description}</p>
            <button className="bg-green-600 text-black hover:bg-green-500">Purchase</button>
        </div>
    );
}