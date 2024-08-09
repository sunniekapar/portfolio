export type ProjectDataProps = {
  title: string;
  description: string;
  summary: string;
  date: string;
  href?: string;
  tags: string[];
};

export const projectData: ProjectDataProps[] = [
  {
    title: "Enfra",
    description: "Enfra leverages APIs like Mapbox, WalkScore, and machine learning algorithms like Random Forest Regression (RFR), to accurately evaluate the environmental footprint of urban projects.",
    summary: "An all-in-one sustainable urban development tool - Winner @ TerraHacks",
    date: "Aug. 2024",
    tags: ["Next.js", "Drizzle", "Turso", "SQLite","TypeScript", "Python"],
    href: "https://devpost.com/software/app-ny81rs?ref_content=user-portfolio&ref_feature=in_progress"
  },
  {
    title: "WatChat",
    description:
      "WatChat uses Supabase VectorDB retriever to find relevant information about the University of Waterloo and passes it as context to GPT-4o to provide an answer. To gather all the documents I used Puppeteer to scrape the pages in the University of Waterloo website, and Cheerio to clean up the HTML. I then used Langchain to split and chunk the data and store it in a Supabase VectorDB.",
    summary:
      "A RAG chatbot that answers questions about the University of Waterloo",
    tags: [
      "Langchain",
      "Cheerio",
      "Puppeteer",
      "OpenAI",
      "Supabase",
      "TailwindCSS",
      "Shadcn",
      "Next.js",
    ],
    date: "May 2024",
  },
  {
    title: "eco",
    description:
      "eco leverages advanced Computer Vision technology, powered by YOLOv8 and OpenCV, to detect fruits, vegetables, and groceries while accurately predicting their expiry dates. The app includes a Discord bot that notifies users of impending expirations and alerts them about unused groceries. Users can easily generate delicious recipes using OpenAI's API, utilizing ingredients from their fridge. Additionally, eco features a Shameboard to track and highlight instances of food waste, encouraging community members to take responsibility for their consumption habits.",
    summary: "A computer vision model that detects food expiry dates",
    href: "https://devpost.com/software/eco-3c258d",
    tags: [
      "YOLOv8",
      "OpenCV",
      "Discord.js",
      "OpenAI",
      "Supabase",
      "TailwindCSS",
      "Shadcn",
    ],
    date: "Feb. 2024",
  },
  {
    title: "SolFocus",
    description:
      "SolFocus is a minimalistic productivity web app designed for students. It utilizes the Pomodoro Technique with a task management system that allows students to track their progress throughout their study session.",
    summary: "A minimalistic productivity study web app",
    tags: ["Firebase", "Firestore", "Express.js", "React", "Node.js", "Shadcn"],
    date: "Jan. 2024",
  },
  {
    title: "Inner Compass",
    description:
      "Inner Compass is a self-assessment app designed to guide users on their journey to self-improvement. This tool offers a personalized roadmap for personal growth and helps users recognize their achievements by pinpointing areas for development. The app provides surveys across various life aspects, such as health, career, and relationships with features that include goal-setting guidance and progress tracking.",
    summary:
      "A personal development app that features goal setting and personalized surveys",
    tags: [
      "MongoDB",
      "Express.js",
      "React Native",
      "Node.js",
      "Expo Router",
      "Clerk",
    ],
    date: "Dec. 2023",
  },
  {
    title: "Druiven Box",
    description:
      "Web app that features a variety of boolean logic problems. An interactive resource for students to improve their knowledge of boolean logic. Test yourself on various levels ranging from single logic gates to difficult expressions.",
    summary:
      "An interactive learning tool that tests knowledge of boolean algebra",
    href: "https://druivenbox.haltonchess.ca/index.html",
    tags: ["TypeScript", "HTML", "SCSS", "Snowpack"],
    date: "Nov. 2022",
  },
];
