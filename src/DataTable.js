const DataTable = ({ data, onDelete, onEdit, hideDelete }) => {
  const handleDelete = (event, index) => {
    onDelete(index);
  };

  const handleEdit = (event, index) => {
    onEdit(index);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Item</th>
          <th>Cost</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{e.item ?? "undefined"}</td>
            <td>₹{e.cost ?? "undefined"}</td>
            <td>
              {
                hideDelete && <button
                  className="delete-btn"
                  onClick={(event) => handleDelete(event, index)}
                >
                  Delete
                </button>
              }

              <button
                className="edit-btn"
                onClick={(event) => handleEdit(event, index)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
