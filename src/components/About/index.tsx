import "./About.scss";
import CV from "../../content/Matteo_Altamore_CV_eng.pdf";
import SOCIAL from "../../content/api/social.json";
import ABOUT from "../../content/api/about.json";
import { ExternalLinkIcon, DownloadIcon } from "@chakra-ui/icons";
import { SocialButtonProps } from "../../types/About";
import DarkLightThemeButton from "../DarkLightThemeButton";

function About() {
  return (
    <section className="about">
      <h1>{ABOUT.title}</h1>

      <h2 className="about__subtitle">{ABOUT.subtitle}</h2>
      <p className="about__body">{ABOUT.body}</p>

      <div className="social">
        {SOCIAL.map((item) => (
          <SocialButton key={item.label} {...item} />
        ))}
      </div>

      <a href={CV} download className="resume">
        {ABOUT.cvText}
        <DownloadIcon />
      </a>

      <DarkLightThemeButton />
    </section>
  );
}

function SocialButton(props: SocialButtonProps) {
  const { label, href } = props;
  return (
    <a href={href} target="_blank" rel="noreferrer" className="social__link">
      {label}
      <ExternalLinkIcon className="social__link__icon" />
    </a>
  );
}

export default About;
