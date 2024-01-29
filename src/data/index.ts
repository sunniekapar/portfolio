export interface ProjectDataProps {
  id: number | string;
  projectPage: string;
  projectName: string;
  projectDescription: string;
  projectShortDescription: string;
  projectDate: string;
  projectTags: string[];
  projectExternalLink?: string;
  projectGithubLink?: string;
  imageSrc: string;
  imageAlt: string;
}

export const projectData: ProjectDataProps[] = [
  {
    id: '0',
    projectPage: 'solfocus',
    projectName: 'SolFocus',
    projectDescription:
      'SolFocus is a minimalistic productivity app designed for students. It utilizes the Pomodoro Technique with a task management system that allows students to track their progress throughout their study session.',
    projectShortDescription: 'A minimalistic productivity study app',
    projectDate: 'Dec. 2023',
    projectGithubLink: 'https://github.com/sunniekapar/solfocus',
    imageSrc: 'https://source.unsplash.com/random/?MinimalRender&1',
    imageAlt: 'SolFocus Image',
    projectTags: [
      'Firebase',
      'Firestore',
      'Express.js',
      'React',
      'Node.js',
      'Shadcn',
    ],
  },
  {
    id: '0',
    projectPage: 'innercompass',
    projectName: 'Inner Compass',
    projectDescription:
      'Inner Compass is a self-assessment app designed to guide users on their journey to self-improvement. This tool offers a personalized roadmap for personal growth and helps users recognize their achievements by pinpointing areas for development. The app provides surveys across various life aspects, such as health, career, and relationships with features that include goal-setting guidance and progress tracking.',
    projectShortDescription:
      'A personal development app that features goal setting and personalized surveys',
    projectDate: 'Dec. 2023',
    projectGithubLink: 'https://github.com/sunniekapar/inner-compass',
    imageSrc: 'https://source.unsplash.com/random/?MinimalRender&2',
    imageAlt: 'Inner Compass Image',
    projectTags: [
      'MongoDB',
      'Express.js',
      'React Native',
      'Node.js',
      'Expo Router',
      'Clerk',
    ],
  },
  {
    id: '0',
    projectPage: 'druivenbox',
    projectName: 'Druiven Box',
    projectDescription:
      'Web app that features a variety of boolean logic problems. An interactive resource for students to improve their knowledge of boolean logic. Test yourself on various levels ranging from single logic gates to difficult expressions.',
    projectShortDescription:
      'An interactive learning tool that tests knowledge of boolean algebra',
    projectDate: 'Nov. 2022',
    projectGithubLink: 'https://github.com/sunniekapar/druiven-box',
    projectExternalLink: 'https://druivenbox.haltonchess.ca/index.html',
    imageSrc: 'https://source.unsplash.com/random/?MinimalRender&3',
    imageAlt: 'Druiven Box Image',
    projectTags: ['TypeScript', 'HTML', 'SCSS', 'Snowpack'],
  },
  {
    id: '0',
    projectPage: 'falldetection',
    projectName: 'Fall Detection',
    projectDescription:
      "Our team is in the process of developing a mobile app that uses machine learning to detect falls. This application aims to improve personal safety by quickly recognizing fall incidents. It's a work in progress, with a focus on simplicity and effectiveness for the user. More details will be available soon.",
    projectShortDescription: 'A mobile app that detects falling',
    projectDate: 'Dec. 2023',
    imageSrc: 'https://source.unsplash.com/random/?MinimalRender&0',
    imageAlt: 'Fall detection Image',
    projectTags: ['Flask', 'Expo', 'NativeWind'],
  },
];


