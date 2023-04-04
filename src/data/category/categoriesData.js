import pomp from '../../images/pomp.png' ;
import {urls} from "../urls";

export const allCategories = {
    pomp : {
        title : "پمپ و تجهیزات جانبی" ,
        urls : {
            mainPage : `${urls.categories}/pomp/pomps`,
            homePomp : `${urls.categories}/pomp/home-pomps` ,
            jetiPomp : `${urls.categories}/pomp/jeti-home-pomps` ,
            mohitiPomp : `${urls.categories}/pomp/mohiti-home-pomps` ,
            boshghabiPomp : `${urls.categories}/pomp/boshghabi-home-pomps` ,
            doparvanePomp : `${urls.categories}/pomp/doparvane-home-pomps`
        }
    }
}
export const categoriesData = {
    pomp : {
        title : allCategories.pomp.title ,
        link : allCategories.pomp.urls.mainPage,
        items : [
            {
                icon : pomp ,
                title : 'پمپ آب خانگی' ,
                link : allCategories.pomp.urls.homePomp,
                children : [
                    {
                        icon : pomp ,
                        title : 'پمپ آب جتی' ,
                        link : allCategories.pomp.urls.jetiPomp,
                    } ,
                    {
                        icon : pomp ,
                        title : 'پمپ آب محیطی' ,
                        link : allCategories.pomp.urls.mohitiPomp,
                    },
                    {
                        icon : pomp ,
                        title : 'پمپ آب دو پروانه' ,
                        link : allCategories.pomp.urls.doparvanePomp,
                    },
                    {
                        icon : pomp ,
                        title : 'پمپ آب بشقابی' ,
                        link : allCategories.pomp.urls.boshghabiPomp,
                    }
                ]
            } ,
            {
                icon : pomp ,
                title : 'پمپ آب کشاورزی' ,
                link : '/products/pomp/kehsavarzi-pomp',
                children : []
            },
            {
                icon : pomp ,
                title : 'پمپ آب کشاورزی' ,
                link : '/products/pomp/kehsavarzi-pomp',
                children : []
            },
            {
                icon : pomp ,
                title : 'پمپ آب کشاورزی' ,
                link : '/products/pomp/kehsavarzi-pomp',
                children : []
            },
            {
                icon : pomp ,
                title : 'پمپ آب کشاورزی' ,
                link : '/products/pomp/kehsavarzi-pomp',
                children : []
            }
        ]
    }
}