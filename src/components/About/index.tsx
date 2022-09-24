import "./About.scss";
import CV from "../../content/Matteo_Altamore_CV_eng.pdf";
import SOCIAL from "../../content/api/social.json";
import ABOUT from "../../content/api/about.json";
import { ExternalLinkIcon, DownloadIcon } from "@chakra-ui/icons";
import { SocialButtonProps } from "../../types/About";
import DarkLightThemeButton from "../DarkLightThemeButton";
import { Button, Heading, Link, Text } from "@chakra-ui/react";

const COLOR = {
  PURPLE: "rgb(148, 0, 255)",
};

function About() {
  return (
    <section className="about">
      <div className="about__heading-wrapper">
        <Heading fontSize={75} lineHeight={1} as="h1">
          {ABOUT.title}
        </Heading>

        <Heading fontSize={40} lineHeight={1} as="h2" color={COLOR.PURPLE}>
          {ABOUT.subtitle}
        </Heading>

        <Text fontSize={19} lineHeight={6}>
          {ABOUT.body}
        </Text>
      </div>

      <div className="about__action-wrapper">
        <div className="social">
          {SOCIAL.map((item) => (
            <SocialButton key={item.label} {...item} />
          ))}
        </div>

        <Button
          variant="solid"
          aria-label="Download CV"
          rightIcon={<DownloadIcon />}
        >
          <a href={CV} download className="resume">
            {ABOUT.cvText}
          </a>
        </Button>

        <DarkLightThemeButton />
      </div>
    </section>
  );
}

function SocialButton(props: SocialButtonProps) {
  const { label, href } = props;

  return (
    <Link href={href} isExternal>
      <Button
        variant="solid"
        aria-label={label}
        rightIcon={<ExternalLinkIcon />}
      >
        {label}
      </Button>
    </Link>
  );
}

export default About;
