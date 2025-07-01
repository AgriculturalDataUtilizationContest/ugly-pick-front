import React from "react";
import Router from "./Router";
import ThemeProvider from "./theme/ThemeProvider";
import Maintenance from "./pages/Maintenance";

function App() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  const isMaintenanceTime = hours === 15 && minutes >= 0 && minutes < 40;

  if (isMaintenanceTime) {
    return <Maintenance />;
  }

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
