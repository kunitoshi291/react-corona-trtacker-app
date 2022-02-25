import Header from "../compornents/Header";
import Title from "../compornents/Title";
import Selector from "../compornents/Selector";
import Results from "../compornents/Results";
import { TopPageType } from "../types";

const TopPage = ({countriesJson, setCountry, countryData, loading}:TopPageType)=>{
    return(
        <div className="top-page-container">
            <div>
            <Header />
            <Title />
            <Selector countriesJson={countriesJson} setCountry={setCountry} />
            <Results countryData={countryData} loading={loading} />
            </div>
        </div>
    );
};

export default TopPage;
