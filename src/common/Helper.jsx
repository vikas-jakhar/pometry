import gitHub from "../assets/image/webp/github.webp";
import slack from "../assets/image/webp/slack.webp";
import twitter from "../assets/image/webp/twitter.webp";
import pometryIcon from "../assets/image/webp/pometry.webp";
import richardProfile from '../assets/image/svg/richard-profile.svg'
import messageIcon from '../assets/image/svg/message.svg'
import heartIcon from '../assets/image/svg/heart.svg'
import infoIcon from '../assets/image/svg/info-logo.svg'
import naomiProfile from '../assets/image/svg/naomi-profile.svg'
import cleggProfile from '../assets/image/svg/clegg-profile.svg'
export const NAV_ITEMS_DATA = [
    { text: "Home", url: "/", },
    { text: "Blog", url: "/", },
    { text: "Our Team", url: "/", },
    { text: "Product Overview", url: "/", },
];
export const SOCIAL_ICONS = [
    { icon: gitHub, link: "", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { icon: slack, link: "", position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
    { icon: twitter, link: "", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { icon: pometryIcon, link: "", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
];
export const CARD_DATA = [
    { icon: "redIcon", link: "", heading: "Instance running", text: "Setup, get your first Raphtory instance running and submit your first temporal graph algorithms." },
    { icon: "slack", link: "", heading: "Join on slack", text: "Feel free to join the #raphtory-development and #askaway channels to discuss current issues or ask any questions." },
    { icon: "redTwitter", link: "", heading: "Give Feedback", text: "Come and say hello to us on Twitter Any and all feedback is welcomed!" },
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
        link: <a className='text-lightBlue' rel="noreferrer" href="https://x.com/?lang=en" target='_blank'>@WiNS_Society</a>,
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
        link: <a className='text-lightBlue' rel="noreferrer" href="https://x.com/?lang=en" target='_blank'>@WiNS_Society</a>,
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
        link: <a className='text-lightBlue' rel="noreferrer" href="https://x.com/?lang=en" target='_blank'>@WiNS_Society</a>,
    },
];