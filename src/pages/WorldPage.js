import Card from "../compornents/Card";

const WorldPage = (props)=> {
    return (
        <div>
            <Card getAllCountriesData = {props.getAllCountriesData} allCountriesData = {props.allCountriesData}  />
        </div>
    )
}

export default WorldPage;