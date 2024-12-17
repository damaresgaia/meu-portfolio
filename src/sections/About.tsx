import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const softSkills = [
  {
    title: "Organização",
    emoji: "📋"
  },
  {
    title: "Curiosidade",
    emoji: "🔍"
  },
  {
    title: "Comunicação",
    emoji: "🗣️"
  },
  {
    title: "Autonomia",
    emoji: "🚀"
  },
  {
    title: "Resiliência",
    emoji: "💪"
  },
  {
    title: "Empatia",
    emoji: "❤️"
  },
  {
    title: "Criatividade",
    emoji: "🎨"
  },
  {
    title: "Colaboração",
    emoji: "🤝"
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Desenvolvedora Full Stack"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20">
          <Card>
            <div>
              <StarIcon />
              <h3>My Soft Skills</h3>
              <p>
                Explore my interests and hobbies beyond the digital realm.
              </p>
            </div>
            <div>
              {softSkills.map((soft) => (
                <div key={soft.title}>
                  <span>{soft.title}</span>
                  <span>{soft.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>
                Explore the technologies and tools I use to craft exceptional digital experiences.
              </p>
            </div>
            <div>
              {toolboxItems.map((item) => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
};
