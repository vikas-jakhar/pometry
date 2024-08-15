import gitHub from "../assets/image/webp/github.png";
import slack from "../assets/image/webp/slack.png";
import twitter from "../assets/image/webp/twitter.png";
import pometry from "../assets/image/webp/pometry.png";
import richardProfile from '../assets/image/svg/richard-profile.svg'
import messageIcon from '../assets/image/svg/message.svg'
import heartIcon from '../assets/image/svg/heart.svg'
import infoIcon from '../assets/image/svg/info-logo.svg'
import naomiProfile from '../assets/image/svg/naomi-profile.svg'
import cleggProfile from '../assets/image/svg/clegg-profile.svg'
export const NAV_ITEMS_DATA = [
    { text: "Home", },
    { text: "Blog", },
    { text: "Our Team", },
    { text: "Product Overview", },
];

export const SOCIAL_ICONS = [
    { icon: gitHub, link: "", className: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { icon: slack, link: "", className: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
    { icon: twitter, link: "", className: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { icon: pometry, link: "", className: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
];
export const LATEST_NEWS_DATA = [
    {
        profile: richardProfile,
        name: "Richard G.Clegg",
        id: "@richardclgg.",
        date: "May 2",
        paragrapgh: "I really love the work that",
        paraSecond: "does for the complex networks community. It makes us better as a research area!",
        message: messageIcon,
        heart: heartIcon,
        info: infoIcon,
        number: 17.,
        link: <a className='text-lightBlue' href="https://x.com/?lang=en" target='_blank'>@WiNS_Society</a>,
    },
    {
        profile: naomiProfile,
        name: "Naomi Arnold",
        id: "@narnolddd",
        date: "May 2",
        paragrapgh: "Excited to share that our next invited speaker for Networks and Time next Friday is Marya Bazzi from the University of Warwick.",
        message: messageIcon,
        heart: heartIcon,
        info: infoIcon,
        number: 19,
    },
    {
        profile: cleggProfile,
        name: "Richard G. Clegg",
        id: "@richardclgg.",
        date: "May 2",
        paragrapgh: "I really love the work that",
        paraSecond: "does for the complex networks community. It makes us better as a research area!",
        message: messageIcon,
        heart: heartIcon,
        info: infoIcon,
        number: 19,
        link: <a className='text-lightBlue' href="https://x.com/?lang=en" target='_blank'>@WiNS_Society</a>,
    },
    {
        profile: naomiProfile,
        name: "Naomi Arnold",
        id: "@narnolddd",
        date: "May 2",
        paragrapgh: "Excited to share that our next invited speaker for Networks and Time next Friday is Marya Bazzi from the University of Warwick.",
        message: messageIcon,
        heart: heartIcon,
        info: infoIcon,
        number: 19,
    },
    {
        profile: cleggProfile,
        name: "Richard G. Clegg",
        id: "@richardclgg.",
        date: "May 2",
        paragrapgh: "I really love the work that",
        paraSecond: "does for the complex networks community. It makes us better as a research area!",
        message: messageIcon,
        heart: heartIcon,
        info: infoIcon,
        number: 19,
        link: <a className='text-lightBlue' href="https://x.com/?lang=en" target='_blank'>@WiNS_Society</a>,
    },

];