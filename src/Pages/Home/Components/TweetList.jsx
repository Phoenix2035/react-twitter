import React from 'react';
import Tweet from "./Tweet";

function TweetList({data}) {
    return (
        <div>
            {
                data.map((item, i) =>
                    <Tweet key={i} data={item}/>
                )
            }
        </div>
    );
}

export default TweetList;