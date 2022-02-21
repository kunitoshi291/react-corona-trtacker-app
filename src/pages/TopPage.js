import Header from "../compornents/Header";
import Title from "../compornents/Title";
import Selector from "../compornents/Selector";
import Results from "../compornents/Results";


const TopPage = ({countriesJson, setCountry, getCountryData, countryData, loading})=>{
    return(
        <div className="top-page-container">
            <div>
            <Header />
            <Title />
            <Selector countriesJson={countriesJson} setCountry={setCountry} 
            getCountryData={getCountryData} />
            <Results countryData={countryData} loading={loading} />
            </div>
        </div>
    );
};

export default TopPage;
