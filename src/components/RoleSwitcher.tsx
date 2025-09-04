import { useState, useEffect } from "react";

export default function RoleSwitcher() {
  const [role, setRole] = useState(localStorage.getItem("role") || "guest");

  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <p>Current role: <b>{role}</b></p>
      <button onClick={() => setRole("user")}>Set User</button>
      <button onClick={() => setRole("admin")} style={{ marginLeft: "10px" }}>
        Set Admin
      </button>
      <button onClick={() => setRole("guest")} style={{ marginLeft: "10px" }}>
        Set Guest
      </button>
    </div>
  );
}
