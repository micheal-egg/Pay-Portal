import './App.css'
import AppleLogo from './assets/Apple Logo White.png'
import MenuIcon from './assets/Menu Icon.svg'

function App() {
  return (
    <>
      <header className="nav">
        <img src={MenuIcon} alt="Menu Icon" className="menu-icon" />
        <div className="navleft">          
          <h1>Apple</h1>
          <h2>Employee Portal</h2>
        </div>
        <div className="navright">
          <h1><span className="user-name">Micheal Egboh</span></h1>
          <h2><span className="user-role">Software Engineer</span></h2>
        </div>
      </header>
      <main>
        <img src={AppleLogo} alt="Apple Logo" className="apple-logo" />
        <h1>Welcome, Micheal Egboh</h1>
        <p>This is a simple portal for employees to access their information.</p>
      </main>
    </>
  );
}
export default App
