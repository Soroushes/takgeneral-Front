import pomp from '../../assets/images/pomp.png' ;
import {urls} from "../urls";

export const allCategories = {
    pomp : {
        title : "پمپ و تجهیزات جانبی" ,
        urls : {
            mainPage : `${urls.categories}/pomps`,
            homePomp : `${urls.categories}/home-pomps` ,
            jetiPomp : `${urls.categories}/jeti-home-pomps` ,
            mohitiPomp : `${urls.categories}/mohiti-home-pomps` ,
            boshghabiPomp : `${urls.categories}/boshghabi-home-pomps` ,
            doparvanePomp : `${urls.categories}/doparvane-home-pomps`
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