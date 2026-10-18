/* ============================================================
   JEV ROUTER — how typed questions are sorted into sections.
   Jev only reads `instructions` and the descriptions below (not
   the keys), so each description must say everything it means.
   ============================================================ */
export const ROUTER = {
  model: "~typesafe/jev-latest",
  // Answers below this confidence get the vague reply.
  threshold: 0.6,
  // Longest question the chat box accepts.
  maxChars: 300,
  // Give up on Jev after this long and use keyword matching instead.
  timeoutMs: 3000,
  instructions:
    "A visitor typed this message into the chat on Shrinivasan (Shri) Thevar's portfolio website. Shri is an AI engineer who builds autonomous agent systems, LLM evaluation and RAG pipelines. Which section of his portfolio answers the message?",
  criteria: {
    about:
      "Who Shri is: an introduction, his background, a short bio or summary of him, what he does, or where he is based",
    projects:
      "Things Shri has built or worked on: his projects, apps, websites, ML models, dashboards, code samples, GitHub repos, or a specific project such as the drone security analyst agent, GroundTruth AI (Professor X) research assistant, AutoML pipeline selector, Twitter mental-health analysis, COVID-19 dashboard or MNIST neural network",
    skills:
      "Shri's technical skills: programming languages, libraries, frameworks, tools and technologies he knows, his tech stack, or how good he is at them",
    experience:
      "Shri's jobs and work experience: where he works or has worked, internships, freelance work, roles and responsibilities, or positions held in college teams and committees. This includes his AI engineer job at Equations Work (OpenWolfPack, FangCheck) and his Analyttica Datalabs internship",
    education:
      "Shri's education: his degree, college or university, school, graduation year, CGPA, marks, percentages or subjects studied",
    certificates:
      "Certifications Shri has earned: certificates, online courses, badges or virtual internship programmes completed",
    socials:
      "Shri's online profiles: GitHub, LinkedIn, Instagram, social media, or where to follow or find him online",
    contact:
      "How to get in touch with Shri: his email address, phone, location, how to hire him, message him or reach out",
    hello:
      "A basic greeting with no question, such as hi, hello, hey or good morning",
    thanks:
      "Thanking Shri or saying the answer was helpful, such as thanks, thank you or great",
    vague:
      "Unclear, too short to understand, off-topic, or unrelated to Shri and his portfolio, such as general knowledge, coding help, jokes, the weather, or random words",
  },
};

export const VAGUE_REPLY = "The query is a bit vague and I am not a LLM.";
