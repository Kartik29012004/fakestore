
const ProductCard = ({ product }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">${product.price}</span>
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
        <div className="mt-2">
          <span className="text-yellow-500">★</span>
          <span className="ml-1">{product.rating?.rate ?? 0}</span>
          <span className="text-gray-500 ml-1">({product.rating?.count ?? 0} reviews)</span>
        </div>
      </div>
    );
  };
  
  export default ProductCard;