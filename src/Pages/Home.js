import React from 'react';
import TopicBox from '../components/TopicBox';
import Content from '../components/content';

function Home(props) {
    return (
        <div>
           <h1>This is the home page</h1> 
           <TopicBox/>
           <Content/>
        </div>
    );
}

export default Home;