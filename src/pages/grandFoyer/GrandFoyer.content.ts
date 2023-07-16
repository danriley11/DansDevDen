import LearningImage from '../../assets/LearningImage.jpg';
import BloggingImage from '../../assets/BloggingImage.webp';
import ShowcasingImage from '../../assets/ShowcasingImage.webp';
import ServicesImage from '../../assets/ServicesImage.jpg';
import PlanningImage from '../../assets/PlanningImage.webp';
import AboutMeImage from '../../assets/AboutMeImage.webp';
import { HOUSEKEEPING, PLANNING, SHOWCASING } from '../../routes/routes';

export const SPACE_INFO_CONTENT = {
  title: `What is this space?`,
  content: [
    `This is a space which will be growing alongside me and my skills. It's a space I intend on using for blogging updates, providing learnings, showcasing personal projects, offering freelancing services, and so much more.`,
    `This is also a space I want to make feel as homely as possible, so the terminology and theme throughout will reflect that of a large home with a room for everyone, unique to what they're looking for.`,
    `Please note: This space has only recently been launched and is a large work in progress with lots of content, design updates, animations and features to come. If you're interested in finding out what's in the pipeline, I would love to introduce you to your first suite:`,
  ],
};

export const FLOOR_PLAN_CONTENT = {
  title: `What's the best way around?`,
  content: [
    `If you're looking for a handy visual on seeing all the different spaces this home has to offer, then click the button below!`,
    `I'm offering this handy visual aid as I can find it difficult navigating some websites and I really want to make this a home that's accessible and understandable by all.`,
    // `Looking for a more informative way around? Then click the button below for a birds-eye view of the space.`,
    // ` For more information on why I chose this website architecture, scroll down after clicking the button.`,
    // `A floor plan here, is a map of what's where from a birds-eye view.
    //     something I think more websites need to take into consideration when offering
    //     services, information, accessibility and other kin-like features. This belief of
    //     mine stems from the notion "The known potential of something is only as great as
    //     it's communicated to be". It's very hard to know the capacity or potential of
    //     something without first watching it or reading/hearing about it.`,
  ],
  buttonLabel: `Coming soon`,
};

export const ZONES_CONTENT = [
  {
    title: 'Blogging suite (coming soon)',
    image: BloggingImage,
    blurb: `Stay up to date with me as I give regular updates on what I'm learning, working on and having trouble with. This helps me stay accountable when working alone.`,
    href: ``,
  },
  {
    title: 'Learning suite (coming soon)',
    image: LearningImage,
    blurb: `In here, I'll set up structured learning gathered from my past, present and future. There'll be readings, activities and "Random knowledge nugget(s)" to enhance your learning experience.`,
    href: ``,
  },
  {
    title: 'Showcasing suite',
    image: ShowcasingImage,
    blurb: `A one-stop-shop for what I've built or am building. It's here in case you want to know what my growing skillset can do.`,
    href: SHOWCASING,
  },
  {
    title: 'Services suite (coming soon)',
    image: ServicesImage,
    blurb: `I love what I do and I do what I love. It's important to me that I share the magic of IT with the world, so in my spare time I'd like to offer a variety of services to help the community.`,
    href: ``,
  },
  {
    title: 'Planning suite',
    image: PlanningImage,
    blurb: `Jump in here if you're interested in finding out what I'm currently working on or what I will be working on.`,
    href: PLANNING,
  },
  {
    title: 'Housekeepers lodge',
    image: AboutMeImage,
    blurb: `Are you looking to know more about me and this space? Then click this way!`,
    href: HOUSEKEEPING,
  },
];
