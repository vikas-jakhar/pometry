import gitHub from "../assets/image/webp/github.png";
import slack from "../assets/image/webp/slack.png";
import twitter from "../assets/image/webp/twitter.png";
import pometry from "../assets/image/webp/pometry.png";

export const NAV_ITEMS_DATA = [
    { text: "Home", url: "/", },
    { text: "Blog", url: "/", },
    { text: "Our Team", url: "/", },
    { text: "Product Overview", url: "/", },
];

export const SOCIAL_ICONS = [
    { icon: gitHub, link: "", className: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { icon: slack, link: "", className: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
    { icon: twitter, link: "", className: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { icon: pometry, link: "", className: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
];

export const CARD_DATA = [
    { icon: "redIcon", link: "", heading: "Instance running", text: "Setup, get your first Raphtory instance running and submit your first temporal graph algorithms." },
    { icon: "slack", link: "", heading: "Join on slack", text: "Feel free to join the #raphtory-development and #askaway channels to discuss current issues or ask any questions." },
    { icon: "redTwitter", link: "", heading: "Give Feedback", text: "Come and say hello to us on Twitter Any and all feedback is welcomed!" },
]