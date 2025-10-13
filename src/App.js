import "./index.css";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Travel Away💼</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>Form elements for your 😍 trip</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">List content</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 You have x items on your list and you already packed x (x%)</em>
    </footer>
  );
}

export default App;
