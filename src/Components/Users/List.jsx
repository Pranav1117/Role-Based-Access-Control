import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser, addUser } from '../../RTK/slices/UserSlice';

const List = () => {
  const users = useSelector((state) => state.users.users);
  console.log(users);
  const dispatch = useDispatch()


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
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Permissions
            </th>
            <th scope="col" className="px-2 py-3"></th>
            <th scope="col" className="px-2 py-3 text-right">
              Actions
            </th>
            <th scope="col" className="px-2 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:border-gray-400 hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap text-black">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-black">
                {user.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-black">
                {user.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-black">
                {user.price}
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-black text-right">
                <button className="font-medium text-blue-600 hover:underline">
                  Edit
                </button>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-black text-right">
                <button className="font-medium text-blue-600 hover:underline">
                  Add
                </button>
              </td>
              <td className="px-2 py-4 whitespace-nowrap text-black text-right">
                <button className="font-medium text-blue-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
