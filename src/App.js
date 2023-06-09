import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/shared/Layout";
import { Dashboard } from "./components/Dashboard";
import { Education } from "./components/Education";
import { Resources } from "./components/Resources";
import { Settings } from "./components/Settings";
import { LogOut } from "./components/LogOut";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/education" element={<Education />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<LogOut />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
