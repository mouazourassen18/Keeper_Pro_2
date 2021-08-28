import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "/src/notes.js";

function createCard(pro) {
  return <Note key={pro.id} title={pro.title} content={pro.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createCard)}
      <Footer />
    </div>
  );
}

export default App;
