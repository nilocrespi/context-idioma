import {Link} from "react-router-dom"

const texts = {
  es: {
		navHome: "Inicio",
		navProfile: "Perfil",
    title: "Perfil",
    paragraph: "Bienvenido a tu perfil"
  },
  en: {
		navHome: "Home",
		navProfile: "Profile",
    title: "Profile",
    paragraph: "Welcome to your profile"
  }
};

const Home = () => {
    return (
        <main>
          <nav>
              <ul>
                  <li><Link to = "/">{texts.es.navHome}</Link></li>
                  <li><Link to = "/profile">{texts.es.navProfile}</Link></li>
              </ul>
          </nav>
          
					<h2>{texts.es.title}</h2>

          <p>{texts.es.paragraph}</p>
              
          <button>{texts.es.button}</button>
        </main>
    )
}

export default Home