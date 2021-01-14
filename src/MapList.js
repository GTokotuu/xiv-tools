const MapList = ({maps}) => {
    return(
        <div className="map-list">
            <ul>
                {maps.map(map => (
                    <li>{map.PlaceName.Name_en}</li>
                ))}
            </ul>
        </div>
    );
};

export default MapList;