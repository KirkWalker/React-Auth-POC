import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import LinkPage from './components/LinkPage';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Lounge from './components/Lounge';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
import Unauthorized from './components/Unauthorized';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />} />
      {/* public routes */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="links" element={<LinkPage />} />
      <Route path="unauthorized" element={<Unauthorized />} />

      {/* we want to protect these routes */}
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route
          element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor]} />}
        >
          <Route path="editor" element={<Editor />} />
          <Route path="lounge" element={<Lounge />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
