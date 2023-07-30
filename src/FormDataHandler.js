import { useState } from "react";
import DataTable from "./DataTable";
import EditForm from "./EditForm";
import MyForm from "./MyForm";

const FormDataHandler = () => {
  const [data, setData] = useState([
    { item: "Cake", cost: 1200 },
    { item: "Bike", cost: 1_54_000 },
    { item: "Knife", cost: 20 }
  ]);
  const [index, setIndex] = useState(-1);

  const deleteHandle = (index) => {
    console.info("Delete item at :", index);
    setData((prevData) => {
      const temp = [...prevData];
      temp.splice(index, 1);
      return temp;
    });
  };

  const handleAction = (data) => {
    switch (data.action) {
      case "Push":
        setData((prevData) => [...prevData, data]);
        break;
      case "Shift":
        setData((prevData) => [data, ...prevData]);
        break;
      case "Add At":
        setData((prevData) => {
          const temp = [...prevData];
          temp.splice(data.index, 0, data);
          return temp;
        });
        console.info("Add At clicked");
        break;
      case "Edit":
        setData((prevData) => {
          const temp = [...prevData];
          temp[index] = data;
          return temp;
        });

        setIndex(-1);
        return "new";
      default:
        break;
    }
  };

  const handleEdit = (index) => {
    setIndex(index);
  };

  return (
    <div className="container">
      {index < 0 ? (
        <MyForm onAction={handleAction} />
      ) : (
        <EditForm onSave={handleAction} index={index} data={data[index]} />
      )}

      <DataTable data={data} hideDelete={index < 0} onDelete={deleteHandle} onEdit={handleEdit} />
    </div>
  );
};

export default FormDataHandler;
