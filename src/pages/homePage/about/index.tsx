import React, { Fragment, useState, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from "@mui/material/Tab";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import aboutList from '../../api/about';
import { labelTabList } from '../../api/about';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const About = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
                className="about-box items-center h-[70rem] bg-[#F7F6ED] mt-[30rem] mb-[10rem]"
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderColor: 'divider' }}
                    className="about-tabs w-1/3"
                >
                    {labelTabList.map((labelTabItem: string, index: number) => (
                        <Tab
                            key={index}
                            label={labelTabItem}
                            {...a11yProps(index)}
                            className="!text-3xl !font-bold !text-[#515767]" />
                    ))}
                </Tabs>
                <ul>
                    {aboutList.map((aboutItem: any, index: number) => (
                        <TabPanel value={value} index={index} key={index}>
                            <li className="about-content flex justify-center items-center">
                                <div className="w-[60rem] h-[60rem] mr-[6rem]">
                                    <img alt="Img" src={aboutItem.img} className="rounded-full w-full h-full" />
                                </div>
                                <div className='about-item w-[38rem]'>
                                    <h1 className='text-5xl font-extrabold mb-[3rem] text-[#2B2631]'>
                                        {aboutItem.name}
                                    </h1>
                                    <span className='text-3xl leading-[3.4rem] text-[#2B2631]'>
                                        {aboutItem.content}
                                    </span>
                                    <div className="text-3xl text-[#7081FF] mt-[3rem]">
                                        <Link to="">
                                            <span className="mr-6">{"Learn more"}</span>
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </TabPanel>
                    ))}
                </ul>
            </Box>
        </Fragment>
    );
};

export default About;