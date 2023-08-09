import ExactToolIcon from '../assets/icons/layout/exactToolIcon.svg'
import WaterPompIcon from '../assets/icons/layout/waterPompICon.svg'
import ShirbarghiIcon from '../assets/icons/layout/shirbarghiIcon.svg'
import FlowMeterIcon from '../assets/icons/layout/flowMeterIcon.svg'
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