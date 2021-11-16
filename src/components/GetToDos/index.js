import React from "react";
import { useState } from "react";
const BASE_URL = "http://localhost:4000";

const GetToDos = () => {
  const [item, setItem] = useState([]);
  const getToDo = async () => {
    const list = axios.get(`${BASE_URL}/todos`);
    console.log(item);
    setItem(list);
  };
  function createItem() {
    const task = prompt("enter new task");
    axios.post(`${BASE_URL}/createTodo`),
      {
        item: task,
      }
        .then(function (res) {
          console.log("created");
        })
        .catch(function (err) {
          console.log(err);
        });
  }
  function updateItem(index) {
    const task = prompt("enter new task");
    axios.post(`${BASE_URL}/updateItem`),
      {
        id: index,
        item: task,
      }
        .then(function (res) {
          console.log("updated");
        })
        .catch(function (err) {
          console.log(err);
        });
  }
  function deleteItem(index) {
    const task = prompt("enter new task");
    axios.post(`${BASE_URL}/deleteItem`),
      {
        id: index,
      }
        .then(function (res) {
          console.log("deleted");
        })
        .catch(function (err) {
          console.log(err);
        });
  }
  return (
    <div>
      <ul>
        {item.map((item, index) => (
          <>
            <li key={index}>{item}</li>
            <button
              onClick={() => {
                updateItem({ index });
              }}
            >
              update
            </button>
            <button
              onClick={() => {
                deleteItem({ index });
              }}
            >
              delete
            </button>
          </>
        ))}
        <button onClick={createItem}></button>
      </ul>
    </div>
  );
};

export default GetToDos;
