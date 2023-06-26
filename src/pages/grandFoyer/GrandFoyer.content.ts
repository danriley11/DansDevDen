import LearningImage from '../../assets/LearningImage.jpg';
import BloggingImage from '../../assets/BloggingImage.webp';
import ShowcasingImage from '../../assets/ShowcasingImage.webp';
import ServicesImage from '../../assets/ServicesImage.jpg';
import PlanningImage from '../../assets/PlanningImage.webp';
import AboutMeImage from '../../assets/AboutMeImage.webp';

export const SPACE_INFO_CONTENT = {
  title: `What's this space really about?`,
  content: [
    `This is a space I plan on making into a home for anyone and everyone who's
            interested in programming and is unsure about how to get started.`,
    `I want this space to become the very place people choose to begin their days for
            inspiration or learning...`,
  ],
};

export const FLOOR_PLAN_CONTENT = {
  title: `What's the floor plan?`,
  content: [
    `Looking for a more informative way around? Then click the button below for a birds-eye view of the space.`,
    ` For more information on why I chose this website architecture, scroll down after clicking the button.`,
    // `A floor plan here, is a map of what's where from a birds-eye view.
    //     something I think more websites need to take into consideration when offering
    //     services, information, accessibility and other kin-like features. This belief of
    //     mine stems from the notion "The known potential of something is only as great as
    //     it's communicated to be". It's very hard to know the capacity or potential of
    //     something without first watching it or reading/hearing about it.`,
  ],
  buttonLabel: `Let's see the floor plan`,
};

export const ZONES_CONTENT = [
  {
    title: 'Blogging (coming soon)',
    image: BloggingImage,
    blurb: `I'll be giving regular updates on what I'm learning, working on and having trouble with regarding development, and may sometimes make personal entries to share a bit more about myself from time to time!`,
  },
  {
    title: 'Learning (coming soon)',
    image: LearningImage,
    blurb: `If you're looking to learn then this is the place for you. In here, I'll set up structured learning gathered from my past, present and future learnings within the programming field. I'll also add in a "Random knowledge nugget" feature to allow you to land on a random page to help you learn or gain exposure to something new everyday!`,
  },
  {
    title: 'Showcasing (coming soon)',
    image: ShowcasingImage,
    blurb: `For those looking to find out what I've built, am building or am going to build, this is your call!`,
  },
  {
    title: 'Services (coming soon)',
    image: ServicesImage,
    blurb: `I love what I do and I want to share the magic of IT with the world, so in my spare time I'd like to offer a variety of services to help the community.`,
  },
  {
    title: 'Planning (coming soon)',
    image: PlanningImage,
    blurb: `A one-stop-shop to find out what features I'm working on and what I'm planning for!`,
  },
  {
    title: 'About Dan (coming soon)',
    image: AboutMeImage,
    blurb: `Are you looking to know more about me and this space? Then look no further!`,
  },
];
