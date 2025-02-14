import React, {useState} from 'react';

function DormSelector(){
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedDorm, setSelectedDorm] = useState(null);
    const [selectedRoomType, setSelectedRoomType] = useState(null);

    const handleYearClick = (year) => {setSelectedYear(year);};
    const handleDormClick = (dorm) => {setSelectedDorm(dorm);};
    const handleRoomTypeClick = (roomType) => {setSelectedRoomType(roomType);};

    const dormData = 
    {
        Freshman: ['Barton Hall', 'Bray Hall'],
        Sophomore: ['North Hall', 'E-Complex']
    };

    const roomTypes =
    {
        'Bray Hall': ['Single', 'Double'],
        'North Hall': ['Single', 'Double'],
        'E-Complex': ['Single', 'Double']
    }

    const modelData = {
        'North Hall' : 'path/to/north_hall_model.glb'
    };

    return(
        <div>
            <h2>RPI Dorm</h2>
            <div>
                <button onClick={() => handleYearClick('Freshman')}>Freshman</button>
                <button onClick={() => handleYearClick('Sophomore')}>Sophomore</button>
            </div>

            {selectedYear &&(
                <div>
                    <h3>{selectedYear} Dorms</h3>
                    <ul>
                        {dormData[selectedYear].map((dorm) => (
                            <li key= {dorm}>
                                <span onClick={() => handleDormClick(dorm)}>
                                    {dorm}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
export default DormSelector