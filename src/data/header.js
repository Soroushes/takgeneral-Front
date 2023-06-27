import ExactToolIcon from '../assets/icons/exactToolIcon.svg'
import WaterPompIcon from '../assets/icons/waterPompICon.svg'
import ShirbarghiIcon from '../assets/icons/shirbarghiIcon.svg'
import FlowMeterIcon from '../assets/icons/flowMeterIcon.svg'
import {allCategories} from "./category/categoriesData";
export const headerItem = [
    {
        name: "پمپ و تجهیزات جانبی",
        icon: <WaterPompIcon/>,
        link : allCategories.pomp.urls.mainPage
    },
    {
        name: "ابزار دقیق",
        icon: <ExactToolIcon/>,
        link : allCategories.pomp.urls.mainPage
    },
    {
        name: "شیر برقی گاز",

        icon: <ShirbarghiIcon/>,
        link : allCategories.pomp.urls.mainPage
    },
    {
        name: "فلومتر",

        icon: <FlowMeterIcon/>,
        link : allCategories.pomp.urls.mainPage
    },
];