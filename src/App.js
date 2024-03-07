import "./styles.css";
import Input from "./Input";
import { useState } from "react";
import ListItems from "./ListItems";

export default function App() {
  const [list, setList] = useState([]);
  const addTOList = (input) => {
    setList([...list, input]);
  };
  function deleteItem(key) {
    list.splice(key, 1);
    setList([...list]);
  }
  function updateItem(key, value) {
    list[key] = value;
    setList([...list]);
  }
  return (
    <div className="App">
      <div className="main-container">
        <div>
          <Input addTOList={addTOList} />
        </div>
        <div>
          {list.length ? (
            <div>
              <h1>Todo List</h1>
              <hr />
              <ul>
                {list.map((item, key) => {
                  return (
                    <ListItems
                      key={key}
                      item={item}
                      deleteItem={deleteItem}
                      id={key}
                      addTOList={addTOList}
                      updateItem={updateItem}
                    />
                  );
                })}
              </ul>
            </div>
          ) : (
            <div>
              <h1>Todo List</h1>
              <hr />
              <h2>No Data</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
