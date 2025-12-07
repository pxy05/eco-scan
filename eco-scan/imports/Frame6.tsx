// LEGACY FIGMA EXPORT - REFERENCE ONLY
// This file is kept for reference but is not used in the React Native app.
// All screens have been converted to React Native components in the app/ directory.

import svgPaths from "./svg-62lm03s89z";
import imgImage17 from "figma:asset/1a0b868082d3b796cbe0d8516b1740b032e89651.png";
import imgImage12 from "figma:asset/1f839c4c277132ba5be0f2d22bbf6f2978f2b871.png";
import imgSource from "figma:asset/d1383aa904aa2ac981060499065c97955d094d63.png";
import imgImage18 from "figma:asset/9b60cd096b2933c4b28eb21c79e473aaf2555234.png";
import imgImage24 from "figma:asset/6d0226679e10092368049d71e8b97122b361e81e.png";
import imgEarth from "figma:asset/5c997bd5f58445fb5dcaf0042284dcb140cd3296.png";
import imgImage7 from "figma:asset/bd895c19faff0c0e5107a0962486c409605ef59d.png";
import imgImage10 from "figma:asset/a818736a91c445e4b9a23a120f5dd6e52921e818.png";
import imgBanner from "figma:asset/89a68d4d2e443dc9d128552198c6b4bb9fbaa707.png";
import imgBanner1 from "figma:asset/baf74e84966d0bf95bcc545f957ceb14388bfe31.png";
import imgBanner2 from "figma:asset/aceea4457e0c859fef9cb441fa2f20b3764d426e.png";
import imgBanner3 from "figma:asset/606d5b783d2b7d8ffc5798d04d3698077704ec14.png";
import imgImage21 from "figma:asset/4d6ecffa2e6d72d4d2ec83886277afe1aa542341.png";
import imgBanner4 from "figma:asset/affb1a17a2441ae681c8cbc6824da03a495654e4.png";
import imgImage14 from "figma:asset/f54d585bacb2d0346422290b03ba7715bb1276fb.png";
import imgImage22 from "figma:asset/7738ce515798cd0eebd6a58591d21cb89c7a9fb3.png";
import imgVideoTutorial from "figma:asset/854e416d028632fbfb1eb970935a074f612a2576.png";
import imgImage20 from "figma:asset/53875ae10641d89650e5900baac83461110a7534.png";
import imgLogo from "figma:asset/92375b66cc5f6db228cbba4fabc2bd6032c970de.png";

function TabBarItem() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[34px]" data-name="image 17">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage17}
                />
            </div>
        </div>
    );
}

function TabBarItem1() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 12">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage12}
                />
            </div>
        </div>
    );
}

function TabBarItem2() {
    return (
        <div
            className="content-stretch flex items-start mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[54px]" data-name="_source">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgSource}
                />
            </div>
        </div>
    );
}

function TabBarItem3() {
    return (
        <div
            className="content-stretch flex items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 18">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage18}
                />
            </div>
        </div>
    );
}

function TabBarItem4() {
    return (
        <div
            className="content-stretch flex h-[51px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[82px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[46px]" data-name="image 24">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage24}
                />
            </div>
        </div>
    );
}

function Tabs() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-center left-[calc(50%-7.5px)] overflow-clip pl-0 pr-[7px] py-0 top-[-48px] translate-x-[-50%] w-[430px]"
            data-name="Tabs"
        >
            <TabBarItem />
            <TabBarItem1 />
            <TabBarItem2 />
            <TabBarItem3 />
            <TabBarItem4 />
        </div>
    );
}

function HomeIndicator() {
    return (
        <div
            className="absolute h-[34px] left-[35px] top-[898px] w-[375px]"
            data-name="Home Indicator"
        >
            <div
                className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]"
                data-name="Home Indicator"
            />
            <Tabs />
        </div>
    );
}

function Frame() {
    return (
        <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-center justify-center leading-[0] not-italic relative shrink-0 text-black text-center w-full">
            <div className="flex flex-col h-[47px] justify-center relative shrink-0 text-[32px] w-[266px]">
                <p className="leading-[1.1]">Eco-Scan</p>
            </div>
            <div className="flex flex-col h-[47px] justify-center relative shrink-0 text-[0px] w-[349px]">
                <p className="leading-[1.1] text-[20px]">
                    <span className="font-['Poppins:Medium',sans-serif] not-italic">
                        Scan a shelf.
                    </span>
                    <span>{` Save a planet.`}</span>
                </p>
            </div>
        </div>
    );
}

function Earth() {
    return (
        <div
            className="absolute h-[204px] left-0 top-0 w-[296px]"
            data-name="Earth"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgEarth}
            />
        </div>
    );
}

function Earth1() {
    return (
        <div
            className="absolute contents left-[-41px] top-[118px]"
            data-name="Earth"
        >
            <Earth />
            <div
                className="absolute left-[70.68px] size-[154.637px] top-[24.68px]"
                data-name="image 7"
            >
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage7}
                />
            </div>
        </div>
    );
}

function SpeachBubbles() {
    return (
        <div
            className="absolute contents left-[206.06px] top-[131.63px]"
            data-name="Speach Bubbles"
        >
            <div
                className="absolute h-[159.57px] left-0 top-0 w-[211.942px]"
                data-name="image 10"
            >
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage10}
                />
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[70.688px] justify-center leading-[0] left-[116.58px] not-italic text-[16px] text-black text-center top-[73.33px] translate-x-[-50%] translate-y-[-50%] w-[163.532px]">
                <p className="leading-[1.1]">{`You’ve saved 50 fish so far this week! `}</p>
            </div>
        </div>
    );
}

function EarthContainer() {
    return (
        <div
            className="absolute contents left-[-41px] top-[118px]"
            data-name="Earth - Container"
        >
            <Earth1 />
            <SpeachBubbles />
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[43.063px] justify-center leading-[0] left-[106.73px] not-italic text-[16px] text-black text-center top-[347.47px] translate-x-[-50%] translate-y-[-50%] w-[231.1px]">
                <p className="leading-[1.1]">[User’s Earth Name]</p>
            </div>
        </div>
    );
}

function Frame2() {
    return (
        <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-0 top-[54px] w-[430px]">
            <Frame />
            <EarthContainer />
        </div>
    );
}

function Pagination() {
    return (
        <div
            className="absolute bottom-[7.98px] h-[5px] left-[calc(50%-0.5px)] translate-x-[-50%] w-[45px]"
            data-name="Pagination"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 45 5"
            >
                <g clipPath="url(#clip0_1_1121)" id="Pagination">
                    <circle
                        cx="2.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.8"
                        id="Selected"
                        r="2.5"
                    />
                    <circle
                        cx="12.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default"
                        r="2.5"
                    />
                    <circle
                        cx="22.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default_2"
                        r="2.5"
                    />
                    <circle
                        cx="32.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default_3"
                        r="2.5"
                    />
                    <circle
                        cx="42.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default_4"
                        r="2.5"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_1121">
                        <rect fill="white" height="5" width="45" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Banner() {
    return (
        <div
            className="absolute h-[190.979px] left-[26px] overflow-clip rounded-[8px] top-[436px] w-[378px]"
            data-name="Banner"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full"
                src={imgBanner}
            />
            <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] h-[58px] justify-center leading-[0] not-italic right-[7px] text-[18px] text-black text-right top-[calc(50%-50.49px)] tracking-[-0.36px] translate-y-[-50%] w-[332px]">
                <p className="leading-[1.4]">
                    Fun fact: Pears absorb more CO2 than oceans in their
                    lifetimes
                </p>
            </div>
            <Pagination />
        </div>
    );
}

function Pagination1() {
    return (
        <div
            className="absolute bottom-[7.98px] h-[5px] left-[calc(50%-0.5px)] translate-x-[-50%] w-[45px]"
            data-name="Pagination"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 45 5"
            >
                <g clipPath="url(#clip0_1_1121)" id="Pagination">
                    <circle
                        cx="2.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.8"
                        id="Selected"
                        r="2.5"
                    />
                    <circle
                        cx="12.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default"
                        r="2.5"
                    />
                    <circle
                        cx="22.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default_2"
                        r="2.5"
                    />
                    <circle
                        cx="32.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default_3"
                        r="2.5"
                    />
                    <circle
                        cx="42.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default_4"
                        r="2.5"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_1121">
                        <rect fill="white" height="5" width="45" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Banner1() {
    return (
        <div
            className="absolute h-[190.979px] left-[26px] overflow-clip rounded-[8px] top-[641.02px] w-[378px]"
            data-name="Banner"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full"
                src={imgBanner1}
            />
            <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[123px] justify-center leading-[0] left-[16px] not-italic text-[20px] text-black top-[calc(50%-8.77px)] tracking-[-0.4px] translate-y-[-50%] w-[155px]">
                <p className="leading-[1.4]">
                    Studies show that pears may help reduce...
                </p>
            </div>
            <Pagination1 />
        </div>
    );
}

function Group() {
    return (
        <div className="absolute contents left-[26px] top-[436px]">
            <Banner />
            <Banner1 />
        </div>
    );
}

function Time() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time />
        </div>
    );
}

function RightSide() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.97px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide />
            <RightSide />
        </div>
    );
}

function HomePage() {
    return (
        <div
            className="absolute bg-white h-[932px] left-[2120px] overflow-clip top-[1146px] w-[430px]"
            data-name="Home Page"
        >
            <HomeIndicator />
            <Frame2 />
            <Group />
            <StatusBar />
        </div>
    );
}

function TabBarItem5() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[34px]" data-name="image 17">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage17}
                />
            </div>
        </div>
    );
}

function TabBarItem6() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 12">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage12}
                />
            </div>
        </div>
    );
}

function TabBarItem7() {
    return (
        <div
            className="content-stretch flex items-start mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[54px]" data-name="_source">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgSource}
                />
            </div>
        </div>
    );
}

function TabBarItem8() {
    return (
        <div
            className="content-stretch flex items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 18">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage18}
                />
            </div>
        </div>
    );
}

function TabBarItem9() {
    return (
        <div
            className="content-stretch flex h-[51px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[82px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[46px]" data-name="image 24">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage24}
                />
            </div>
        </div>
    );
}

function Tabs1() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-center left-[calc(50%-7.5px)] overflow-clip pl-0 pr-[7px] py-0 top-[-48px] translate-x-[-50%] w-[430px]"
            data-name="Tabs"
        >
            <TabBarItem5 />
            <TabBarItem6 />
            <TabBarItem7 />
            <TabBarItem8 />
            <TabBarItem9 />
        </div>
    );
}

function HomeIndicator1() {
    return (
        <div
            className="absolute h-[34px] left-[35px] top-[898px] w-[375px]"
            data-name="Home Indicator"
        >
            <div
                className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]"
                data-name="Home Indicator"
            />
            <Tabs1 />
        </div>
    );
}

function Time1() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide1() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time1 />
        </div>
    );
}

function RightSide1() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.97px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar1() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide1 />
            <RightSide1 />
        </div>
    );
}

function Pagination2() {
    return (
        <div
            className="absolute bottom-[8px] h-[5px] left-1/2 translate-x-[-50%] w-[45px]"
            data-name="Pagination"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 45 5"
            >
                <g clipPath="url(#clip0_1_1121)" id="Pagination">
                    <circle
                        cx="2.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.8"
                        id="Selected"
                        r="2.5"
                    />
                    <circle
                        cx="12.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default"
                        r="2.5"
                    />
                    <circle
                        cx="22.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default_2"
                        r="2.5"
                    />
                    <circle
                        cx="32.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default_3"
                        r="2.5"
                    />
                    <circle
                        cx="42.5"
                        cy="2.5"
                        fill="var(--fill-0, black)"
                        fillOpacity="0.2"
                        id="Default_4"
                        r="2.5"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_1121">
                        <rect fill="white" height="5" width="45" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Banner2() {
    return (
        <div
            className="absolute h-[165px] left-[28px] overflow-clip rounded-[8px] top-[670px] w-[375px]"
            data-name="Banner"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full"
                src={imgBanner2}
            />
            <Pagination2 />
        </div>
    );
}

function Group1() {
    return (
        <div className="absolute contents left-[28px] top-[670px]">
            <Banner2 />
        </div>
    );
}

function Pagination3() {
    return (
        <div
            className="absolute bottom-[6px] left-1/2 size-[5px] translate-x-[-50%]"
            data-name="Pagination"
        />
    );
}

function Banner3() {
    return (
        <div
            className="absolute bg-[#fff8f8] border-2 border-black border-solid h-[39px] left-[13px] overflow-clip rounded-[8px] top-[14px] w-[353px]"
            data-name="Banner"
        >
            <Pagination3 />
        </div>
    );
}

function Group5() {
    return (
        <div className="absolute contents left-[13px] top-[14px]">
            <Banner3 />
        </div>
    );
}

function Pagination4() {
    return (
        <div
            className="absolute bottom-[6px] left-1/2 size-[5px] translate-x-[-50%]"
            data-name="Pagination"
        />
    );
}

function Banner4() {
    return (
        <div
            className="absolute bg-[#fff8f8] border-2 border-black border-solid h-[39px] left-[13px] overflow-clip rounded-[8px] top-[63px] w-[353px]"
            data-name="Banner"
        >
            <Pagination4 />
        </div>
    );
}

function Group6() {
    return (
        <div className="absolute contents left-[13px] top-[63px]">
            <Banner4 />
        </div>
    );
}

function Pagination5() {
    return (
        <div
            className="absolute bottom-[6px] left-1/2 size-[5px] translate-x-[-50%]"
            data-name="Pagination"
        />
    );
}

function Banner5() {
    return (
        <div
            className="absolute bg-[#fff8f8] border-2 border-black border-solid h-[39px] left-[13px] overflow-clip rounded-[8px] top-[112px] w-[353px]"
            data-name="Banner"
        >
            <Pagination5 />
        </div>
    );
}

function Group7() {
    return (
        <div className="absolute contents left-[13px] top-[112px]">
            <Banner5 />
        </div>
    );
}

function Banner6() {
    return (
        <div
            className="absolute bg-gradient-to-b from-[#c4c4c4] h-[165px] left-[28px] overflow-clip rounded-[8px] to-[#5e5e5e] top-[456px] w-[375px]"
            data-name="Banner"
        >
            <Group5 />
            <Group6 />
            <Group7 />
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[41px] justify-center leading-[0] left-[40.5px] not-italic text-[16px] text-black text-center top-[33.5px] translate-x-[-50%] translate-y-[-50%] w-[81px]">
                <p className="leading-[50px]">#1</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[41px] justify-center leading-[0] left-[40.5px] not-italic text-[16px] text-black text-center top-[83.5px] translate-x-[-50%] translate-y-[-50%] w-[81px]">
                <p className="leading-[50px]">#2</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] h-[41px] justify-center leading-[0] left-[40.5px] not-italic text-[16px] text-black text-center top-[133.5px] translate-x-[-50%] translate-y-[-50%] w-[81px]">
                <p className="leading-[50px]">#3</p>
            </div>
        </div>
    );
}

function Group2() {
    return (
        <div className="absolute contents left-[28px] top-[456px]">
            <Banner6 />
        </div>
    );
}

function Pagination6() {
    return (
        <div
            className="absolute bottom-[7px] left-1/2 size-[5px] translate-x-[-50%]"
            data-name="Pagination"
        />
    );
}

function Pagination7() {
    return (
        <div
            className="absolute bottom-[6px] left-1/2 size-[5px] translate-x-[-50%]"
            data-name="Pagination"
        />
    );
}

function Banner7() {
    return (
        <div
            className="absolute bg-[#fff8f8] border-2 border-black border-solid h-[44px] left-[196px] overflow-clip rounded-[8px] top-[14px] w-[167px]"
            data-name="Banner"
        >
            <Pagination7 />
        </div>
    );
}

function Group9() {
    return (
        <div className="absolute contents left-[195px] top-[13px]">
            <Banner7 />
        </div>
    );
}

function Banner8() {
    return (
        <div
            className="absolute bg-[#f1ecec] border border-black border-solid h-[338px] left-[28px] overflow-clip rounded-[8px] top-[70px] w-[375px]"
            data-name="Banner"
        >
            <Pagination6 />
            <Group9 />
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[278px] not-italic text-[16px] text-black text-center top-[35px] translate-x-[-50%] translate-y-[-50%] w-[196px]">
                <p className="leading-[50px]">Manage Friends</p>
            </div>
        </div>
    );
}

function Group3() {
    return (
        <div className="absolute contents left-[28px] top-[70px]">
            <Banner8 />
        </div>
    );
}

function Pagination8() {
    return (
        <div
            className="absolute bottom-[6px] left-1/2 size-[5px] translate-x-[-50%]"
            data-name="Pagination"
        />
    );
}

function Banner9() {
    return (
        <div
            className="absolute bg-[#fff8f8] border-2 border-black border-solid h-[44px] left-[38px] overflow-clip rounded-[8px] top-[84px] w-[167px]"
            data-name="Banner"
        >
            <Pagination8 />
        </div>
    );
}

function Group4() {
    return (
        <div className="absolute contents left-[38px] top-[84px]">
            <Banner9 />
        </div>
    );
}

function HotItemsSign() {
    return (
        <div
            className="absolute content-stretch flex gap-[127px] items-center leading-[0] left-[120px] not-italic px-[4px] py-[3px] text-black top-[621px]"
            data-name="HOT ITEMS SIGN"
        >
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[41px] justify-center relative shrink-0 text-[32px] tracking-[-0.64px] w-[28px]">
                <p className="leading-[1.4]">🔥</p>
            </div>
            <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[41px] justify-center relative shrink-0 text-[32px] tracking-[-0.64px] w-[28px]">
                <p className="leading-[1.4]">🔥</p>
            </div>
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center left-[98px] text-[24px] text-center top-[25px] translate-x-[-50%] translate-y-[-50%] w-[196px]">
                <p className="leading-[50px]">Hot Items</p>
            </div>
        </div>
    );
}

function LeaderboardSign() {
    return (
        <div
            className="absolute content-stretch flex font-['Poppins:Medium',sans-serif] items-center justify-center leading-[0] left-[102px] not-italic text-[24px] text-black text-center top-[406px]"
            data-name="LEADERBOARD SIGN"
        >
            <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
                <p className="leading-[50px] whitespace-pre">🏆</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 w-[196px]">
                <p className="leading-[50px]">Leaderboard</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0 text-nowrap">
                <p className="leading-[50px] whitespace-pre">🏆</p>
            </div>
        </div>
    );
}

function SocialPage() {
    return (
        <div
            className="absolute bg-white h-[932px] left-[2120px] overflow-clip top-[3438px] w-[430px]"
            data-name="Social Page"
        >
            <HomeIndicator1 />
            <StatusBar1 />
            <Group1 />
            <Group2 />
            <Group3 />
            <Group4 />
            <HotItemsSign />
            <div className="absolute flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] left-[121px] not-italic text-[16px] text-black text-center top-[106px] translate-x-[-50%] translate-y-[-50%] w-[196px]">
                <p className="leading-[50px]">Add Friends</p>
            </div>
            <LeaderboardSign />
        </div>
    );
}

function TabBarItem10() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[34px]" data-name="image 17">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage17}
                />
            </div>
        </div>
    );
}

function TabBarItem11() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 12">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage12}
                />
            </div>
        </div>
    );
}

function TabBarItem12() {
    return (
        <div
            className="content-stretch flex items-start mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[54px]" data-name="_source">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgSource}
                />
            </div>
        </div>
    );
}

function TabBarItem13() {
    return (
        <div
            className="content-stretch flex items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 18">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage18}
                />
            </div>
        </div>
    );
}

function TabBarItem14() {
    return (
        <div
            className="content-stretch flex h-[51px] items-center justify-center pb-[8px] pt-[12px] px-[26px] relative w-[82px]"
            data-name="Tab Bar Item"
        >
            <div
                className="flex items-center justify-center relative shrink-0 size-[46px]"
                style={
                    {
                        "--transform-inner-width": "46",
                        "--transform-inner-height": "46",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <div className="relative size-[46px]" data-name="image 24">
                        <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                            src={imgImage24}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tabs2() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-center left-[calc(50%-7.5px)] overflow-clip pl-0 pr-[7px] py-0 top-[-48px] translate-x-[-50%] w-[430px]"
            data-name="Tabs"
        >
            <TabBarItem10 />
            <TabBarItem11 />
            <TabBarItem12 />
            <TabBarItem13 />
            <div
                className="flex h-[82px] items-center justify-center mr-[-7px] relative shrink-0 w-[51px]"
                style={
                    {
                        "--transform-inner-width": "82",
                        "--transform-inner-height": "51",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[270deg]">
                    <TabBarItem14 />
                </div>
            </div>
        </div>
    );
}

function HomeIndicator2() {
    return (
        <div
            className="absolute h-[34px] left-[35px] top-[898px] w-[375px]"
            data-name="Home Indicator"
        >
            <div
                className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]"
                data-name="Home Indicator"
            />
            <Tabs2 />
        </div>
    );
}

function Time2() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide2() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time2 />
        </div>
    );
}

function RightSide2() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.969px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar2() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide2 />
            <RightSide2 />
        </div>
    );
}

function Banner10() {
    return (
        <div
            className="h-[385px] overflow-clip relative rounded-[8px] w-[791px]"
            data-name="Banner"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full"
                src={imgBanner3}
            />
            <div className="absolute left-[128px] size-[100px] top-[566px]">
                <div className="absolute bottom-[-8%] left-[-4%] right-[-4%] top-0">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 108 108"
                    >
                        <g filter="url(#filter0_d_1_1080)" id="Ellipse 1">
                            <circle
                                cx="54"
                                cy="50"
                                fill="var(--fill-0, white)"
                                fillOpacity="0.75"
                                r="50"
                                shapeRendering="crispEdges"
                            />
                            <circle
                                cx="54"
                                cy="50"
                                r="47.5"
                                shapeRendering="crispEdges"
                                stroke="var(--stroke-0, black)"
                                strokeOpacity="0.75"
                                strokeWidth="5"
                            />
                        </g>
                        <defs>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="108"
                                id="filter0_d_1_1080"
                                width="108"
                                x="0"
                                y="0"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    in2="BackgroundImageFix"
                                    mode="normal"
                                    result="effect1_dropShadow_1_1080"
                                />
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_1080"
                                    mode="normal"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div
                className="absolute flex items-center justify-center left-[669px] size-[100px] top-[143px]"
                style={
                    {
                        "--transform-inner-width": "100",
                        "--transform-inner-height": "100",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[270deg]">
                    <div className="relative size-[100px]">
                        <div className="absolute bottom-[-8%] left-[-4%] right-[-4%] top-0">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 108 108"
                            >
                                <g
                                    filter="url(#filter0_d_1_1097)"
                                    id="Ellipse 2"
                                >
                                    <circle
                                        cx="54"
                                        cy="50"
                                        fill="var(--fill-0, white)"
                                        fillOpacity="0.75"
                                        r="50"
                                        shapeRendering="crispEdges"
                                    />
                                    <circle
                                        cx="54"
                                        cy="50"
                                        r="47.5"
                                        shapeRendering="crispEdges"
                                        stroke="var(--stroke-0, black)"
                                        strokeOpacity="0.75"
                                        strokeWidth="5"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                        height="108"
                                        id="filter0_d_1_1097"
                                        width="108"
                                        x="0"
                                        y="0"
                                    >
                                        <feFlood
                                            floodOpacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            result="hardAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite
                                            in2="hardAlpha"
                                            operator="out"
                                        />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        />
                                        <feBlend
                                            in2="BackgroundImageFix"
                                            mode="normal"
                                            result="effect1_dropShadow_1_1097"
                                        />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_1_1097"
                                            mode="normal"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Group10() {
    return (
        <div className="absolute contents left-[25px] top-[59px]">
            <div
                className="absolute flex h-[791px] items-center justify-center left-[25px] top-[59px] w-[385px]"
                style={
                    {
                        "--transform-inner-width": "791",
                        "--transform-inner-height": "385",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <Banner10 />
                </div>
            </div>
        </div>
    );
}

function ScanPage1() {
    return (
        <div
            className="bg-white h-[932px] overflow-clip relative w-[430px]"
            data-name="Scan-page-2"
        >
            <HomeIndicator2 />
            <StatusBar2 />
            <Group10 />
        </div>
    );
}

function TabBarItem15() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[34px]" data-name="image 17">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage17}
                />
            </div>
        </div>
    );
}

function TabBarItem16() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 12">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage12}
                />
            </div>
        </div>
    );
}

function TabBarItem17() {
    return (
        <div
            className="content-stretch flex items-start mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[54px]" data-name="_source">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgSource}
                />
            </div>
        </div>
    );
}

function TabBarItem18() {
    return (
        <div
            className="content-stretch flex items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 18">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage18}
                />
            </div>
        </div>
    );
}

function TabBarItem19() {
    return (
        <div
            className="content-stretch flex h-[51px] items-center justify-center pb-[8px] pt-[12px] px-[26px] relative w-[82px]"
            data-name="Tab Bar Item"
        >
            <div
                className="flex items-center justify-center relative shrink-0 size-[46px]"
                style={
                    {
                        "--transform-inner-width": "46",
                        "--transform-inner-height": "46",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <div className="relative size-[46px]" data-name="image 24">
                        <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                            src={imgImage24}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tabs3() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-center left-[calc(50%-7.5px)] overflow-clip pl-0 pr-[7px] py-0 top-[-48px] translate-x-[-50%] w-[430px]"
            data-name="Tabs"
        >
            <TabBarItem15 />
            <TabBarItem16 />
            <TabBarItem17 />
            <TabBarItem18 />
            <div
                className="flex h-[82px] items-center justify-center mr-[-7px] relative shrink-0 w-[51px]"
                style={
                    {
                        "--transform-inner-width": "82",
                        "--transform-inner-height": "51",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[270deg]">
                    <TabBarItem19 />
                </div>
            </div>
        </div>
    );
}

function HomeIndicator3() {
    return (
        <div
            className="absolute h-[34px] left-[35px] top-[898px] w-[375px]"
            data-name="Home Indicator"
        >
            <div
                className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]"
                data-name="Home Indicator"
            />
            <Tabs3 />
        </div>
    );
}

function Time3() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide3() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time3 />
        </div>
    );
}

function RightSide3() {
    return (
        <div
            className="h-[14.959px] relative shrink-0 w-[87.969px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar3() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide3 />
            <RightSide3 />
        </div>
    );
}

function Button() {
    return (
        <div
            className="absolute bg-white h-[245px] left-[267px] opacity-75 rounded-[8px] top-[80px] w-[365px]"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border-[5px] border-black border-solid inset-[-5px] pointer-events-none rounded-[13px]"
            />
        </div>
    );
}

function Banner11() {
    return (
        <div
            className="h-[395px] overflow-clip relative rounded-[8px] w-[779px]"
            data-name="Banner"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full"
                src={imgBanner3}
            />
            <div className="absolute left-[128px] size-[100px] top-[566px]">
                <div className="absolute bottom-[-8%] left-[-4%] right-[-4%] top-0">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 108 108"
                    >
                        <g filter="url(#filter0_d_1_1080)" id="Ellipse 1">
                            <circle
                                cx="54"
                                cy="50"
                                fill="var(--fill-0, white)"
                                fillOpacity="0.75"
                                r="50"
                                shapeRendering="crispEdges"
                            />
                            <circle
                                cx="54"
                                cy="50"
                                r="47.5"
                                shapeRendering="crispEdges"
                                stroke="var(--stroke-0, black)"
                                strokeOpacity="0.75"
                                strokeWidth="5"
                            />
                        </g>
                        <defs>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="108"
                                id="filter0_d_1_1080"
                                width="108"
                                x="0"
                                y="0"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    in2="BackgroundImageFix"
                                    mode="normal"
                                    result="effect1_dropShadow_1_1080"
                                />
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_1080"
                                    mode="normal"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <div
                className="absolute flex items-center justify-center left-[661px] size-[100px] top-[148px]"
                style={
                    {
                        "--transform-inner-width": "100",
                        "--transform-inner-height": "100",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[270deg]">
                    <div className="relative size-[100px]">
                        <div className="absolute bottom-[-8%] left-[-4%] right-[-4%] top-0">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 108 108"
                            >
                                <g
                                    filter="url(#filter0_d_1_1102)"
                                    id="Ellipse 3"
                                >
                                    <circle
                                        cx="54"
                                        cy="50"
                                        fill="var(--fill-0, white)"
                                        fillOpacity="0.75"
                                        r="50"
                                        shapeRendering="crispEdges"
                                    />
                                    <circle
                                        cx="54"
                                        cy="50"
                                        r="47.5"
                                        shapeRendering="crispEdges"
                                        stroke="var(--stroke-0, black)"
                                        strokeOpacity="0.75"
                                        strokeWidth="5"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                        height="108"
                                        id="filter0_d_1_1102"
                                        width="108"
                                        x="0"
                                        y="0"
                                    >
                                        <feFlood
                                            floodOpacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            result="hardAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite
                                            in2="hardAlpha"
                                            operator="out"
                                        />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        />
                                        <feBlend
                                            in2="BackgroundImageFix"
                                            mode="normal"
                                            result="effect1_dropShadow_1_1102"
                                        />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_1_1102"
                                            mode="normal"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute flex h-[37px] items-center justify-center left-[128px] top-[154.5px] w-[128px]"
                style={
                    {
                        "--transform-inner-width": "133.234375",
                        "--transform-inner-height": "0",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[16.123deg]">
                    <div className="h-0 relative w-[133.24px]">
                        <div className="absolute inset-[-18.41px_-4.88%_-26.41px_-3%]">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 144 45"
                            >
                                <g filter="url(#filter0_d_1_1104)" id="Arrow 1">
                                    <path
                                        d={svgPaths.p8001e00}
                                        fill="var(--stroke-0, white)"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                        height="44.8198"
                                        id="filter0_d_1_1104"
                                        width="143.74"
                                        x="0"
                                        y="0"
                                    >
                                        <feFlood
                                            floodOpacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            result="hardAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite
                                            in2="hardAlpha"
                                            operator="out"
                                        />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        />
                                        <feBlend
                                            in2="BackgroundImageFix"
                                            mode="normal"
                                            result="effect1_dropShadow_1_1104"
                                        />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_1_1104"
                                            mode="normal"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Button />
        </div>
    );
}

function Button1() {
    return (
        <div
            className="bg-[#3da33d] blur-[2px] filter h-[128.657px] opacity-50 relative rounded-[8px] w-[147.132px]"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border-[10px] border-black border-solid inset-[-10px] pointer-events-none rounded-[18px]"
            />
        </div>
    );
}

function Button2() {
    return (
        <div
            className="bg-[#3da33d] blur-[2px] filter h-[48.529px] opacity-50 relative rounded-[8px] w-[147.132px]"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border-[10px] border-black border-solid inset-[-10px] pointer-events-none rounded-[18px]"
            />
        </div>
    );
}

function Goodbox() {
    return (
        <div
            className="absolute contents left-[207.47px] top-[84.09px]"
            data-name="GOODBOX"
        >
            <div
                className="absolute flex h-[147.132px] items-center justify-center left-[207.47px] top-[84.09px] w-[128.657px]"
                style={
                    {
                        "--transform-inner-width": "147.125",
                        "--transform-inner-height": "128.65625",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <Button1 />
                </div>
            </div>
            <div
                className="absolute flex h-[147.132px] items-center justify-center left-[287.6px] top-[84.09px] w-[48.529px]"
                style={
                    {
                        "--transform-inner-width": "147.125",
                        "--transform-inner-height": "48.515625",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <Button2 />
                </div>
            </div>
            <div
                className="absolute flex h-[131.164px] items-center justify-center left-[310.74px] top-[157.66px] translate-x-[-50%] translate-y-[-50%] w-[53.043px]"
                style={
                    {
                        "--transform-inner-width": "131.15625",
                        "--transform-inner-height": "53.03125",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <div className="flex flex-col font-['M_PLUS_1_Code:Medium',sans-serif] font-medium h-[53.043px] justify-center leading-[0] opacity-75 relative text-[32px] text-center text-white w-[131.164px]">
                        <p className="leading-[1.4]">GOOD</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ScanPage3() {
    return (
        <div
            className="bg-white h-[932px] overflow-clip relative w-[430px]"
            data-name="Scan-page-4"
        >
            <HomeIndicator3 />
            <StatusBar3 />
            <div
                className="absolute flex h-[779px] items-center justify-center left-[19px] top-[59px] w-[395px]"
                style={
                    {
                        "--transform-inner-width": "779",
                        "--transform-inner-height": "395",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <Banner11 />
                </div>
            </div>
            <Goodbox />
            <div
                className="absolute flex h-[354px] items-center justify-center left-[155px] top-[330px] w-[170px]"
                style={
                    {
                        "--transform-inner-width": "354",
                        "--transform-inner-height": "170",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <div
                        className="h-[170px] opacity-75 relative w-[354px]"
                        data-name="image 21"
                    >
                        <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                            src={imgImage21}
                        />
                    </div>
                </div>
            </div>
            <div
                className="absolute flex h-[360px] items-center justify-center left-[90px] top-[512px] translate-y-[-50%] w-[62px]"
                style={
                    {
                        "--transform-inner-width": "360",
                        "--transform-inner-height": "62",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[62px] justify-center leading-[0] not-italic relative text-[8px] text-black w-[360px]">
                        <p className="leading-[1.4]">
                            This product achieves its GOOD score due to its high
                            use of renewable energy and excellent Fair Trade
                            certification status. While its water usage and
                            initial Carbon Footprint are slightly higher than
                            industry average for breakfast cereals, the
                            packaging is 95% certified recyclable, offering a
                            substantial benefit at the end-of-life stage. This
                            makes it a strong overall choice in this category.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function TabBarItem20() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[34px]" data-name="image 17">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage17}
                />
            </div>
        </div>
    );
}

function TabBarItem21() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 12">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage12}
                />
            </div>
        </div>
    );
}

function TabBarItem22() {
    return (
        <div
            className="content-stretch flex items-start mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[54px]" data-name="_source">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgSource}
                />
            </div>
        </div>
    );
}

function TabBarItem23() {
    return (
        <div
            className="content-stretch flex items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 18">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage18}
                />
            </div>
        </div>
    );
}

function TabBarItem24() {
    return (
        <div
            className="content-stretch flex h-[51px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[82px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[46px]" data-name="image 24">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage24}
                />
            </div>
        </div>
    );
}

function Tabs4() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-center left-[calc(50%-7.5px)] overflow-clip pl-0 pr-[7px] py-0 top-[-48px] translate-x-[-50%] w-[430px]"
            data-name="Tabs"
        >
            <TabBarItem20 />
            <TabBarItem21 />
            <TabBarItem22 />
            <TabBarItem23 />
            <TabBarItem24 />
        </div>
    );
}

function HomeIndicator4() {
    return (
        <div
            className="absolute h-[34px] left-[35px] top-[898px] w-[375px]"
            data-name="Home Indicator"
        >
            <div
                className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]"
                data-name="Home Indicator"
            />
            <Tabs4 />
        </div>
    );
}

function Time4() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide4() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time4 />
        </div>
    );
}

function RightSide4() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.969px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar4() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide4 />
            <RightSide4 />
        </div>
    );
}

function Button3() {
    return (
        <div
            className="absolute bg-[#f3c746] blur-[2px] filter h-[121px] left-[328px] opacity-50 rounded-[8px] top-[215px] w-[196px]"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border-[10px] border-black border-solid inset-[-10px] pointer-events-none rounded-[18px]"
            />
        </div>
    );
}

function Button4() {
    return (
        <div
            className="absolute bg-[#f3c746] blur-[2px] filter h-[41px] left-[328px] opacity-50 rounded-[8px] top-[215px] w-[196px]"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border-[10px] border-black border-solid inset-[-10px] pointer-events-none rounded-[18px]"
            />
        </div>
    );
}

function Okaybox() {
    return (
        <div
            className="absolute contents left-[328px] top-[212px]"
            data-name="OKAYBOX"
        >
            <Button3 />
            <Button4 />
            <div className="absolute flex flex-col font-['M_PLUS_1_Code:Medium',sans-serif] font-medium h-[47px] justify-center leading-[0] left-[426.5px] opacity-75 text-[32px] text-center text-white top-[235.5px] translate-x-[-50%] translate-y-[-50%] w-[115px]">
                <p className="leading-[1.4]">OKAY</p>
            </div>
        </div>
    );
}

function Button5() {
    return (
        <div
            className="absolute bg-[#d2222d] blur-[2px] filter h-[124px] left-[524px] opacity-50 rounded-[8px] top-[69px] w-[149px]"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border-[10px] border-black border-solid inset-[-10px] pointer-events-none rounded-[18px]"
            />
        </div>
    );
}

function Button6() {
    return (
        <div
            className="absolute bg-[#d2222d] blur-[2px] filter h-[44px] left-[524px] opacity-50 rounded-[8px] top-[68px] w-[149px]"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border-[10px] border-black border-solid inset-[-10px] pointer-events-none rounded-[18px]"
            />
        </div>
    );
}

function Badbox() {
    return (
        <div
            className="absolute contents left-[524px] top-[68px]"
            data-name="BADBOX"
        >
            <Button5 />
            <Button6 />
            <div className="absolute flex flex-col font-['M_PLUS_1_Code:Medium',sans-serif] font-medium h-[47px] justify-center leading-[0] left-[598.5px] opacity-75 text-[32px] text-center text-white top-[91.5px] translate-x-[-50%] translate-y-[-50%] w-[115px]">
                <p className="leading-[1.4]">BAD</p>
            </div>
        </div>
    );
}

function Banner12() {
    return (
        <div
            className="h-[385px] overflow-clip relative rounded-[8px] w-[791px]"
            data-name="Banner"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full"
                src={imgBanner3}
            />
            <div className="absolute left-[128px] size-[100px] top-[566px]">
                <div className="absolute bottom-[-8%] left-[-4%] right-[-4%] top-0">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 108 108"
                    >
                        <g filter="url(#filter0_d_1_1080)" id="Ellipse 1">
                            <circle
                                cx="54"
                                cy="50"
                                fill="var(--fill-0, white)"
                                fillOpacity="0.75"
                                r="50"
                                shapeRendering="crispEdges"
                            />
                            <circle
                                cx="54"
                                cy="50"
                                r="47.5"
                                shapeRendering="crispEdges"
                                stroke="var(--stroke-0, black)"
                                strokeOpacity="0.75"
                                strokeWidth="5"
                            />
                        </g>
                        <defs>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="108"
                                id="filter0_d_1_1080"
                                width="108"
                                x="0"
                                y="0"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    in2="BackgroundImageFix"
                                    mode="normal"
                                    result="effect1_dropShadow_1_1080"
                                />
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_1080"
                                    mode="normal"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <Okaybox />
            <div
                className="absolute flex items-center justify-center left-[660.6px] size-[100px] top-[149.5px]"
                style={
                    {
                        "--transform-inner-width": "100",
                        "--transform-inner-height": "100",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[270deg]">
                    <div className="relative size-[100px]">
                        <div className="absolute bottom-[-8%] left-[-4%] right-[-4%] top-0">
                            <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 108 108"
                            >
                                <g
                                    filter="url(#filter0_d_1_1063)"
                                    id="Ellipse 3"
                                >
                                    <path
                                        d={svgPaths.p115fc600}
                                        fill="var(--fill-0, white)"
                                        fillOpacity="0.75"
                                        shapeRendering="crispEdges"
                                    />
                                    <path
                                        d={svgPaths.p393e0500}
                                        shapeRendering="crispEdges"
                                        stroke="var(--stroke-0, black)"
                                        strokeOpacity="0.75"
                                        strokeWidth="5"
                                    />
                                </g>
                                <defs>
                                    <filter
                                        colorInterpolationFilters="sRGB"
                                        filterUnits="userSpaceOnUse"
                                        height="108"
                                        id="filter0_d_1_1063"
                                        width="108"
                                        x="0"
                                        y="0"
                                    >
                                        <feFlood
                                            floodOpacity="0"
                                            result="BackgroundImageFix"
                                        />
                                        <feColorMatrix
                                            in="SourceAlpha"
                                            result="hardAlpha"
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite
                                            in2="hardAlpha"
                                            operator="out"
                                        />
                                        <feColorMatrix
                                            type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                        />
                                        <feBlend
                                            in2="BackgroundImageFix"
                                            mode="normal"
                                            result="effect1_dropShadow_1_1063"
                                        />
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="effect1_dropShadow_1_1063"
                                            mode="normal"
                                            result="shape"
                                        />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <Badbox />
        </div>
    );
}

function Button7() {
    return (
        <div
            className="bg-[#3da33d] blur-[2px] filter h-[125.4px] opacity-50 relative rounded-[8px] w-[149.398px]"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border-[10px] border-black border-solid inset-[-10px] pointer-events-none rounded-[18px]"
            />
        </div>
    );
}

function Button8() {
    return (
        <div
            className="bg-[#3da33d] blur-[2px] filter h-[47.3px] opacity-50 relative rounded-[8px] w-[149.398px]"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border-[10px] border-black border-solid inset-[-10px] pointer-events-none rounded-[18px]"
            />
        </div>
    );
}

function Goodbox1() {
    return (
        <div
            className="absolute contents left-[208.7px] top-[84.48px]"
            data-name="GOODBOX"
        >
            <div
                className="absolute flex h-[149.398px] items-center justify-center left-[208.7px] top-[84.48px] w-[125.4px]"
                style={
                    {
                        "--transform-inner-width": "149.390625",
                        "--transform-inner-height": "125.390625",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <Button7 />
                </div>
            </div>
            <div
                className="absolute flex h-[149.398px] items-center justify-center left-[286.8px] top-[84.48px] w-[47.3px]"
                style={
                    {
                        "--transform-inner-width": "149.390625",
                        "--transform-inner-height": "47.296875",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <Button8 />
                </div>
            </div>
            <div
                className="absolute flex h-[133.184px] items-center justify-center left-[309.35px] top-[159.18px] translate-x-[-50%] translate-y-[-50%] w-[51.7px]"
                style={
                    {
                        "--transform-inner-width": "133.171875",
                        "--transform-inner-height": "51.6875",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <div className="flex flex-col font-['M_PLUS_1_Code:Medium',sans-serif] font-medium h-[51.7px] justify-center leading-[0] opacity-75 relative text-[32px] text-center text-white w-[133.184px]">
                        <p className="leading-[1.4]">GOOD</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ScanPage2() {
    return (
        <div
            className="bg-white h-[932px] overflow-clip relative w-[430px]"
            data-name="Scan-page-3"
        >
            <HomeIndicator4 />
            <StatusBar4 />
            <div
                className="absolute flex h-[791px] items-center justify-center left-[25px] top-[59px] w-[385px]"
                style={
                    {
                        "--transform-inner-width": "791",
                        "--transform-inner-height": "385",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[90deg]">
                    <Banner12 />
                </div>
            </div>
            <Goodbox1 />
        </div>
    );
}

function TabBarItem25() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[34px]" data-name="image 17">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage17}
                />
            </div>
        </div>
    );
}

function TabBarItem26() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 12">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage12}
                />
            </div>
        </div>
    );
}

function TabBarItem27() {
    return (
        <div
            className="content-stretch flex items-start mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[54px]" data-name="_source">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgSource}
                />
            </div>
        </div>
    );
}

function TabBarItem28() {
    return (
        <div
            className="content-stretch flex items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 18">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage18}
                />
            </div>
        </div>
    );
}

function TabBarItem29() {
    return (
        <div
            className="content-stretch flex h-[51px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[82px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[46px]" data-name="image 24">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage24}
                />
            </div>
        </div>
    );
}

function Tabs5() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-center left-[calc(50%-7.5px)] overflow-clip pl-0 pr-[7px] py-0 top-[-48px] translate-x-[-50%] w-[430px]"
            data-name="Tabs"
        >
            <TabBarItem25 />
            <TabBarItem26 />
            <TabBarItem27 />
            <TabBarItem28 />
            <TabBarItem29 />
        </div>
    );
}

function HomeIndicator5() {
    return (
        <div
            className="absolute h-[34px] left-[35px] top-[898px] w-[375px]"
            data-name="Home Indicator"
        >
            <div
                className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]"
                data-name="Home Indicator"
            />
            <Tabs5 />
        </div>
    );
}

function Time5() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide5() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time5 />
        </div>
    );
}

function RightSide5() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.97px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar5() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide5 />
            <RightSide5 />
        </div>
    );
}

function Banner13() {
    return (
        <div
            className="absolute h-[791px] left-[20px] overflow-clip rounded-[8px] top-[59px] w-[390px]"
            data-name="Banner"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full"
                src={imgBanner4}
            />
            <div className="absolute left-[145px] size-[100px] top-[670px]">
                <div className="absolute bottom-[-8%] left-[-4%] right-[-4%] top-0">
                    <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 108 108"
                    >
                        <g filter="url(#filter0_d_1_1061)" id="Ellipse 1">
                            <circle
                                cx="54"
                                cy="50"
                                fill="var(--fill-0, white)"
                                fillOpacity="0.75"
                                r="50"
                                shapeRendering="crispEdges"
                            />
                            <circle
                                cx="54"
                                cy="50"
                                r="47.5"
                                shapeRendering="crispEdges"
                                stroke="var(--stroke-0, black)"
                                strokeOpacity="0.75"
                                strokeWidth="5"
                            />
                        </g>
                        <defs>
                            <filter
                                colorInterpolationFilters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="108"
                                id="filter0_d_1_1061"
                                width="108"
                                x="0"
                                y="0"
                            >
                                <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    result="hardAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend
                                    in2="BackgroundImageFix"
                                    mode="normal"
                                    result="effect1_dropShadow_1_1061"
                                />
                                <feBlend
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_1_1061"
                                    mode="normal"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
}

function ScanPage() {
    return (
        <div
            className="absolute bg-white h-[932px] left-[2791px] overflow-clip top-[1146px] w-[430px]"
            data-name="Scan-page-1"
        >
            <HomeIndicator5 />
            <StatusBar5 />
            <Banner13 />
        </div>
    );
}

function TabBarItem30() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[34px]" data-name="image 17">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage17}
                />
            </div>
        </div>
    );
}

function TabBarItem31() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 12">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage12}
                />
            </div>
        </div>
    );
}

function TabBarItem32() {
    return (
        <div
            className="content-stretch flex items-start mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[54px]" data-name="_source">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgSource}
                />
            </div>
        </div>
    );
}

function TabBarItem33() {
    return (
        <div
            className="content-stretch flex items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 18">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage18}
                />
            </div>
        </div>
    );
}

function TabBarItem34() {
    return (
        <div
            className="content-stretch flex h-[51px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[82px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[46px]" data-name="image 24">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage24}
                />
            </div>
        </div>
    );
}

function Tabs6() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-center left-[calc(50%-7.5px)] overflow-clip pl-0 pr-[7px] py-0 top-[-48px] translate-x-[-50%] w-[430px]"
            data-name="Tabs"
        >
            <TabBarItem30 />
            <TabBarItem31 />
            <TabBarItem32 />
            <TabBarItem33 />
            <TabBarItem34 />
        </div>
    );
}

function HomeIndicator6() {
    return (
        <div
            className="absolute h-[34px] left-[35px] top-[898px] w-[375px]"
            data-name="Home Indicator"
        >
            <div
                className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]"
                data-name="Home Indicator"
            />
            <Tabs6 />
        </div>
    );
}

function Time6() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide6() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time6 />
        </div>
    );
}

function RightSide6() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.97px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar6() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide6 />
            <RightSide6 />
        </div>
    );
}

function SettingsHeader() {
    return (
        <div
            className="absolute h-[50px] left-0 top-0 w-[430px]"
            data-name="Settings Header"
        >
            <div
                className="absolute left-[16px] size-[50px] top-0"
                data-name="image 14"
            >
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage14}
                />
            </div>
            <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] left-[149px] not-italic text-[36px] text-black text-center top-0 tracking-[-0.72px] translate-x-[-50%] w-[166px]">
                Settings
            </p>
        </div>
    );
}

function IconMenu() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="Icon/Menu">
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
            >
                <g id="Icon/Menu">
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p175d4b00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.pa7b1d00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_2"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p28ac8200}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_3"
                    />
                </g>
            </svg>
        </div>
    );
}

function SettingsOption() {
    return (
        <div
            className="content-stretch flex gap-[20px] items-center relative shrink-0"
            data-name="Settings Option"
        >
            <IconMenu />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap tracking-[-0.4px] whitespace-pre">
                Account Information
            </p>
        </div>
    );
}

function IconMenu1() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="Icon/Menu">
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
            >
                <g id="Icon/Menu">
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p175d4b00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.pa7b1d00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_2"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p28ac8200}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_3"
                    />
                </g>
            </svg>
        </div>
    );
}

function SettingsOption1() {
    return (
        <div
            className="content-stretch flex gap-[20px] items-center relative shrink-0"
            data-name="Settings Option"
        >
            <IconMenu1 />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap tracking-[-0.4px] whitespace-pre">
                Privacy
            </p>
        </div>
    );
}

function IconMenu2() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="Icon/Menu">
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
            >
                <g id="Icon/Menu">
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p175d4b00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.pa7b1d00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_2"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p28ac8200}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_3"
                    />
                </g>
            </svg>
        </div>
    );
}

function SettingsOption2() {
    return (
        <div
            className="content-stretch flex gap-[20px] items-center relative shrink-0"
            data-name="Settings Option"
        >
            <IconMenu2 />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap tracking-[-0.4px] whitespace-pre">
                Budget
            </p>
        </div>
    );
}

function IconMenu3() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="Icon/Menu">
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
            >
                <g id="Icon/Menu">
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p175d4b00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.pa7b1d00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_2"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p28ac8200}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_3"
                    />
                </g>
            </svg>
        </div>
    );
}

function SettingsOption3() {
    return (
        <div
            className="content-stretch flex gap-[20px] items-center relative shrink-0"
            data-name="Settings Option"
        >
            <IconMenu3 />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap tracking-[-0.4px] whitespace-pre">
                Accessibility
            </p>
        </div>
    );
}

function IconMenu4() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="Icon/Menu">
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
            >
                <g id="Icon/Menu">
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p175d4b00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.pa7b1d00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_2"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p28ac8200}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_3"
                    />
                </g>
            </svg>
        </div>
    );
}

function SettingsOption4() {
    return (
        <div
            className="content-stretch flex gap-[20px] items-center relative shrink-0"
            data-name="Settings Option"
        >
            <IconMenu4 />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap tracking-[-0.4px] whitespace-pre">
                Notifications
            </p>
        </div>
    );
}

function IconMenu5() {
    return (
        <div className="relative shrink-0 size-[24px]" data-name="Icon/Menu">
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
            >
                <g id="Icon/Menu">
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p175d4b00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.pa7b1d00}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_2"
                    />
                    <path
                        clipRule="evenodd"
                        d={svgPaths.p28ac8200}
                        fill="var(--fill-0, black)"
                        fillRule="evenodd"
                        id="Line_3"
                    />
                </g>
            </svg>
        </div>
    );
}

function SettingsOption5() {
    return (
        <div
            className="content-stretch flex gap-[20px] items-center pb-0 pt-[30px] px-0 relative shrink-0"
            data-name="Settings Option"
        >
            <IconMenu5 />
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.4] not-italic relative shrink-0 text-[20px] text-[red] text-center text-nowrap tracking-[-0.4px] whitespace-pre">
                Delete Account
            </p>
        </div>
    );
}

function SettingsOptionsContainer() {
    return (
        <div
            className="absolute content-stretch flex flex-col gap-[10px] h-[243px] items-start justify-center left-[32px] top-[80px] w-[320px]"
            data-name="Settings Options Container"
        >
            <SettingsOption />
            <SettingsOption1 />
            <SettingsOption2 />
            <SettingsOption3 />
            <SettingsOption4 />
            <SettingsOption5 />
        </div>
    );
}

function Info() {
    return (
        <div
            className="absolute h-[785px] left-1/2 top-[65px] translate-x-[-50%] w-[430px]"
            data-name="Info"
        >
            <SettingsHeader />
            <SettingsOptionsContainer />
        </div>
    );
}

function SettingsPage() {
    return (
        <div
            className="absolute bg-white h-[932px] left-[2120px] overflow-clip top-[2292px] w-[430px]"
            data-name="Settings Page"
        >
            <HomeIndicator6 />
            <StatusBar6 />
            <Info />
        </div>
    );
}

function Time7() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide7() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time7 />
        </div>
    );
}

function RightSide7() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.97px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar7() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide7 />
            <RightSide7 />
        </div>
    );
}

function SearchBar() {
    return (
        <div
            className="bg-white h-[49px] relative rounded-[8px] shrink-0 w-full"
            data-name="Search Bar"
        >
            <div
                aria-hidden="true"
                className="absolute border-2 border-black border-solid inset-[-2px] pointer-events-none rounded-[10px]"
            />
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-[49px] items-center justify-between px-[19px] py-[9px] relative w-full">
                    <p className="font-['Inter:Medium',sans-serif] font-medium h-[24px] leading-[1.4] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.54)] w-[317.432px]">
                        Search for issues.
                    </p>
                    <div
                        className="relative shrink-0 size-[32.221px]"
                        data-name="image 22"
                    >
                        <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                            src={imgImage22}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function VideoTutorial() {
    return (
        <div
            className="h-[237px] relative rounded-[8px] shrink-0 w-full"
            data-name="Video Tutorial"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8px] size-full"
                src={imgVideoTutorial}
            />
            <div
                aria-hidden="true"
                className="absolute border-2 border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex h-[237px] items-center justify-center px-[124px] py-[45px] relative w-full">
                    <div
                        className="relative shrink-0 size-[145.589px]"
                        data-name="image 20"
                    >
                        <img
                            alt=""
                            className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-70 pointer-events-none size-full"
                            src={imgImage20}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function Tutorial() {
    return (
        <div
            className="bg-white relative rounded-[8px] shrink-0 w-full"
            data-name="Tutorial"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[9px] items-start justify-center leading-[1.4] not-italic p-[9px] relative text-[16px] text-black w-full">
                    <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[250.152px]">
                        How do I add friends?
                    </p>
                    <p className="font-['Inter:Medium',sans-serif] font-medium h-[24px] relative shrink-0 w-[306.27px]">
                        Follow this quick guide.
                    </p>
                </div>
            </div>
        </div>
    );
}

function Tutorial1() {
    return (
        <div
            className="bg-white relative rounded-[8px] shrink-0 w-full"
            data-name="Tutorial"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[9px] items-start justify-center leading-[1.4] not-italic p-[9px] relative text-[16px] text-black w-full">
                    <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[250.152px]">
                        How do I change my Local Area Code?
                    </p>
                    <p className="font-['Inter:Medium',sans-serif] font-medium h-[24px] relative shrink-0 w-[306.27px]">
                        Follow this quick guide.
                    </p>
                </div>
            </div>
        </div>
    );
}

function Tutorial2() {
    return (
        <div
            className="bg-white relative rounded-[8px] shrink-0 w-full"
            data-name="Tutorial"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#9e9e9e] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[9px] items-start justify-center leading-[1.4] not-italic p-[9px] relative text-[16px] text-black w-full">
                    <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-[250.152px]">
                        How do I change my budget?
                    </p>
                    <p className="font-['Inter:Medium',sans-serif] font-medium h-[24px] relative shrink-0 w-[306.27px]">
                        Follow this quick guide.
                    </p>
                </div>
            </div>
        </div>
    );
}

function HowTos() {
    return (
        <div
            className="content-stretch flex flex-col gap-[15px] h-[518px] items-center justify-center relative shrink-0 w-full"
            data-name="HowTos"
        >
            <VideoTutorial />
            <Tutorial />
            <Tutorial1 />
            <Tutorial2 />
        </div>
    );
}

function Page() {
    return (
        <div
            className="absolute content-stretch flex flex-col gap-[19px] h-[590px] items-center justify-center left-[18px] top-[59px] w-[395px]"
            data-name="Page"
        >
            <SearchBar />
            <HowTos />
        </div>
    );
}

function TabBarItem35() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[34px]" data-name="image 17">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage17}
                />
            </div>
        </div>
    );
}

function TabBarItem36() {
    return (
        <div
            className="content-stretch flex h-[60px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[91px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 12">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage12}
                />
            </div>
        </div>
    );
}

function TabBarItem37() {
    return (
        <div
            className="content-stretch flex items-start mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[54px]" data-name="_source">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgSource}
                />
            </div>
        </div>
    );
}

function TabBarItem38() {
    return (
        <div
            className="content-stretch flex items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[43px]" data-name="image 18">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage18}
                />
            </div>
        </div>
    );
}

function TabBarItem39() {
    return (
        <div
            className="content-stretch flex h-[51px] items-center justify-center mr-[-7px] pb-[8px] pt-[12px] px-[26px] relative shrink-0 w-[82px]"
            data-name="Tab Bar Item"
        >
            <div className="relative shrink-0 size-[46px]" data-name="image 24">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage24}
                />
            </div>
        </div>
    );
}

function Tabs7() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-center left-[calc(50%-7.5px)] overflow-clip pl-0 pr-[7px] py-0 top-[-48px] translate-x-[-50%] w-[430px]"
            data-name="Tabs"
        >
            <TabBarItem35 />
            <TabBarItem36 />
            <TabBarItem37 />
            <TabBarItem38 />
            <TabBarItem39 />
        </div>
    );
}

function HomeIndicator7() {
    return (
        <div
            className="absolute h-[34px] left-[27.5px] top-[898px] w-[375px]"
            data-name="Home Indicator"
        >
            <div
                className="absolute bg-black bottom-[8px] h-[5px] left-[calc(50%+0.5px)] rounded-[100px] translate-x-[-50%] w-[134px]"
                data-name="Home Indicator"
            />
            <Tabs7 />
        </div>
    );
}

function Group8() {
    return (
        <div className="absolute contents left-[27.5px] top-[898px]">
            <HomeIndicator7 />
        </div>
    );
}

function HowItWorks() {
    return (
        <div
            className="absolute bg-white h-[932px] left-[2120px] overflow-clip top-0 w-[430px]"
            data-name="How it works"
        >
            <StatusBar7 />
            <Page />
            <Group8 />
        </div>
    );
}

function Frame3() {
    return (
        <div className="content-stretch flex flex-col font-['Poppins:Medium',sans-serif] gap-[20px] items-center justify-center leading-[0] not-italic pb-[40px] pt-0 px-0 relative shrink-0 text-black text-center">
            <div className="flex flex-col justify-center relative shrink-0 text-[40px] w-[196px]">
                <p className="leading-[50px]">Eco-Scan</p>
            </div>
            <div className="flex flex-col justify-center leading-[1.1] relative shrink-0 text-[32px] w-[266px]">
                <p className="mb-0">Scan a shelf.</p>
                <p className="font-['Poppins:SemiBold',sans-serif] not-italic">
                    Save a planet.
                </p>
            </div>
        </div>
    );
}

function Earth2() {
    return (
        <div
            className="content-stretch flex items-center justify-center px-[104px] py-[40px] relative shrink-0"
            data-name="Earth"
        >
            <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgEarth}
            />
            <div className="relative shrink-0 size-[171px]" data-name="image 7">
                <img
                    alt=""
                    className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                    src={imgImage7}
                />
            </div>
        </div>
    );
}

function Button9() {
    return (
        <div
            className="bg-black h-[51px] relative rounded-[8px] shrink-0 w-full"
            data-name="Button"
        >
            <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex h-[51px] items-center justify-center pb-[9px] pt-0 px-[16px] relative w-full">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-nowrap text-white">
                        <p className="leading-[1.4] whitespace-pre">Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Divider() {
    return (
        <div
            className="content-stretch flex flex-col items-center justify-center px-0 py-[11px] relative w-[341px]"
            data-name="Divider"
        >
            <div
                className="bg-[#b0b0b0] h-px shrink-0 w-[326px]"
                data-name="Divider"
            />
        </div>
    );
}

function Button10() {
    return (
        <div
            className="bg-[#ebebeb] h-[50px] relative rounded-[8px] shrink-0 w-full"
            data-name="Button"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#ebebeb] border-solid inset-[-1px] pointer-events-none rounded-[9px]"
            />
            <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex h-[50px] items-center justify-center px-[16px] py-0 relative w-full">
                    <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-nowrap">
                        <p className="leading-[1.4] whitespace-pre">Register</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LoginDetails() {
    return (
        <div
            className="content-stretch flex flex-col gap-[10px] h-[247px] items-center justify-end pb-0 pt-[60px] px-0 relative shrink-0 w-[341px]"
            data-name="Login Details"
        >
            <Button9 />
            <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none scale-y-[-100%]">
                    <Divider />
                </div>
            </div>
            <Button10 />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#828282] text-[0px] text-[12px] text-center w-[min-content]">
                <span>{`By clicking continue, you agree to our `}</span>
                <span className="text-black">Terms of Service</span>
                <span>{` and `}</span>
                <span className="text-black">Privacy Policy</span>
            </p>
        </div>
    );
}

function FirstPageInfo() {
    return (
        <div
            className="absolute content-stretch flex flex-col h-[889px] items-center justify-center left-[26px] top-[43px] w-[379px]"
            data-name="First Page - Info"
        >
            <Frame3 />
            <Earth2 />
            <LoginDetails />
        </div>
    );
}

function Time8() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide8() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time8 />
        </div>
    );
}

function RightSide8() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.97px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar8() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide8 />
            <RightSide8 />
        </div>
    );
}

function FirstPageIdkWhatToCallIt() {
    return (
        <div
            className="absolute bg-white h-[932px] left-0 overflow-clip top-[1026px] w-[430px]"
            data-name="First Page - idk what to call it"
        >
            <FirstPageInfo />
            <StatusBar8 />
        </div>
    );
}

function Copy() {
    return (
        <div
            className="content-stretch flex flex-col gap-[2px] items-center leading-[1.5] not-italic relative shrink-0 text-black text-center text-nowrap whitespace-pre"
            data-name="Copy"
        >
            <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px]">
                Create an account
            </p>
            <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[14px]">
                Enter your email to sign up for this app
            </p>
        </div>
    );
}

function Field() {
    return (
        <div
            className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Field"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[14px] text-nowrap">
                        email@domain.com
                    </p>
                </div>
            </div>
        </div>
    );
}

function FieldPassword() {
    return (
        <div
            className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Field - Password"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative w-full">
                    <div className="basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[14px] text-nowrap">
                        <p className="[white-space-collapse:collapse] mb-0 overflow-ellipsis overflow-hidden">
                            Password
                        </p>
                        <p className="[white-space-collapse:collapse] overflow-ellipsis overflow-hidden">
                            &nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FieldPassword1() {
    return (
        <div
            className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Field - Password"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[14px] text-nowrap">
                        Confirm Password
                    </p>
                </div>
            </div>
        </div>
    );
}

function Button11() {
    return (
        <div
            className="bg-black h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Button"
        >
            <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
                    <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                        <p className="leading-[1.4] whitespace-pre">Continue</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputButton() {
    return (
        <div
            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]"
            data-name="Input + Button"
        >
            <Field />
            <FieldPassword />
            <FieldPassword1 />
            <Button11 />
        </div>
    );
}

function Divider1() {
    return (
        <div
            className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[327px]"
            data-name="Divider"
        >
            <div
                className="basis-0 bg-[#e6e6e6] grow h-px min-h-px min-w-px shrink-0"
                data-name="Divider"
            />
            <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#828282] text-[14px] text-center text-nowrap whitespace-pre">
                or
            </p>
            <div
                className="basis-0 bg-[#e6e6e6] grow h-px min-h-px min-w-px shrink-0"
                data-name="Divider"
            />
        </div>
    );
}

function Logo() {
    return (
        <div className="relative shrink-0 size-[20px]" data-name="Logo">
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 20 20"
            >
                <g clipPath="url(#clip0_1_1047)" id="Logo">
                    <path
                        d={svgPaths.p33b7ccc0}
                        fill="var(--fill-0, #4285F4)"
                        id="Vector"
                    />
                    <path
                        d={svgPaths.p15123a40}
                        fill="var(--fill-0, #34A853)"
                        id="Vector_2"
                    />
                    <path
                        d={svgPaths.p28bf8e80}
                        fill="var(--fill-0, #FBBC05)"
                        id="Vector_3"
                    />
                    <path
                        d={svgPaths.p1e563600}
                        fill="var(--fill-0, #EB4335)"
                        id="Vector_4"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_1047">
                        <rect fill="white" height="20" width="20" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Label() {
    return (
        <div
            className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="Label"
        >
            <Logo />
            <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                <p className="leading-[1.4] whitespace-pre">
                    Register with Google
                </p>
            </div>
        </div>
    );
}

function Button12() {
    return (
        <div
            className="[grid-area:1_/_1] bg-[#eeeeee] h-[40px] ml-0 mt-0 relative rounded-[8px] w-[327px]"
            data-name="Button"
        >
            <Label />
        </div>
    );
}

function Label1() {
    return (
        <div
            className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="Label"
        >
            <div className="relative shrink-0 size-[20px]" data-name="Logo">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                        alt=""
                        className="absolute left-[-28.84%] max-w-none size-[158.73%] top-[-29.1%]"
                        src={imgLogo}
                    />
                </div>
            </div>
            <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                <p className="leading-[1.4] whitespace-pre">
                    Register with Apple
                </p>
            </div>
        </div>
    );
}

function Button13() {
    return (
        <div
            className="[grid-area:1_/_1] bg-[#eeeeee] h-[40px] ml-0 mt-[48px] relative rounded-[8px] w-[327px]"
            data-name="Button"
        >
            <Label1 />
        </div>
    );
}

function Buttons() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Buttons"
        >
            <Button12 />
            <Button13 />
        </div>
    );
}

function Content() {
    return (
        <div
            className="absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%-0.5px)] px-[24px] py-0 top-[calc(50%+25.5px)] translate-x-[-50%] translate-y-[-50%]"
            data-name="Content"
        >
            <Copy />
            <InputButton />
            <Divider1 />
            <Buttons />
            <p className="font-['Inter:Regular',sans-serif] font-['Poppins:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#828282] text-[0px] text-[12px] text-center w-[min-content]">
                <span>{`By clicking continue, you agree to our `}</span>
                <span className="text-black">Terms of Service</span>
                <span>{` and `}</span>
                <span className="text-black">Privacy Policy</span>
            </p>
        </div>
    );
}

function Time9() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide9() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time9 />
        </div>
    );
}

function RightSide9() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.97px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar9() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide9 />
            <RightSide9 />
        </div>
    );
}

function RegisterAccount() {
    return (
        <div
            className="absolute bg-white h-[932px] left-[729px] overflow-clip top-[1792px] w-[430px]"
            data-name="Register - Account"
        >
            <Content />
            <StatusBar9 />
        </div>
    );
}

function Copy1() {
    return (
        <div
            className="content-stretch flex flex-col gap-[2px] items-center leading-[1.5] not-italic relative shrink-0 text-black text-center text-nowrap whitespace-pre"
            data-name="Copy"
        >
            <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px]">
                Login to an existing account
            </p>
            <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[14px]">{`Provide your email and  password`}</p>
        </div>
    );
}

function FieldEmail() {
    return (
        <div
            className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Field - Email"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[14px] text-nowrap">
                        email@domain.com
                    </p>
                </div>
            </div>
        </div>
    );
}

function FieldPassword2() {
    return (
        <div
            className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Field - Password"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[14px] text-nowrap">
                        *******************
                    </p>
                </div>
            </div>
        </div>
    );
}

function Button14() {
    return (
        <div
            className="bg-black h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Button"
        >
            <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
                    <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                        <p className="leading-[1.4] whitespace-pre">Continue</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputButton1() {
    return (
        <div
            className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[327px]"
            data-name="Input + Button"
        >
            <FieldEmail />
            <FieldPassword2 />
            <Button14 />
        </div>
    );
}

function Divider2() {
    return (
        <div
            className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[327px]"
            data-name="Divider"
        >
            <div
                className="basis-0 bg-[#e6e6e6] grow h-px min-h-px min-w-px shrink-0"
                data-name="Divider"
            />
            <p className="font-['Poppins:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#828282] text-[14px] text-center text-nowrap whitespace-pre">
                or
            </p>
            <div
                className="basis-0 bg-[#e6e6e6] grow h-px min-h-px min-w-px shrink-0"
                data-name="Divider"
            />
        </div>
    );
}

function Logo1() {
    return (
        <div className="relative shrink-0 size-[20px]" data-name="Logo">
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 20 20"
            >
                <g clipPath="url(#clip0_1_1047)" id="Logo">
                    <path
                        d={svgPaths.p33b7ccc0}
                        fill="var(--fill-0, #4285F4)"
                        id="Vector"
                    />
                    <path
                        d={svgPaths.p15123a40}
                        fill="var(--fill-0, #34A853)"
                        id="Vector_2"
                    />
                    <path
                        d={svgPaths.p28bf8e80}
                        fill="var(--fill-0, #FBBC05)"
                        id="Vector_3"
                    />
                    <path
                        d={svgPaths.p1e563600}
                        fill="var(--fill-0, #EB4335)"
                        id="Vector_4"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1_1047">
                        <rect fill="white" height="20" width="20" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}

function Label2() {
    return (
        <div
            className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="Label"
        >
            <Logo1 />
            <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                <p className="leading-[1.4] whitespace-pre">
                    Login with Google
                </p>
            </div>
        </div>
    );
}

function GoogleLogin() {
    return (
        <div
            className="[grid-area:1_/_1] bg-[#eeeeee] h-[40px] ml-0 mt-0 relative rounded-[8px] w-[327px]"
            data-name="Google- Login"
        >
            <Label2 />
        </div>
    );
}

function Label3() {
    return (
        <div
            className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%]"
            data-name="Label"
        >
            <div className="relative shrink-0 size-[20px]" data-name="Logo">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img
                        alt=""
                        className="absolute left-[-28.84%] max-w-none size-[158.73%] top-[-29.1%]"
                        src={imgLogo}
                    />
                </div>
            </div>
            <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
                <p className="leading-[1.4] whitespace-pre">Login with Apple</p>
            </div>
        </div>
    );
}

function AppleLogin() {
    return (
        <div
            className="[grid-area:1_/_1] bg-[#eeeeee] h-[40px] ml-0 mt-[48px] relative rounded-[8px] w-[327px]"
            data-name="Apple- Login"
        >
            <Label3 />
        </div>
    );
}

function Buttons1() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Buttons"
        >
            <GoogleLogin />
            <AppleLogin />
        </div>
    );
}

function Content1() {
    return (
        <div
            className="absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%-0.5px)] px-[24px] py-0 top-[calc(50%+25.5px)] translate-x-[-50%] translate-y-[-50%]"
            data-name="Content"
        >
            <Copy1 />
            <InputButton1 />
            <Divider2 />
            <Buttons1 />
            <p className="font-['Inter:Regular',sans-serif] font-['Poppins:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#828282] text-[0px] text-[12px] text-center w-[min-content]">
                <span>{`By clicking continue, you agree to our `}</span>
                <span className="text-black">Terms of Service</span>
                <span>{` and `}</span>
                <span className="text-black">Privacy Policy</span>
            </p>
        </div>
    );
}

function Time10() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide10() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time10 />
        </div>
    );
}

function RightSide10() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.97px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar10() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-[-5px] w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide10 />
            <RightSide10 />
        </div>
    );
}

function LoginAccount() {
    return (
        <div
            className="absolute bg-white h-[932px] left-[729px] overflow-clip top-[757px] w-[430px]"
            data-name="Login - Account"
        >
            <Content1 />
            <p className="absolute font-['Poppins:Medium',sans-serif] leading-[1.5] left-[45px] not-italic text-[16px] text-black text-center top-[46px] translate-x-[-50%] w-[62px]">{`< Back`}</p>
            <StatusBar10 />
        </div>
    );
}

function InfoMain() {
    return (
        <div
            className="content-stretch flex flex-col gap-[2px] items-center leading-[1.5] not-italic relative shrink-0 text-black text-center text-nowrap whitespace-pre"
            data-name="Info - main"
        >
            <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[16px]">
                A few last things...
            </p>
            <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[14px]">
                Fields with a * are mandatory.
            </p>
        </div>
    );
}

function FieldEmail1() {
    return (
        <div
            className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Field - Email"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[14px] text-nowrap">
                        Local Area Code*
                    </p>
                </div>
            </div>
        </div>
    );
}

function FieldUsername() {
    return (
        <div
            className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Field - Username"
        >
            <div
                aria-hidden="true"
                className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex h-[40px] items-center px-[16px] py-[8px] relative w-full">
                    <p className="[white-space-collapse:collapse] basis-0 font-['Poppins:Regular',sans-serif] grow leading-[1.4] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#828282] text-[14px] text-nowrap">
                        Username*
                    </p>
                </div>
            </div>
        </div>
    );
}

function ToggleSwitch() {
    return (
        <div
            className="h-[32px] relative shrink-0 w-[64px]"
            data-name="Toggle Switch"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 64 32"
            >
                <g id="Toggle Switch">
                    <rect
                        fill="var(--fill-0, #828282)"
                        height="31"
                        rx="15.5"
                        width="63"
                        x="0.5"
                        y="0.5"
                    />
                    <rect
                        height="31"
                        rx="15.5"
                        stroke="var(--stroke-0, #BCBCBC)"
                        width="63"
                        x="0.5"
                        y="0.5"
                    />
                    <circle
                        cx="16"
                        cy="16"
                        fill="var(--fill-0, #D9D9D9)"
                        id="Ellipse 4"
                        r="12"
                    />
                </g>
            </svg>
        </div>
    );
}

function Frame4() {
    return (
        <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
            <ToggleSwitch />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[14px] text-black w-[164px]">
                Appear on Leaderboard?
            </p>
        </div>
    );
}

function Button15() {
    return (
        <div
            className="bg-black h-[40px] relative rounded-[8px] shrink-0 w-full"
            data-name="Button"
        >
            <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex h-[40px] items-center justify-center px-[16px] py-0 relative w-full">
                    <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
                        <p className="leading-[1.4] whitespace-pre">Continue</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FieldsButton() {
    return (
        <div
            className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-[327px]"
            data-name="Fields + Button"
        >
            <FieldEmail1 />
            <FieldUsername />
            <Frame4 />
            <Button15 />
        </div>
    );
}

function LacInfo() {
    return (
        <div
            className="content-stretch flex font-['Poppins:Medium',sans-serif] gap-[5px] items-center justify-center leading-[1.5] not-italic relative shrink-0 text-[16px] text-center text-nowrap w-full whitespace-pre"
            data-name="LAC Info"
        >
            <p className="relative shrink-0 text-[#555555]">Click</p>
            <p className="[text-underline-position:from-font] decoration-solid relative shrink-0 text-black underline">
                here
            </p>
            <p className="relative shrink-0 text-[#555555]">
                to find out more.
            </p>
        </div>
    );
}

function InfoExtra() {
    return (
        <div
            className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0"
            data-name="Info - extra"
        >
            <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">{`Don’t know  your Local Area Code?`}</p>
            <LacInfo />
        </div>
    );
}

function Content2() {
    return (
        <div
            className="absolute content-stretch flex flex-col gap-[24px] items-center left-[calc(50%-0.5px)] px-[24px] py-0 top-[calc(50%+25.5px)] translate-x-[-50%] translate-y-[-50%]"
            data-name="Content"
        >
            <InfoMain />
            <FieldsButton />
            <InfoExtra />
        </div>
    );
}

function Time11() {
    return (
        <div
            className="[grid-area:1_/_1] h-[27px] ml-0 mt-0 relative w-[53.999px]"
            data-name="Time"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 54 27"
            >
                <g id="Time">
                    <g id="9:41">
                        <path
                            d={svgPaths.p257af400}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p26cd3000}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p2a427700}
                            fill="var(--fill-0, black)"
                        />
                        <path
                            d={svgPaths.p31837400}
                            fill="var(--fill-0, black)"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}

function LeftSide11() {
    return (
        <div
            className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
            data-name="Left Side"
        >
            <Time11 />
        </div>
    );
}

function RightSide11() {
    return (
        <div
            className="h-[14.96px] relative shrink-0 w-[87.97px]"
            data-name="Right Side"
        >
            <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 88 15"
            >
                <g id="Right Side">
                    <g id="Battery">
                        <path
                            d={svgPaths.p2d6b8d00}
                            id="Rectangle"
                            opacity="0.35"
                            stroke="var(--stroke-0, black)"
                        />
                        <path
                            d={svgPaths.p321ea800}
                            fill="var(--fill-0, black)"
                            id="Combined Shape"
                            opacity="0.4"
                        />
                        <path
                            d={svgPaths.p366359f0}
                            fill="var(--fill-0, black)"
                            id="Rectangle_2"
                        />
                    </g>
                    <path
                        d={svgPaths.p3642fd00}
                        fill="var(--fill-0, black)"
                        id="Wifi"
                    />
                    <path
                        d={svgPaths.p18262d00}
                        fill="var(--fill-0, black)"
                        id="Mobile Signal"
                    />
                </g>
            </svg>
        </div>
    );
}

function StatusBar11() {
    return (
        <div
            className="absolute content-stretch flex items-center justify-between left-0 overflow-clip pb-[12px] pl-[55px] pr-[35px] pt-[20px] top-0 w-[430px]"
            data-name="Status Bar"
        >
            <LeftSide11 />
            <RightSide11 />
        </div>
    );
}

function ExtraInfoRegister() {
    return (
        <div
            className="absolute bg-white h-[932px] left-[1343px] overflow-clip top-[1146px] w-[430px]"
            data-name="Extra Info - Register"
        >
            <Content2 />
            <StatusBar11 />
        </div>
    );
}

export default function Frame1() {
    return (
        <div className="relative size-full">
            <HomePage />
            <SocialPage />
            <div
                className="absolute flex h-[430px] items-center justify-center left-[3463px] top-[1397px] w-[932px]"
                style={
                    {
                        "--transform-inner-width": "430",
                        "--transform-inner-height": "932",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[270deg]">
                    <ScanPage1 />
                </div>
            </div>
            <div
                className="absolute flex h-[430px] items-center justify-center left-[5513px] top-[1397px] w-[932px]"
                style={
                    {
                        "--transform-inner-width": "430",
                        "--transform-inner-height": "932",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[270deg]">
                    <ScanPage3 />
                </div>
            </div>
            <div
                className="absolute flex h-[430px] items-center justify-center left-[4488px] top-[1397px] w-[932px]"
                style={
                    {
                        "--transform-inner-width": "430",
                        "--transform-inner-height": "932",
                    } as React.CSSProperties
                }
            >
                <div className="flex-none rotate-[270deg]">
                    <ScanPage2 />
                </div>
            </div>
            <ScanPage />
            <SettingsPage />
            <HowItWorks />
            <FirstPageIdkWhatToCallIt />
            <RegisterAccount />
            <LoginAccount />
            <ExtraInfoRegister />
        </div>
    );
}
