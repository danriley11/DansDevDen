import placeholderImage0 from '../../assets/tempDevDen.jpg';
import placeholderImage1 from '../../assets/tempSharon.jpg';
import placeholderImage2 from '../../assets/tempNoelle.jpg';
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
    // websiteUrl: 'https://bespoke-designs-by-sharon-e5a3lxm32-danriley11.vercel.app/',
    websiteUrl: null,
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
