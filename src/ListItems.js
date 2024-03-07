import { useState } from "react";

const ListItems = ({ item, deleteItem, id, addTOList, updateItem }) => {
  const [editable, setEditable] = useState(false);
  const [editValue, setEditValue] = useState(item);

  return (
    <div className="list-item">
      <li
        className="list-item-text"
        onDoubleClick={() => setEditable(true)}
        key={id}
      >
        {!editable ? (
          item
        ) : (
          <input
            type="text"
            value={editValue}
            onChange={(e) => {
              setEditValue(e.target.value);
            }}
            onBlur={() => {
              setEditable(false);
              updateItem(id, editValue);
            }}
          />
        )}
      </li>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
export default ListItems;
