import latestChart from '../assets/image/webp/latest-chart.webp'
import latestData from '../assets/image/webp/latest-data.webp'
import latestAnalytics from '../assets/image/webp/latest-analytics.webp'
import joy from '../assets/image/webp/joy.webp'
import ban from '../assets/image/webp/ban.webp'
import joyBan from '../assets/image/webp/joy-ban.webp'

export const NAV_ITEMS_DATA = [
    { text:"Home",},
    { text:"Blog",},
    { text:"Our Team",},
    { text:"Product Overview",},
]
export  const DATA_ANALYTICS = [
    {
        img:latestChart,
        heading :"Making Decisions with data Analytics",
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet ",
        profile:joy,
        profileName:"Joy Ban",
        date:"02 May 2023",
    },
    {
        img:latestData,
        heading :"The Role of Machine Learning in Data Analytics",
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet ",
        profile:ban,
        profileName:"Joy Ban",
        date:"02 May 2023",
    },
    {
        img:latestAnalytics,
        heading :"Making Decisions with data Analytics",
        paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam enim massa, porttitor vitaet ",
        profile:joyBan,
        profileName:"Joy Ban",
        date:"02 May 2023",
    },
]
export const FOOTER_DATA = [
    {
        heading: "Company", items: [
            { text: "Product" },
            { text: "About" },
            { text: "Contact" },
        ]
    },
    {
        heading: "Platform", items: [
            { text: "Graph QL" },
            { text: "Data Consolidation" },
            { text: "JupyterNotebook Support" },
            { text: "Custom Analytics" },
            { text: "Data Visualisation" },
        ]
    },
    {
        heading: "Use cases", items: [
            { text: "Company Shell Detection" },
            { text: "Cyber Security" },
            { text: "Covid Relief Schemes Fraud" },
            { text: "NFT Wash Trading" },
            { text: "DEFI Sybil Detection" },
        ]
    },
    {
        heading: "Resources", items: [
            { text: "Docs" },
            { text: "Blog" },
            { text: "Community" },
        ]
    },
];
