import "./About.scss";
import CV from "../../../public/content/Matteo_Altamore_CV_eng.pdf";
import SOCIAL from "../../../public/json/social.json";
import ABOUT from "../../../public/json/about.json";
import { ExternalLinkIcon, DownloadIcon } from "@chakra-ui/icons";
import { SocialButtonProps } from "../../types/About";

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
