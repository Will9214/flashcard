import './App.css';
import Flashcards from './components/Flashcards';
import AddFlashcards from './components/ManageFlashcards/AddFlashcards';
import Footer from './components/Footer';
import Header from './components/Header';
import Route from './components/Route';
import ManageFlashcards from './components/ManageFlashcards/ManageFlashcards';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Flashcards />
      </Route>
      <Route path="/manage">
        <ManageFlashcards />
      </Route>
      <Route path="/manage/add">
        <AddFlashcards />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
