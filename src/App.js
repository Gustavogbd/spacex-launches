import Upcoming from './components/Upcoming'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Upcoming.css'
import './App.css'
import Latest from './components/Latest';
import { Container } from 'react-bootstrap';
function App() {


  return (
    <Container fluid>
      <Upcoming />
      <Latest />
    </Container>
  );
}

export default App;