import { Link } from "react-router-dom";

const Editor = () => {
  return (
    <div className="App">
      <section>
        <h1>Editors Page</h1>
        <br />
        <p>You must have been assigned an Editor role.</p>
        <div className="flexGrow">
          <Link to="/">Home</Link>
        </div>
      </section>
    </div>
  );
};

export default Editor;
