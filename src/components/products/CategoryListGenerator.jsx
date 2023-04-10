import {categoriesData} from "../../data/category/categoriesData";
import {Box} from "@mui/system";
import Paper from "@mui/material/Paper";
import {Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

const itemStylesGenerate = (active = false) => (
    {
        display: "flex",
        p: 1,
        borderRadius: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: active ? "primary.main" : "primary.lighter",
    }
)
const CategoryListGenerator = ({category}) => {
    const {asPath, query} = useRouter();
    const pageCategory = categoriesData[category];
    const [childrenItem, setChildrenItem] = useState([]);
    const [noFilterRoute, setNoFilterRoute] = useState(asPath);
    useEffect(() => {
        // try to find active children
        let foundedChild = undefined;
        pageCategory.items.forEach((item) => {
            if (foundedChild) return;
            // agar khode children va YA daste bandie madarash active bashad , children ha bayad neshan dade shavad
            foundedChild = item.link === noFilterRoute ? item.children : item.children.find(childItem => childItem.link === noFilterRoute) ? item.children : undefined;
        });
        if (foundedChild) {
            setChildrenItem(foundedChild);
        }else {
            setChildrenItem([]);
        }
    }, [noFilterRoute])
    useEffect(() => {
        setNoFilterRoute(`/products/${query.category}/${query.categoryType}`)
    }, [asPath])
    return (
        <>
            <Typography component={'h1'} textAlign={'center'}>{pageCategory.title}</Typography>
            <Paper
                elevation={4}
                sx={{
                display: "flex",
                padding : '10px 10px 0 10px',
                borderRadius: 2,
                my: 2.5,
                flexDirection: "column",
                overflowX: childrenItem.length ? null : "auto"
            }}>
                <Box sx={{display: "flex", gap: 1 ,pb :1, overflowX: childrenItem.length ? "auto" : null}}>
                    {
                        pageCategory?.items.map((item, index) => {
                            const isChildrenActive = item.children.find(childItem => childItem.link === noFilterRoute);
                            const activate = item.link === noFilterRoute;
                            return (
                                <Link key={index} href={item.link} scroll={false}>
                                    <Box sx={itemStylesGenerate(activate || isChildrenActive)}>
                                        {
                                            item.icon ?
                                                <Image width={30} height={30} src={item.icon} alt={item.title}/>
                                                : null
                                        }
                                        <Typography
                                            overflow={'hidden'}
                                            textOverflow={'ellipsis'}
                                            whiteSpace={'nowrap'}
                                            textAlign={'center'}
                                            color={activate || isChildrenActive ? "white" : "text.main"}
                                            variant={'body2'}
                                            sx={{width: {xs: 100, md: 130}}}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Link>
                            )
                        })
                    }
                </Box>
                {
                    childrenItem.length ?
                        (
                            <Box
                                sx={{display: "flex", gap: 1, pb: 1, overflowX: childrenItem.length ? "auto" : null}}>
                                {
                                    childrenItem.map((item, index) => {
                                        const activate = item.link === noFilterRoute;
                                        return (
                                            <Link key={index} href={item.link} scroll={false}>
                                                <Box sx={itemStylesGenerate(activate)}>
                                                    {
                                                        item.icon ?
                                                            <Image width={30} height={30} src={item.icon}
                                                                   alt={item.title}/>
                                                            : null
                                                    }
                                                    <Typography
                                                        overflow={'hidden'}
                                                        textOverflow={'ellipsis'}
                                                        whiteSpace={'nowrap'}
                                                        textAlign={'center'}
                                                        color={activate ? "white" : "text.main"}
                                                        variant={'caption'}
                                                        sx={{width: {xs: 100, md: 130}}}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                </Box>
                                            </Link>
                                        )
                                    })
                                }
                            </Box>
                        ) : null
                }
            </Paper>
        </>
    )
}
export default CategoryListGenerator;