import {Link} from "react-router-dom"
import {useLanguage} from "../context/LanguageContext";

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

const Profile = () => {
  const {language} = useLanguage();

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

    </main>
  )
}

export default Profile