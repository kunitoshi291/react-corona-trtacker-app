import Header from "../compornents/Header";
import Title from "../compornents/Title";
import Card from "../compornents/Card";

const WorldPage = ({allCountriesData})=> {
    return (
        <div className="world-page-container">
            <Header />
            <Title />
            <Card allCountriesData = {allCountriesData}  />
        </div>
    );
};

export default WorldPage;