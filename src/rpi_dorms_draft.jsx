import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NoPictures from './DormPictures';
import './style.css';

function DormSelector(){
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedDorm, setSelectedDorm] = useState(null);
    const [selectedRoomType, setSelectedRoomType] = useState(null);
    const [showRoomDetails, setShowRoomDetails] = useState(null);

    const handleYearClick = (year) => {setSelectedYear(year);};
    const handleDormClick = (dorm) => {setSelectedDorm(dorm);};
    const handleRoomTypeClick = (roomType) => 
        {
            setSelectedRoomType(roomType);
            setShowRoomDetails(true);
        };

    const dormData = 
    {
        Freshman: ['Barton Hall', 'Bray Hall'],
        Sophomore: ['North Hall', 'E-Complex'],
        Junior: ['City Station', 'Polytechnic'],
        Senior: ['City Station', 'Polytechnic']
    };

    const roomTypes =
    {
        'Barton Hall':['Triple'],
        'Bray Hall': ['Single', 'Double'],
        'North Hall': ['Single', 'Double'],
        'E-Complex': ['Single', 'Double']
    }

    const roomImages = 
    {
        'Barton Hall': {'Triple':['/images/Barton1.jpg']},
        'Bray Hall': 
        {
            'Single':['/images/Bray_Sin.jpg'],
            'Double':['/images/Bray_doub.jpg']
        },
        'North Hall':
        {
            'Single':['/images/North_Sin.jpg'],
            'Double':['/images/North_doub.jpg']
        },
        'E-Complex':
        {
            'Single':['/images/E_Sin.jpg'],
            'Double':['/images/E_doub.jpg']
        }

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
                <button onClick={() => handleYearClick('Junior')}>Junior</button>
                <button onClick={() => handleYearClick('Senior')}>Senior</button>
            </div>

            {selectedYear && (
                <div>
                    <h3>{selectedYear} Dorms</h3>
                    <ul>
                        {dormData[selectedYear].map((dorm) => (
                            <li key={dorm}>
                                <button onClick={() => handleDormClick(dorm)}>
                                    {dorm}
                                </button>
                                {selectedDorm === dorm && roomTypes[dorm] && ( 
                                    <ul>
                                        {roomTypes[dorm].map((roomType) => (
                                            <li key={roomType}>
                                                <button onClick={() => handleRoomTypeClick(roomType)}>
                                                    {roomType}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {showRoomDetails && selectedDorm && selectedRoomType && Array.isArray(roomImages[selectedDorm][selectedRoomType]) && (
                <div>
                    <Link to="/dorm-pictures" style={{textDecoration: 'none'}}>
                        <button>Pictures</button>
                    </Link>

                    <button> View 3D Model (Coming Soon)</button>
                </div>
            )}
        </div>
    );
}

export default DormSelector
/*original*/