import "./Sidebar.scss";
import CV from "../../content/api/cv.json";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { SidebarButtonProps, SidebarCardProps } from "../../types/Sidebar";
import { Button, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import COLORS from "../../style/COLORS";

function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="cards">
        <Heading as="h2" color={COLORS.PURPLE}>
          Experience
        </Heading>
        {CV.experience.map((item) => (
          <SidebarCard key={item.name} {...{ ...item }} />
        ))}
      </section>
      <section className="cards">
        <Heading as="h2" color={COLORS.PURPLE}>
          Education
        </Heading>
        {CV.education.map((item) => (
          <SidebarCard key={item.name} {...{ ...item }} />
        ))}
      </section>
      <section className="cards">
        <Heading as="h2" color={COLORS.PURPLE}>
          Projects
        </Heading>
        {CV.projects.map((item) => (
          <SidebarCard key={item.name} {...{ ...item }} />
        ))}
      </section>
    </aside>
  );
}

function SidebarCard(props: SidebarCardProps) {
  const { name, description, range, site } = props;

  const backgroundColor = useColorModeValue(COLORS.LIGHT_BOX, COLORS.DARK_BOX);

  return (
    <div className="box" style={{ backgroundColor }}>
      <h3 className="box__range">{range}</h3>
      <Heading>{name}</Heading>
      <p>{description}</p>
      {site && <SidebarButton site={site} />}
    </div>
  );
}

function SidebarButton(props: SidebarButtonProps) {
  const { site } = props;

  return (
    <Link href={site.link} isExternal>
      <Button
        variant="solid"
        aria-label={site.name}
        rightIcon={<ExternalLinkIcon />}
      >
        {site.name}
      </Button>
    </Link>
  );
}

export default Sidebar;
