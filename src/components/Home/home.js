import React from "react";
import NewSlider from "../widgets/NewsSlider/slider";
import NewsList from "../widgets/NewsList/newsList";
import VideoList from "../widgets/VideoList/videoList";

const Home = () => {
  return (
    <div>
      <NewSlider
        type="featured"
        start={0}
        amount={3}
        settings={{ dots: false }}
      />
      <NewsList type="card" loadmore={true} start={3} amount={3} />
      <VideoList
        type="card"
        title={true}
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  );
};

export default Home;
