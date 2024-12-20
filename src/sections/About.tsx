"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

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
    emoji: "📋",
    left: "5%",
    top: "5%",
  },
  {
    title: "Curiosidade",
    emoji: "🔍",
    left: "50%",
    top: "5%",
  },
  {
    title: "Autonomia",
    emoji: "🚀",
    left: "35%",
    top: "40%",
  },
  {
    title: "Comunicação",
    emoji: "🗣️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Resiliência",
    emoji: "💪",
    left: "70%",
    top: "45%",
  },
  {
    title: "Criatividade",
    emoji: "🎨",
    left: "5%",
    top: "65%",
  },
  {
    title: "Colaboração",
    emoji: "🤝",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Sobre mim"
          title="Desenvolvedora Full Stack"
          description="Estou sempre em busca de aprender e evoluir, crescendo de forma profissional e pessoal."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="Tecnologias"
              description="Descubra as tecnologias e ferramentas que utilizo nos meus projetos."
              className=""
            />
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="animate-move-right [animation-duration:15s]"
            />
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Soft Skills"
              description="Conheça minhas habilidades interpessoais."
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {softSkills.map((soft) => (
                <motion.div
                  key={soft.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: soft.left,
                    top: soft.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{soft.title}</span>
                  <span>{soft.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
};
