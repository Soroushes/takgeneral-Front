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
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: active ? "primary.dark" : "primary.light",

    }
)
const CategoryListGenerator = ({category}) => {
    const {asPath} = useRouter();
    const pageCategory = categoriesData[category];
    const [childrenItem, setChildrenItem] = useState([]);
    useEffect(() => {
        let foundedChild = undefined;
        pageCategory.items.forEach((item) => {
            if (foundedChild) return ;
            foundedChild = item.link === asPath ? item.children : item.children.find(childItem => childItem.link === asPath) ? item.children : undefined;
        });
        if (foundedChild) {
            setChildrenItem(foundedChild);
        }
    }, [asPath])
    return (
        <>
            <Typography component={'h1'} textAlign={'center'}>{pageCategory.title}</Typography>
            <Paper sx={{
                display: "flex",
                gap: 1,
                p: 2,
                borderRadius: 2,
                overflowX: "auto",
                mt: 2.5,
                flexDirection: "column"
            }}>
                <Box sx={{display: "flex", gap: 1, mt: 2.5}}>
                    {
                        pageCategory?.items.map((item, index) => {
                            const isChildrenFound = item.children.find(childItem => childItem.link === asPath);
                            const activate = item.link === asPath || isChildrenFound;
                            return (
                                <Link key={index} href={item.link}>
                                    <Box sx={itemStylesGenerate(activate)}>
                                        <Image width={30} height={30} src={item.icon} alt={item.title}/>
                                        <Typography
                                            overflow={'hidden'}
                                            textOverflow={'ellipsis'}
                                            whiteSpace={'nowrap'}
                                            textAlign={'center'}
                                            color={'white'}
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
                <Box sx={{display: "flex", gap: 1, mt: 2.5}}>
                    {
                        childrenItem?.map((item, index) => {
                            const activate = item.link === asPath;
                            return (
                                <Link key={index} href={item.link}>
                                    <Box sx={itemStylesGenerate(activate)}>
                                        <Image width={30} height={30} src={item.icon} alt={item.title}/>
                                        <Typography
                                            overflow={'hidden'}
                                            textOverflow={'ellipsis'}
                                            whiteSpace={'nowrap'}
                                            textAlign={'center'}
                                            color={'white'}
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
            </Paper>
        </>
    )
}
export default CategoryListGenerator;