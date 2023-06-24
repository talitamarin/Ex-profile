import Profile from "./Profile"
import avatarPhoto from "./assets/avatarPhoto.jpeg"

export default function App() {
  return (
    <div className="app">
      <Profile 
      avatar={avatarPhoto}
      name="Talita Silva Marin"
      bio="Sou uma estudante de programação apaixonada por tecnologia, buscando constantemente aprender e aprimorar minhas habilidades. Minha curiosidade e determinação me impulsionam rumo a se tornar uma desenvolvedora talentosa e inovadora."
      phone="(81) 9 9990-3645"
      mail="talita-smarin@outlook.com" 
      githubUrl="https://github.com/talitamarin"
      linkedinUrl="https://www.linkedin.com/in/talita-marin-26b1a9161/"
      />
      </div>
  )
}

