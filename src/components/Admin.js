import { Link } from 'react-router-dom';
import Users from './Users';

const Admin = () => {
  return (
    <div className="App">
      <section className="login-section">
        <h1>Admins Page</h1>
        <br />
        <Users />
        <br />
        <p>You must have been assigned an Admin role.</p>
        <div className="flexGrow">
          <Link to="/links">Links</Link>
        </div>
      </section>
    </div>
  );
};

export default Admin;
