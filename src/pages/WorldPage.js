import Header from "../compornents/Header";
import Title from "../compornents/Title";
import Card from "../compornents/Card";

const WorldPage = (props)=> {
    return (
        <div className="world-page-container">
            <Header />
            <Title />
            <Card allCountriesData = {props.allCountriesData}  />
        </div>
    );
};

export default WorldPage;