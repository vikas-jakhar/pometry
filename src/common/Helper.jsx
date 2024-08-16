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
import latestChart from '../assets/image/webp/latest-chart.webp'
import latestData from '../assets/image/webp/latest-data.webp'
import latestAnalytics from '../assets/image/webp/latest-analytics.webp'
import joy from '../assets/image/webp/joy.webp'
import ban from '../assets/image/webp/ban.webp'
import joyBan from '../assets/image/webp/joy-ban.webp';
export const NAV_ITEMS_DATA = [
    { text: "Home", url: "#hero", },
    { text: "Blog", url: "#blog", },
    { text: "Our Team", url: "#team", },
    { text: "Product Overview", url: "#product", },
];
export const SOCIAL_ICONS = [
    { icon: gitHub, link: "https://github.com/", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { icon: slack, link: "https://slack.com/intl/en-in", position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
    { icon: twitter, link: "https://x.com/i/flow/login", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { icon: pometryIcon, link: "https://www.pometry.com/", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
];
export const CARD_DATA = [
    { icon: "redIcon", link: "https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/#quick-reference", heading: "Instance running", text: "Setup, get your first Raphtory instance running and submit your first temporal graph algorithms." },
    { icon: "slack", link: "https://slack.com/intl/en-in", heading: "Join on slack", text: "Feel free to join the #raphtory-development and #askaway channels to discuss current issues or ask any questions." },
    { icon: "redTwitter", link: "https://x.com/i/flow/login", heading: "Give Feedback", text: "Come and say hello to us on Twitter Any and all feedback is welcomed!" },
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
        link: <a className='text-lightBlue' aria-hidden="true" rel="noreferrer" href="https://x.com/?lang=en" target='_blank'>@WiNS_Society</a>,
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
        link: <a className='text-lightBlue' aria-hidden="true" rel="noreferrer" href="https://x.com/?lang=en" target='_blank'>@WiNS_Society</a>,
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
        link: <a className='text-lightBlue' aria-hidden="true" rel="noreferrer" href="https://x.com/?lang=en" target='_blank'>@WiNS_Society</a>,
    },
];
export const DATA_ANALYTICS = [
    {
        img: latestChart,
        heading: "Making Decisions with data Analytics",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet ",
        profile: joy,
        profileName: "Joy Ban",
        date: "02 May 2023",
    },
    {
        img: latestData,
        heading: "The Role of Machine Learning in Data Analytics",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet ",
        profile: ban,
        profileName: "Joy Ban",
        date: "02 May 2023",
    },
    {
        img: latestAnalytics,
        heading: "Making Decisions with data Analytics",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet ",
        profile: joyBan,
        profileName: "Joy Ban",
        date: "02 May 2023",
    },
    {
        img: latestData,
        heading: "The Role of Machine Learning in Data Analytics",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet ",
        profile: ban,
        profileName: "Joy Ban",
        date: "02 May 2023",
    },
    {
        img: latestChart,
        heading: "Making Decisions with data Analytics",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet ",
        profile: joy,
        profileName: "Joy Ban",
        date: "02 May 2023",
    },
]
export const FOOTER_DATA = [
    {
        heading: "Company", items: [
            { text: "Product", link: "#raphtory" },
            { text: "About", link: "#team" },
            { text: "Contact", link: "#footer" },
        ]
    },
    {
        heading: "Resources", items: [
            { text: "Docs", link: "/" },
            { text: "Blog", link: "/" },
            { text: "Community", link: "/" },
        ]
    },
    {
        heading: "Platform", items: [
            { text: "Graph QL", link: "/" },
            { text: "Data Consolidation", link: "/" },
            { text: "JupyterNotebook Support", link: "/" },
            { text: "Custom Analytics", link: "/" },
            { text: "Data Visualisation", link: "/" },
        ]
    },
    {
        heading: "Use cases", items: [
            { text: "Company Shell Detection", link: "/" },
            { text: "Cyber Security", link: "/" },
            { text: "Covid Relief Schemes Fraud", link: "/" },
            { text: "NFT Wash Trading", link: "/" },
            { text: "DEFI Sybil Detection", link: "/" },
        ]
    },
    {
        heading: "Resources", items: [
            { text: "Docs", link: "#docs" },
            { text: "Blog", link: "#blog" },
            { text: "Community", link: "#community" },
        ]
    },
    {
        heading: "Platform", items: [
            { text: "Graph QL", link: "/" },
            { text: "Data Consolidation", link: "/" },
            { text: "JupyterNotebook Support", link: "/" },
            { text: "Custom Analytics", link: "/" },
            { text: "Data Visualisation", link: "/" },
        ]
    },
];
