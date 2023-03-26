import ExactToolIcon from '../components/icons/exactToolIcon.svg'
import WaterPompIcon from '../components/icons/waterPompICon.svg'
import ShirbarghiIcon from '../components/icons/shirbarghiIcon.svg'
import FlowMeterIcon from '../components/icons/flowMeterIcon.svg'
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