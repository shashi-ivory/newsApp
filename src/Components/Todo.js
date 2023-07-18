import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
function Todo() {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodo(response?.data);
        // console.log(response.data, "respone");
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        // console.log("error", e);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="spinner">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  if (error) {
    return <div>Error{error}</div>;
  }
  const handleStatusToggle = (id) => {
    setTodo((prevTodo) => {
      prevTodo.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    });
  };

  return (
    <div>
      <table className="table table-hover table-bordered table-sm table-responsive">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">userId</th>
            <th scope="col">title</th>
            <th scope="col">completed</th>
          </tr>
        </thead>

        <tbody>
          {todo &&
            todo.map((item) => (
              <tr scope="row" key={item.id}>
                <th className="table-primary">{item.id}</th>
                <th className="table-warning">{item.userId}</th>
                <th className="table-danger">{item.title}</th>
                <th
                  className="table-success"
                  onClick={() => handleStatusToggle(item.id)}
                  style={{ corsor: "pointer" }}
                >
                  {item.completed ? "Yes" : "No"}
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Todo;
