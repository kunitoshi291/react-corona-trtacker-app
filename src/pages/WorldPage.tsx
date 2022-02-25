import Header from "../compornents/Header";
import Title from "../compornents/Title";
import Card from "../compornents/Card";
import {WorldPageType} from "../types";

const WorldPage = ({allCountriesData}:WorldPageType)=> {
    return (
        <div className="world-page-container">
            <Header />
            <Title />
            <Card allCountriesData = {allCountriesData}  />
        </div>
    );
};

export default WorldPage;