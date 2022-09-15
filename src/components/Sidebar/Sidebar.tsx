import "./Sidebar.scss";
import CV from "../../../public/json/cv.json";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { SidebarButtonProps, SidebarCardProps } from "../../types/Sidebar";

function Sidebar() {
  return (
    <aside className="sidebar">
      <section className="cards">
        {CV.experience.map((item) => (
          <SidebarCard key={item.name} {...{ ...item }} />
        ))}
      </section>
      <section className="cards">
        {CV.education.map((item) => (
          <SidebarCard key={item.name} {...{ ...item }} />
        ))}
      </section>
      <section className="cards">
        {CV.projects.map((item) => (
          <SidebarCard key={item.name} {...{ ...item }} />
        ))}
      </section>
    </aside>
  );
}

function SidebarCard(props: SidebarCardProps) {
  const { name, description, range, site } = props;

  return (
    <div className="box">
      <h3 className="box__range">{range}</h3>
      <h3 className="box__title">{name}</h3>
      <p>{description}</p>
      {typeof site !== "undefined" && <SidebarButton site={site} />}
    </div>
  );
}

function SidebarButton(props: SidebarButtonProps) {
  const { site } = props;

  return (
    <a href={site.link} target="_blank" rel="noreferrer" className="link">
      <div className="link__wrapper">
        {site.name}
        <ExternalLinkIcon className="link__wrapper__icon" />
      </div>
    </a>
  );
}

export default Sidebar;
