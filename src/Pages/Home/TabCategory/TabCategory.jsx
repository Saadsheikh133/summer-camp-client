import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleCategory from './SingleCategory';

const TabCategory = () => {
    const [category, setCategory] = useState('Soccer');
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch(`https://b7a12-summer-camp-server.vercel.app/category?category=${category}`)
            .then(res => res.json())
        .then(data => setClasses(data))
    }, [category])
    return (
        <div className='my-20'>
            <Tabs className='text-center'>
                <TabList>
                    <Tab onClick={() => setCategory('Soccer')}>Soccer</Tab>
                    <Tab onClick={() => setCategory('Basketball')}>Basketball</Tab>
                    <Tab onClick={() => setCategory('Tennis')}>Tennis</Tab>
                    <Tab onClick={() => setCategory('Swimming')}>Swimming</Tab>
                    <Tab onClick={() => setCategory('Cycling')}>Cycling</Tab>
                    <Tab onClick={() => setCategory('Golf')}>Golf</Tab>
                    <Tab onClick={() => setCategory('Badminton')}>Badminton</Tab>
                </TabList>
            </Tabs>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    Array.isArray(classes) &&
                    classes?.map(singleClass => <SingleCategory
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default TabCategory;