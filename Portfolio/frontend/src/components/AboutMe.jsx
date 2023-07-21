import Avatar from "../assets/logos/Avatar.svg";

function AboutMe() {
  return (
    <div className="flex items-center h-screen w-screen">
      <div className="flex flex-col lg:flex-row justify-center gap-12">
        <div className="flex flex-col justify-items-center ml-10 lg:ml-32">
          <h2 className="lg:mb-20 lg:mt-10 text-3xl lg:text-5xl">
            Qui suis je
          </h2>
          <p className="m-8 text-sm lg:text-lg">
            Passionné de développement web et mobile, en formation à la Wild
            Code School, j'explore les nouvelles technologies pour créer des
            expériences utilisateur exceptionnelles. <br /> <br />
            Mon portfolio illustre mon évolution et met en valeur ma créativité
            et ma capacité à résoudre efficacement les problèmes. <br /> <br />
            Chaque projet repousse mes limites et développe mes compétences en
            communication. <br /> <br />
            Contactez-moi pour toute question ou collaboration.
          </p>
        </div>
        <div className="h-auto w-full flex justify-center items-center">
          <img
            className="mr-20 max-w-full h-auto max-h-96"
            src={Avatar}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
