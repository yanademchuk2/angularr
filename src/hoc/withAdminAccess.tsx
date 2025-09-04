import React from "react";

const withAdminAccess = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      return <h2 style={{ color: "red" }}>Доступ заборонено</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAdminAccess;
