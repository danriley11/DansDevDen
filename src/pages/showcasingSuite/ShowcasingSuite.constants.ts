import placeholderImage0 from '../../assets/tempDevDen.jpg';
import placeholderImage1 from '../../assets/tempSharon.jpg';
import placeholderImage2 from '../../assets/tempNoelle.jpg';
import placeholderImage3 from '../../assets/tempHTMLDnD.jpg';
import dayjs from 'dayjs';

export const SHOWCASING_CASE = [
  {
    title: 'Dans Dev Den',
    websiteUrl: 'https://dansdevden.com/',
    githubUrl: 'https://github.com/danriley11/DansDevDen',
    description:
      'This is a self-made website to help me keep all of my progress, learnings, works and so much more in one place and available to the world.',
    previewImage: placeholderImage0,
    previewImageAlt: 'placeholderImageAlt',
    techStack: ['Vite', 'React', 'Typescript', 'StyledComponents', 'DayJS', 'ReactRouter'],
    howIKnow: 'I learnt about each of these frameworks and packages over the course of my career in 2022-2023.',
    launchDate: dayjs('2023-06').format('MMM YYYY'),
    authors: ['Daniel Riley'],
  },
  {
    title: 'Bespoke Designs by Sharon',
    websiteUrl: 'https://bespokedesignsbysharon.com',
    githubUrl: 'https://github.com/danriley11/FullstackWebsite',
    description: 'A small business run by a talented mother who loves patchwork quilting.',
    previewImage: placeholderImage1,
    previewImageAlt: 'placeholderImageAlt',
    techStack: [
      'Next.js',
      'React',
      'Typescript',
      'StyledComponents',
      'GraphQL',
      'Apollo',
      'Stripe',
      'DayJS',
      'Debounce',
      'Downshift',
      'NProgress',
      'Jest',
      'Node.js',
      'Keystone.js',
    ],
    howIKnow:
      'I learnt about each of these frameworks and packages over the course of my career and a developer course I took in 2022-2023.',
    launchDate: 'Ready as of 20th October. Currently debugging hosting errors.',
    authors: ['Daniel Riley'],
  },
  {
    title: 'DnD Character Sheet (jQuery)',
    websiteUrl: 'https://danriley11.github.io/DnD-Character-Sheet',
    githubUrl: 'https://github.com/danriley11/DnD-Character-Sheet',
    description:
      'During one of my elective units in my final year of university, they gave us a prescribed design to create but I spoke with the unit convenor to ask about creating something personal and of inspiration. This was hesitantly accepted but turned out to be the spark that ignited my belief that I could build and create websites. It created my starting mark for wanting to learn everything I can about development, software and how to bridge the gap between people and technology as a whole.',
    previewImage: placeholderImage3,
    previewImageAlt: 'placeholder for HTML & jQuery DND Character sheet preview',
    techStack: ['HTML, CSS, jQuery'],
    howIKnow: 'I learnt the skills on how to build this through the course information, research, and sandboxing.',
    launchDate: dayjs('2020-12').format('MMM YYYY'),
    authors: ['Daniel Riley'],
  },
  {
    title: 'Limb reconstruction patient support',
    websiteUrl: 'https://limbsupport.com.au/',
    githubUrl: null,
    description:
      'A small business run by a professional nurse practitioner who helps those looking at, going through and completed limb reconstruction surgery.',
    previewImage: placeholderImage2,
    previewImageAlt: 'placeholderImageAlt',
    techStack: ['GoDaddy Web Tools'],
    howIKnow:
      'I understood basic web tools early on and used this to build a skeleton website for Noelle and her sole-trader business.',
    launchDate: dayjs('2019-08').format('MMM YYYY'),
    authors: ['Daniel Riley', 'Noelle Coleman'],
  },
];
