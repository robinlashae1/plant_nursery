import HomeBanner from "../bars/HomeBanner";
import BottomBorder from "../bars/BottomBorder";
import PlantCard from "./PlantCard";

function OtherPlants({plants}) {
    function renderPlants(plants){
        return(
         plants.map(plant => {
            return(
                <PlantCard className={"OtherPlant"} plant={plant}/>  
         )})
        
        )
    }
    return ( 
        <div className="aboutPage">
        <HomeBanner title="ABOUT US"/>
        <p>Other Plants</p>
        <div id="otherPlantsRenderDiv">
        {renderPlants(plants)}
        </div>
        <BottomBorder/>
        </div>
     );
}

export default OtherPlants;