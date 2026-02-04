import './App.css'
import ProfileCard  from './components/ProfileCard';
import Card from './components/Card';
import Contador from './components/Contador';
import Relogio from './components/Relogio';
import ToggleContador from './components/Ex_Contador';
const styles  = {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center" 
}
function App() {
  return (
    <div style={styles}>
      <ProfileCard name='Nelson' email = "nelson@gmail.com" profilePic='/profilepic.jpeg' active={true}/>
      <Card title="titulo" description='descrição' buttonName='boton'></Card>
      <Contador></Contador>
      <Relogio></Relogio>
      <ToggleContador></ToggleContador>
    </div>

  );  

}

export default App
