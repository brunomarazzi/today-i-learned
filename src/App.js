import "./style.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-open">Share a fact</button>
      </header>
      <NewFactForm />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return <form className="fact-form">Fact form</form>;
}

function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

function FactList() {
  return <section>Facts list</section>;
}

export default App;
