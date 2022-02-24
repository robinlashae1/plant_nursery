
function PlantCard({plant,className}) {
    const des = plant.description
    const count = 200
    const results = des.slice(0, count)

    if (className === "OtherPlant"){
       return ( 
        <div className="otherPlantDiv">
            <img id="otherPlantImg" src={plant.image} alt={plant.name}/>
            <h2 id="otherPlantName">{plant.name}</h2>
            <p>{results}</p>
        </div>
    ); 
    }
    
}

export default PlantCard;