import React from "react";
import NewSlider from "../widgets/NewsSlider/slider";
import NewsList from "../widgets/NewsList/newsList";

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
    </div>
  );
};

export default Home;
