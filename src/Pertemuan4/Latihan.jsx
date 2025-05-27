import latihanData from "./utkLatihan.json";

export default function Latihan() {
    return (
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latihanData.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                        <p className="text-lg text-blue-600 font-bold">Price: ${item.price.toFixed(2)}</p>
                    </div>

                    <p className="text-gray-600 mt-2">{item.description}</p>
                    <p className="text-sm text-gray-500">Category: {item.category}</p>
                    <p className="text-sm text-green-700">Discount: {item.discountPercentage}%</p>
                    <p className="text-sm text-gray-500">Rating: {item.rating} ⭐</p>
                    <p className="text-sm text-gray-500">Stock: {item.stock}</p>
                    <p className="text-sm text-gray-500">Brand: {item.brand}</p>
                    <p className="text-sm text-gray-500">Dimensions: {item.dimensions.width}mm (W) x {item.dimensions.height}mm (H) x {item.dimensions.depth}mm (D)</p>

                    <div className="mt-4">
                        {item.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full mr-2 mb-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
