import React from "react";
import { Helmet } from "react-helmet";
import AllRecipes from "../../components/homepageSections/AllRecipes";
import MainSection from "../../components/homepageSections/MainSection";
import NewRecipes from "../../components/homepageSections/NewRecipes";

import TEST_ID from "./Home.testid";
import "./home.css";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kookkie</title>
      </Helmet>
      <div data-testid={TEST_ID.container}>
        <MainSection />
        <NewRecipes />
        <AllRecipes />
      </div>
    </>
  );
};

export default Home;
