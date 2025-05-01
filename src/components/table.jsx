const Table = () => {
  const data = [
    { name: "John Doe", age: 28, occupation: "Developer" },
    { name: "Jane Smith", age: 35, occupation: "Designer" },
    { name: "Mark Johnson", age: 40, occupation: "Manager" },
  ];

  return (
    <div className="overflow-x-auto p-6">
      <table className="min-w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg text-white shadow-lg">
        <thead>
          <tr>
            <th className="px-6 py-4 text-left text-xl font-semibold">Name</th>
            <th className="px-6 py-4 text-left text-xl font-semibold">Age</th>
            <th className="px-6 py-4 text-left text-xl font-semibold">
              Occupation
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-indigo-600 transition-all duration-200"
            >
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.age}</td>
              <td className="px-6 py-4">{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
