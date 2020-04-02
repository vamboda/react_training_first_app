import React from "react";
import LazyLoad from "react-lazyload";

const NewsDisplay = props => {
  const renderNewsItems = props.dataList.map((newsItem, index)=> (
    <>
      <LazyLoad throttle={1000} height={200} key={index}> 
        <h1>{newsItem.title}</h1>
        <img src={newsItem.imageUrl} />
        <p>{newsItem.feed}</p>
      </LazyLoad>
    </>
  ));

  console.log(props);
  return <div>{renderNewsItems}</div>;
};

export default NewsDisplay;
