const Icons = (props) => {
    const IconList = {
        twitter: (
            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 3.01809C23.1166 3.41962 22.1644 3.68348 21.1778 3.80967C22.1874 3.20164 22.9675 2.23797 23.3346 1.07927C22.3824 1.65289 21.327 2.05442 20.2141 2.28386C19.3078 1.29725 18.0344 0.723633 16.5889 0.723633C13.8929 0.723633 11.6902 2.92631 11.6902 5.64524C11.6902 6.0353 11.7361 6.41388 11.8164 6.76952C7.73231 6.56302 4.0956 4.60126 1.67495 1.62994C1.25048 2.3527 1.00956 3.20164 1.00956 4.09648C1.00956 5.80585 1.86998 7.32019 3.20077 8.18061C2.38623 8.18061 1.62906 7.95117 0.963671 7.607V7.64141C0.963671 10.0276 2.66157 12.0238 4.91013 12.4712C4.18822 12.6688 3.43032 12.6963 2.69599 12.5515C3.00758 13.5295 3.61782 14.3853 4.44094 14.9985C5.26405 15.6117 6.25864 15.9516 7.2849 15.9703C5.54527 17.3475 3.38891 18.0919 1.17017 18.0812C0.780115 18.0812 0.390057 18.0582 0 18.0124C2.17973 19.412 4.77247 20.2265 7.54876 20.2265C16.5889 20.2265 21.5564 12.7236 21.5564 6.21885C21.5564 6.00088 21.5564 5.79438 21.5449 5.5764C22.5086 4.88807 23.3346 4.01618 24 3.01809Z" fill="white" />
            </svg>
        ),
        arrowIcon: (
            <svg width="112" height="83" viewBox="0 0 112 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3737 8.6557C13.3645 13.0336 8.27278 18.01 6.01728 19.6449C-1.92838 25.1736 -1.62607 25.9209 8.46684 27.6854C12.3572 28.306 18.2822 30.3514 22.0493 32.4536C26.6472 34.9556 29.0108 35.672 29.5073 34.8155C30.5712 32.9803 24.9627 29.402 16.7707 26.6145C10.1629 24.3367 10.0149 24.1692 12.2766 22.9466C16.1492 20.778 29.8967 18.7763 36.0416 19.3145C51.4683 20.9016 61.9999 32.4832 77.1833 64.6613C80.4902 71.6458 83.54 77.664 83.9585 78.0701C85.6323 79.6944 86.5287 78.0072 88.1371 70.4393C90.1205 60.3916 93.3841 53.2111 96.8897 50.8298C99.2675 49.2659 99.8731 49.2083 102.565 50.7687C106.847 53.2512 109.578 63.9071 108.285 73.0469C106.92 82.3091 106.958 83.2303 108.601 82.7932C110.631 82.2533 112.325 70.7303 111.627 63.0516C111.173 58.6195 110.401 55.7204 108.883 53.1235C106.418 48.9157 101.247 45.4279 98.4448 46.1734C93.7095 47.4332 88.9192 54.7094 85.9242 65.2332L84.1039 71.6157L80.6428 64.0513C75.1939 51.7383 66.5259 36.66 61.3891 30.5762C58.4022 27.1282 53.7601 23.2928 49.5745 20.7846C40.9844 15.723 33.9378 14.9072 21.0468 17.4055L11.9051 19.2167L18.1122 12.5984C26.2529 3.91343 27.2717 2.2972 26.19 1.34322C25.7459 0.840523 25.1341 0.485874 24.9408 0.537293C24.6509 0.614424 21.2863 4.30348 17.3737 8.6557Z" fill="#9D2035" />
            </svg>
        ),
        redIcon: (
            <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 0H3C1.35 0 0 1.35 0 3V27C0 28.65 1.35 30 3 30H21C22.65 30 24 28.65 24 27V3C24 1.35 22.65 0 21 0ZM3 3H10.5V15L6.75 12.75L3 15V3Z" fill="url(#paint0_linear_195_8774)" />
                <defs>
                    <linearGradient id="paint0_linear_195_8774" x1="0" y1="0" x2="26.3671" y2="2.24905" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E31930" />
                        <stop offset="1" stop-color="#F3576E" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        slack: (
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_195_8765)">
                    <path d="M5.5332 16.3959C5.5332 17.8848 4.31892 19.1009 2.82981 19.1009C1.34091 19.1009 0.125 17.8848 0.125 16.3959C0.125 14.907 1.34111 13.6909 2.83002 13.6909H5.53341L5.5332 16.3959ZM6.89597 16.3959C6.89597 14.907 8.11208 13.6909 9.60098 13.6909C11.0899 13.6909 12.306 14.9068 12.306 16.3959V23.1671C12.306 24.656 11.0901 25.8721 9.60098 25.8721C8.11208 25.8721 6.89597 24.656 6.89597 23.1671V16.3959Z" fill="url(#paint0_linear_195_8765)" />
                    <path d="M9.60098 5.53625C8.11208 5.53625 6.89597 4.32197 6.89597 2.83286C6.89597 1.34396 8.11208 0.128052 9.60098 0.128052C11.0899 0.128052 12.306 1.34416 12.306 2.83307V5.53646L9.60098 5.53625ZM9.60098 6.89902C11.0899 6.89902 12.306 8.11513 12.306 9.60404C12.306 11.0929 11.0901 12.3091 9.60098 12.3091H2.82981C1.34091 12.3091 0.125 11.0931 0.125 9.60404C0.125 8.11513 1.34111 6.89902 2.83002 6.89902H9.60098Z" fill="url(#paint1_linear_195_8765)" />
                    <path d="M20.4603 9.60404C20.4603 8.11513 21.6746 6.89902 23.1637 6.89902C24.6526 6.89902 25.8687 8.11513 25.8687 9.60404C25.8687 11.0929 24.6526 12.3091 23.1637 12.3091H20.4603V9.60404ZM19.0975 9.60404C19.0975 11.0929 17.8814 12.3091 16.3925 12.3091C14.9036 12.3091 13.6875 11.0931 13.6875 9.60404V2.83286C13.6875 1.34396 14.9034 0.128052 16.3925 0.128052C17.8814 0.128052 19.0975 1.34416 19.0975 2.83307V9.60404Z" fill="url(#paint2_linear_195_8765)" />
                    <path d="M16.3925 20.4637C17.8814 20.4637 19.0975 21.678 19.0975 23.1671C19.0975 24.656 17.8814 25.8721 16.3925 25.8721C14.9036 25.8721 13.6875 24.656 13.6875 23.1671V20.4637H16.3925ZM16.3925 19.1009C14.9036 19.1009 13.6875 17.8848 13.6875 16.3959C13.6875 14.907 14.9034 13.6909 16.3925 13.6909H23.1637C24.6526 13.6909 25.8687 14.9068 25.8687 16.3959C25.8687 17.8848 24.6526 19.1009 23.1637 19.1009H16.3925Z" fill="url(#paint3_linear_195_8765)" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_195_8765" x1="0.125" y1="13.6909" x2="13.4533" y2="15.112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E31930" />
                        <stop offset="1" stop-color="#F3576E" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_195_8765" x1="0.125" y1="0.128052" x2="13.4532" y2="1.54914" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E31930" />
                        <stop offset="1" stop-color="#F3576E" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_195_8765" x1="13.6875" y1="0.128052" x2="27.016" y2="1.54919" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E31930" />
                        <stop offset="1" stop-color="#F3576E" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_195_8765" x1="13.6875" y1="13.6909" x2="27.016" y2="15.112" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E31930" />
                        <stop offset="1" stop-color="#F3576E" />
                    </linearGradient>
                    <clipPath id="clip0_195_8765">
                        <rect width="26" height="26" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        ),
        redTwitter: (
            <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 3.13725C30.8222 3.68627 29.5526 4.04706 28.2371 4.21961C29.5832 3.38824 30.6233 2.07059 31.1128 0.486274C29.8432 1.27059 28.4359 1.81961 26.9522 2.13333C25.7438 0.784314 24.0459 0 22.1185 0C18.5239 0 15.587 3.01176 15.587 6.72941C15.587 7.26274 15.6482 7.78039 15.7553 8.26667C10.3098 7.98431 5.4608 5.30196 2.23327 1.23922C1.6673 2.22745 1.34608 3.38824 1.34608 4.61176C1.34608 6.94902 2.49331 9.01961 4.26769 10.1961C3.18164 10.1961 2.17208 9.88235 1.2849 9.41176V9.45882C1.2849 12.7216 3.54876 15.451 6.54685 16.0627C5.58429 16.3329 4.57376 16.3705 3.59465 16.1725C4.01011 17.5098 4.82377 18.6799 5.92125 19.5183C7.01873 20.3568 8.34485 20.8215 9.71319 20.8471C7.3937 22.7301 4.51854 23.7479 1.56023 23.7333C1.04015 23.7333 0.520077 23.702 0 23.6392C2.90631 25.5529 6.36329 26.6667 10.065 26.6667C22.1185 26.6667 28.7419 16.4078 28.7419 7.51372C28.7419 7.21569 28.7419 6.93333 28.7266 6.63529C30.0115 5.69412 31.1128 4.50196 32 3.13725Z" fill="url(#paint0_linear_195_8771)" />
                <defs>
                    <linearGradient id="paint0_linear_195_8771" x1="0" y1="0" x2="34.8415" y2="4.45786" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E31930" />
                        <stop offset="1" stop-color="#F3576E" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        AlgorithmIcon: (
            <svg width="121" height="123" viewBox="0 0 121 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3737 25.6562C17.3645 30.0341 12.2728 35.0105 10.0173 36.6454C2.07162 42.174 2.37393 42.9214 12.4668 44.6858C16.3572 45.3065 22.2822 47.3519 26.0493 49.4541C30.6472 51.9561 33.0108 52.6724 33.5073 51.816C34.5712 49.9808 28.9627 46.4025 20.7707 43.6149C14.1629 41.3372 14.0149 41.1696 16.2766 39.9471C20.1492 37.7785 33.8967 35.7767 40.0416 36.315C55.4683 37.9021 65.9999 49.4837 81.1833 81.6617C84.4902 88.6463 87.54 94.6645 87.9585 95.0706C89.6323 96.6948 90.5287 95.0077 92.1371 87.4398C94.1205 77.3921 97.3841 70.2116 100.89 67.8303C103.268 66.2664 103.873 66.2087 106.565 67.7692C110.847 70.2517 113.578 80.9076 112.285 90.0474C110.92 99.3096 110.958 100.231 112.601 99.7937C114.631 99.2538 116.325 87.7308 115.627 80.0521C115.173 75.62 114.401 72.7208 112.883 70.124C110.418 65.9162 105.247 62.4283 102.445 63.1739C97.7095 64.4337 92.9192 71.7099 89.9242 82.2337L88.1039 88.6162L84.6428 81.0518C79.1939 68.7388 70.5259 53.6605 65.3891 47.5767C62.4022 44.1287 57.7601 40.2933 53.5745 37.7851C44.9844 32.7234 37.9378 31.9077 25.0468 34.406L15.9051 36.2172L22.1122 29.5989C30.2529 20.9139 31.2717 19.2977 30.19 18.3437C29.7459 17.841 29.1341 17.4864 28.9408 17.5378C28.6509 17.6149 25.2863 21.304 21.3737 25.6562Z" fill="#9D2035" />
            </svg>
        ),
    }

    return (
        <span className={`flex ${props.className}`}>
            {props.IconName && IconList[props.IconName]}
        </span>
    )
}

export default Icons;
