import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="App">
      <section className="clear-section">
        <h1>404 - Page Not Found</h1>
        <br />
        <p>We cannot find the requested page.</p>
        <div className="flexGrow">
          <button onClick={goBack}>Go Back</button>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
