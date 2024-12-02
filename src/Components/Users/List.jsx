import React from "react";

const List = () => {
  const products = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
  ];

  return (
    <div className="relative overflow-x-auto mx-auto rounded-lg shadow-md w-[90vw] backdrop-blur-lg bg-white/30 border border-white/20">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-100 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">Product name</th>
            <th scope="col" className="px-6 py-3">Color</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3"><span className="sr-only">Edit</span></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="bg-white border-b dark:border-gray-400 hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-black">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{product.color}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{product.category}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap text-black text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
