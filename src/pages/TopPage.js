import Header from "../compornents/Header";
import Title from "../compornents/Title";
import Selector from "../compornents/Selector";
import Results from "../compornents/Results";


const TopPage = (props)=>{
    return(
        <div className="top-page-container">
            <div>
            <Header />
            <Title />
            <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} 
            getCountryData={props.getCountryData} />
            <Results countryData={props.countryData} />
            </div>
        </div>
    );
};

export default TopPage;
