import {Link} from "react-router-dom"
import {useLanguage} from "../context/LanguageContext";

const texts = {
  es: {
		navHome: "Inicio",
		navProfile: "Perfil",
    title: "Página de Inicio",
    paragraph: "Bienvenido a la aplicación.",
    button: "Cambiar idioma",
  },
  en: {
		navHome: "Home",
		navProfile: "Profile",
    title: "Home Page",
    paragraph: "Welcome to the application",
    button: "Switch language",
  },
};

const Home = () => {
    const {language, toggleLanguage} = useLanguage();

    return (
        <main>
          <nav>
              <ul>
                  <li><Link to = "/">{texts[language].navHome}</Link></li>
                  <li><Link to = "/profile">{texts[language].navProfile}</Link></li>
              </ul>
          </nav>
          
					<h2>{texts[language].title}</h2>

          <p>{texts[language].paragraph}</p>
              
          <button onClick={toggleLanguage}>{texts[language].button}</button>
        </main>
    )
}

export default Home