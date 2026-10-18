import { P } from "@/data/portfolio";
import AboutPanel from "./panels/AboutPanel";
import ProjectsPanel from "./panels/ProjectsPanel";
import SkillsPanel from "./panels/SkillsPanel";
import ExperiencePanel from "./panels/ExperiencePanel";
import EducationPanel from "./panels/EducationPanel";
import CertificatesPanel from "./panels/CertificatesPanel";
import SocialsPanel from "./panels/SocialsPanel";
import ContactPanel from "./panels/ContactPanel";
import { allTags } from "./tags";
import { VAGUE_REPLY } from "@/data/router";

/* ---------- sections ---------- */
export const SECTIONS = [
  { key: "about", label: "About me", icon: "user", prompt: "Tell me about yourself" },
  { key: "projects", label: "Projects", icon: "folder", prompt: "What projects have you done?" },
  { key: "skills", label: "Skills", icon: "bolt", prompt: "What are your skills?" },
  { key: "experience", label: "Experience", icon: "brief", prompt: "What's your work experience?" },
  { key: "education", label: "Education", icon: "cap", prompt: "Where did you study?" },
  { key: "certificates", label: "Certificates", icon: "award", prompt: "Which certificates do you have?" },
  { key: "socials", label: "Socials", icon: "link", prompt: "Where can I find you online?" },
  { key: "contact", label: "Contact", icon: "mail", prompt: "How can I contact you?" },
];

/* ---------- intent detection ---------- */
export function detect(text) {
  const t = text.toLowerCase();
  // specific project by name
  const proj = P.projects.find((p) => p.title.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 4 && !["analysis", "prediction", "website", "dataset", "network", "neural", "dashboard"].includes(w)).some((w) => t.includes(w)) || t.includes(p.id + " "));
  const tag = allTags.find((g) => new RegExp("\\b" + g.toLowerCase().replace(/[.+]/g, "\\$&") + "\\b").test(t));
  if (proj) return { intent: "project", project: proj.id };
  if (/\b(project|projects|built|build|portfolio|made|work samples?|github repos?)\b/.test(t)) return { intent: "projects", tag };
  if (tag && /\b(use|used|with|using|know|experience in)\b/.test(t)) return { intent: "projects", tag };
  if (/\b(skill|skills|stack|tech|technolog|tools?|languages?|good at|proficien)\b/.test(t)) return { intent: "skills" };
  if (/\b(experience|intern|internship|job|jobs|worked|employ|career|freelance)\b/.test(t)) return { intent: "experience" };
  if (/\b(educat|study|studied|college|university|degree|school|cgpa|gpa)\b/.test(t)) return { intent: "education" };
  if (/\b(cert|certificate|certificates|certification|course|courses)\b/.test(t)) return { intent: "certificates" };
  if (/\b(social|socials|github|linkedin|kaggle|online|twitter|profiles?)\b/.test(t)) return { intent: "socials" };
  if (/\b(contact|email|e-mail|mail|reach|hire|phone|call|talk)\b/.test(t)) return { intent: "contact" };
  if (/\b(who are you|about|yourself|introduce|summary|bio)\b/.test(t)) return { intent: "about" };
  if (/^(hi|hey|hello|yo|hola|namaste|sup)\b/.test(t)) return { intent: "hello" };
  if (/\b(thank|thanks|thx)\b/.test(t)) return { intent: "thanks" };
  if (tag) return { intent: "projects", tag };
  return { intent: "unknown" };
}

/* ---------- replies ----------
   widget(ctx) receives { ask, toast } from the chat engine. */
export const R = {
  hello: () => ({ text: "Hi! I'm Shri's portfolio assistant. I can walk you through projects, skills, experience and more.", follow: ["What projects have you done?", "What are your skills?", "Tell me about yourself"] }),
  thanks: () => ({ text: "Happy to help. Anything else you'd like to see?", follow: ["How can I contact you?", "Where can I find you online?"] }),
  vague: () => ({ text: VAGUE_REPLY }),
  unknown: () => ({ text: "I don't have an answer for that one yet. I can tell you about these instead:", follow: SECTIONS.map((s) => s.prompt) }),
  about: () => ({
    text: `I'm **${P.name}**, ${/^[aeiou]/i.test(P.role) ? "an" : "a"} ${P.role} based in ${P.location}.`,
    widget: () => <AboutPanel />,
    follow: ["What projects have you done?", "What are your skills?"],
  }),
  projects: (o) => ({
    text: o.tag ? `Here are my projects that use **${o.tag}**. Tap a card for details, or switch the filter.` : `Here are **${P.projects.length} projects** I've worked on. Filter by technology or tap a card to open it.`,
    widget: (ctx) => <ProjectsPanel tag={o.tag} openId={null} {...ctx} />,
    follow: ["What are your skills?", "Tell me about the GroundTruth project", "How can I contact you?"],
  }),
  project: (o) => {
    const p = P.projects.find((x) => x.id === o.project);
    return { text: `Here's **${p.title}**.`, widget: (ctx) => <ProjectsPanel tag={null} openId={p.id} {...ctx} />, follow: ["Show all projects", "Show Python projects"] };
  },
  skills: () => ({ text: "Here's my toolkit, grouped by area. Tap any skill to see the projects where I used it.", widget: (ctx) => <SkillsPanel {...ctx} />, follow: ["What projects have you done?", "What's your work experience?"] }),
  experience: () => ({ text: "Here's my experience so far.", widget: () => <ExperiencePanel />, follow: ["Where did you study?", "What projects have you done?"] }),
  education: () => ({ text: "My education:", widget: () => <EducationPanel />, follow: ["Which certificates do you have?", "What's your work experience?"] }),
  certificates: () => ({ text: "Certificates I've earned:", widget: () => <CertificatesPanel />, follow: ["What are your skills?", "Where did you study?"] }),
  socials: () => ({ text: "You can find me here:", widget: () => <SocialsPanel />, follow: ["How can I contact you?", "What projects have you done?"] }),
  contact: () => ({ text: "The fastest way to reach me is email. I usually reply within a day.", widget: (ctx) => <ContactPanel {...ctx} />, follow: ["Where can I find you online?", "Tell me about yourself"] }),
};
