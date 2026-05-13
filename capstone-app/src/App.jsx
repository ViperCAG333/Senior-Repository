import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "No phone before bed", done: false },
    { id: 2, text: "Sleep at consistent time", done: false },
    { id: 3, text: "Avoid caffeine late", done: false },
    { id: 4, text: "Dim lights at night", done: false },
    { id: 5, text: "Aim for 8 hours sleep", done: false }
  ]);

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>

      {/* NAVBAR */}
      <div style={{
        padding: "12px",
        backgroundColor: "#222",
        color: "white"
      }}>
        Sleep Capstone App
      </div>

      {/* MAIN */}
      <div style={{ padding: "20px" }}>

        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ margin: 0, fontSize: "32px" }}>
            Sleep Habit Tracker
          </h1>

          <p style={{
            marginTop: "12px",
            marginBottom: 0,
            color: "#ffffff",
            fontSize: "18px"
          }}>
            Click a habit to mark it complete
          </p>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => toggleTask(task.id)}
              style={{
                cursor: "pointer",
                padding: "10px",
                margin: "8px 0",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: task.done ? "#dff7e3" : "#ffffff",
                textDecoration: task.done ? "line-through" : "none",
                color: "#111"
              }}
            >
              {task.text}
            </li>
          ))}
        </ul>

      </div>

      {/* FOOTER */}
      <div style={{
        padding: "12px",
        backgroundColor: "#222",
        color: "white"
      }}>
        Built for Capstone Project - Teen Sleep Awareness
      </div>

    </div>
  );
}