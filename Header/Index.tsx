import logo from '../../assets/IMG/gol-3d.svg'

function Header() {
    return (
        <header>
        <div className="Fut-Invernada-Logo">
            <img src={logo} width="320" height="205" />
                <h1>Vila Invernada!</h1>
                <h1>Onde o Show dos craques do mundo da bola é garantido ... ou não.</h1>
                <p>Criado por
                    <a href="https://www.instagram.com/arthur_nocetti/">@arthur_nocetti</a>
                </p>
        </div>      
    </header>
    )
  }
  
  export default Header