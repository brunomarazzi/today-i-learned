import "./style.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>

      <CategoryFilter />
    </>
  );
}

function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

export default App;
