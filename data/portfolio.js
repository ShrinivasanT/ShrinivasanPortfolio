/* ============================================================
   PORTFOLIO DATA — edit this object to update the whole site.
   Sections with sample:true show a "sample data" badge.
   ============================================================ */
export const P = {
  name: "Shrinivasan Thevar",
  short: "Shri",
  role: "AI Engineer",
  location: "Pune, India",
  bio: "I build autonomous agent systems: LLM-as-a-Judge verification, closed-loop evals, agentic RAG and LangGraph multi-agent pipelines. I'm currently engineering FangCheck, the independent verification layer of a distributed AI workforce platform.",
  email: "shrinivasanthevar@gmail.com",
  phone: "", // add if you want it shown
  projects: [
    {
      id: "ds",
      title: "Drone Security Analyst Agent",
      kind: "Agentic AI",
      desc: "Autonomous security-analyst agent that monitors a simulated drone feed and raises real-time alerts.",
      tags: ["Python", "LangGraph", "FastAPI", "React", "Docker"],
      points: [
        "Monitors 49+ UCF-Crime CCTV clips with synthetic GPS, altitude and waypoint telemetry",
        "LangGraph pipeline (ingest, VLM analysis, history lookup, reasoning, alert/log, persist) with conditional routing so only notable frames are logged",
        "Llama 4 Scout extracts objects, actions and scene context per frame; Llama 3.3 70B with deterministic rules flags after-hours activity, loitering, repeat vehicles and restricted-zone entry",
        "PostgreSQL + pgvector and MinIO power semantic frame search and a RAG chatbot that calls the VLM as a tool",
        "FastAPI REST API and React operator dashboard, containerized with Docker Compose and covered by pytest plus 9 QA scenarios",
      ],
      link: "https://github.com/ShrinivasanT/Drone_security_analyst_agent",
    },
    {
      id: "gt",
      title: "GroundTruth AI (Professor X)",
      kind: "Agentic RAG",
      desc: "Agentic research assistant that answers with citations grounded in 1,000+ arXiv papers.",
      tags: ["Python", "LangGraph", "Milvus", "RAG", "OpenAI API"],
      points: [
        "Parses PDFs into text chunks, tables and figures with Docling and embeds them with FastEmbed (BGE) into Milvus",
        "6-agent LangGraph system (Retriever, Recommendation, Repo, Buddy, Review, Writer) with on-demand @agent routing",
        "Session-isolated vector collections plus a self-healing refetch loop that ingests new papers when retrieval scores drop below 0.65",
        "Routes pipeline agents to GPT-5-nano and synthesis to GPT-5-mini to cut cost, reducing manual research effort by 70%+",
      ],
      link: "https://github.com/ShrinivasanT/GroundTruth-AI",
    },
    {
      id: "am",
      title: "AutoML Pipeline Selector",
      kind: "AutoML",
      desc: "No-code Streamlit app that lets non-technical users train ML models on their own datasets.",
      tags: ["Python", "Streamlit", "Scikit-learn"],
      points: [
        "Upload a CSV/XLSX dataset, choose features, target and task type, and train without writing code",
        "Automated preprocessing (imputation, label encoding, scaling, 80/20 split) and benchmarks 6 scikit-learn models ranked by Accuracy/F1 or R²/MSE",
        "Exports the chosen model with its scaler and encoders as a joblib bundle with ready-to-run inference code",
      ],
      link: "https://github.com/ShrinivasanT/AutoML-Pipeline-selector",
    },
    {
      id: "mh",
      title: "Mental Health Analysis on Twitter",
      kind: "NLP",
      desc: "Sentiment and mental-health analysis using Kaggle datasets and the Twitter API.",
      tags: ["Streamlit", "Python", "Vader", "Kaggle"],
      points: [
        "Scored tweets with VADER sentiment and keyword lexicons",
        "Combined labelled Kaggle data with live tweets pulled from the Twitter API",
        "Interactive Streamlit app to explore trends by keyword and date",
      ],
      link: "https://mentalhealthtwitter.streamlit.app/",
    },
    {
      id: "cv",
      title: "COVID-19 Dashboard",
      kind: "Visualization",
      desc: "Tableau dashboard for COVID-19 trends and insights.",
      tags: ["Tableau", "Visualization", "Kaggle"],
      points: [
        "Cases, recoveries and deaths over time by country",
        "Interactive filters and map view",
        "Built on public Kaggle data",
      ],
      link: "https://public.tableau.com/shared/4ZG52ZHSB?:display_count=n&:origin=viz_share_link",
    },
    {
      id: "nn",
      title: "Neural Network on MNIST",
      kind: "Deep learning",
      desc: "A neural network built from scratch to classify MNIST handwritten digits.",
      tags: ["Python", "NumPy"],
      points: [
        "Forward and backward propagation written in NumPy",
        "No deep-learning framework used",
        "Trained and evaluated on the 70,000-image MNIST set",
      ],
      link: "https://github.com/ShrinivasanT/NN-from-Scratch-using-MNIST",
    },
  ],
  skills: [
    // A skill links to projects when its name, its name before "(...)", or the text
    // inside "(...)" matches a project tag, e.g. "Retrieval-Augmented Generation (RAG)" → RAG.
    { group: "Languages", items: ["Python", "SQL", "JavaScript", "Bash/Linux", "R"] },
    {
      group: "LLMs & GenAI",
      items: [
        "Large Language Models (LLM)", "Retrieval-Augmented Generation (RAG)", "Agentic AI", "Multi-Agent Systems",
        "Tool Calling", "Prompt Engineering", "LLM-as-a-Judge", "Eval Loops", "Loop Engineering",
        "Autonomous & Cloud Agents", "LLM Autorouting", "Rubric-Based Evaluation", "Vision Language Models (VLM)",
        "Fine-Tuning (Unsloth, Hugging Face Transformers)", "Model Context Protocol (MCP)", "Whisper", "OCR", "Deep Learning",
      ],
    },
    {
      group: "Models & APIs",
      items: [
        "OpenAI API (GPT-5, GPT-4o-mini, text-embedding-3)", "Anthropic API", "Groq (Llama 4 Scout, Llama 3.3 70B)",
        "TypeSafe AI Jev (System One decision model)", "BGE Embeddings",
      ],
    },
    {
      group: "Frameworks",
      items: [
        "LangChain", "LangGraph", "FastAPI", "Streamlit", "React", "Next.js", "Tailwind CSS", "PyTorch", "TensorFlow",
        "Keras", "Scikit-learn", "Pandas", "NumPy", "OpenCV",
      ],
    },
    {
      group: "Retrieval & Data",
      items: [
        "Milvus", "FAISS", "pgvector", "FastEmbed", "Cross-Encoder Re-ranking", "Semantic Search", "Docling",
        "PostgreSQL", "SQLAlchemy (async)", "MinIO",
      ],
    },
    {
      group: "Platform & MLOps",
      items: ["Docker", "Git", "GitHub", "REST APIs", "Idempotent Workflows", "pytest", "AWS", "Tableau"],
    },
  ],
  experience: {
    sample: false,
    items: [
      {
        role: "AI Engineer",
        org: "Equations Work · OpenWolfPack, FangCheck",
        when: "July 2026 — Present",
        current: true,
        points: [
          "Works on OpenWolfPack, a distributed AI workforce platform: an orchestrator agent takes a business goal over WhatsApp, breaks it into tasks and dispatches them to cloud agents and human specialists",
          "Engineered FangCheck, the autonomous LLM-as-a-Judge verification service: no output ships and no payment settles without a passing PASS/FAIL verdict against the contract and a versioned rubric",
          "Applied loop engineering to rework: FAIL findings feed back into the agent's context, with a cap of 2 rework attempts before a human-in-the-loop dispute",
          "Closed the eval loop: first-pass, rework and dispute rates per Kit and agent feed agent reliability scores into orchestrator matching and rubric tuning",
          "Integrated Jev, TypeSafe AI's System One decision model, into the AI gateway to autoroute each agent request to the best-fit model",
        ],
      },
      {
        role: "Data Science Intern (Generative AI)",
        org: "Analyttica Datalabs, Bangalore",
        when: "Oct 2025 — Present",
        current: true,
        points: [
          "Built an AI-driven video recommendation system using semantic search across 3,000+ videos",
          "Multimodal ingestion pipeline: Vision Language Models for frame captions, OCR for on-screen text and Whisper for audio transcription",
          "Two-stage retrieval (FAISS vector search + Cross-Encoder re-ranking) with sub-2-second latency and a 10% increase in retrieval accuracy",
          "RAG-based summarization in LangChain that writes query-specific summaries for all 3,000+ indexed videos",
        ],
      },
      {
        role: "Freelance Web Developer",
        org: "Artsy Duck, Pune",
        when: "2024",
        points: ["Designed and shipped the store's e-commerce site", "Handled deployment on Vercel"],
      },
      { role: "Tech Team Member", org: "ACES, RMD Sinhgad School of Engineering", when: "" },
      { role: "Training & Placement Coordinator", org: "RMD Sinhgad School of Engineering", when: "" },
    ],
  },
  education: {
    sample: false,
    items: [
      {
        kind: "Degree",
        title: "B.E. — Computer Science",
        org: "RMD Sinhgad School of Engineering, Savitribai Phule Pune University",
        when: "July 2022 — June 2026",
        note: "CGPA 8.22/10 · Data Science, Machine Learning",
      },
      {
        kind: "Higher secondary",
        title: "HSC — Maharashtra State Board",
        org: "Abasaheb Garware College",
        when: "",
        note: "64.67% · Physics, Chemistry, Maths, Electronics",
      },
      {
        kind: "Secondary",
        title: "SSC — Maharashtra State Board",
        org: "Versatile High School",
        when: "",
        note: "87.0%",
      },
    ],
  },
  certificates: {
    sample: false,
    items: [
      { kind: "Certificate", title: "Artificial Intelligence Fundamentals", org: "IBM", when: "" },
      { kind: "Certificate", title: "Getting Started with Data", org: "IBM", when: "" },
      { kind: "Certificate", title: "Enterprise Data Science in Practice", org: "IBM", when: "" },
      { kind: "Virtual internship", title: "Deloitte Virtual Internship", org: "Deloitte", when: "" },
      { kind: "Certificate", title: "Fundamentals of Machine Learning and Artificial Intelligence", org: "AWS", when: "" },
    ],
  },
  socials: [
    { name: "GitHub", handle: "ShrinivasanT", url: "https://github.com/ShrinivasanT", icon: "code" },
    { name: "LinkedIn", handle: "shrinivasan-thevar", url: "https://www.linkedin.com/in/shrinivasan-thevar-428108295/", icon: "user" },
    { name: "Instagram", handle: "@shrinivasan_._thevar", url: "https://www.instagram.com/shrinivasan_._thevar/", icon: "link" },
  ],
};
