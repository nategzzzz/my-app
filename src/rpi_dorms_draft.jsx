import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import NoPictures from './DormPictures';
import './style.css';

function DormSelector(){
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedDorm, setSelectedDorm] = useState(null);
    const [selectedRoomType, setSelectedRoomType] = useState(null);
    const [showRoomDetails, setShowRoomDetails] = useState(null);
    const [showModelList, setShowModelList] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleYearClick = (year) => {setSelectedYear(year);};
    const handleDormClick = (dorm) => {
        console.log('Selected dorm:', dorm);
        setSelectedDorm(dorm);
    };
    const handleRoomTypeClick = (roomType) => 
        {
            setSelectedRoomType(roomType);
            setShowRoomDetails(true);
        };
    const handleShowModelList = () => setShowModelList(!showModelList);
    const handleVideoClick = (videoUrl) => setSelectedVideo(videoUrl);
    
    const dormData = 
    {
        Freshman: ['Barton Hall', 'Bray Hall', 'Sharp Hall'],
        Sophomore: ['North Hall', 'E-Complex', 'Blitman','Quadrangle (Quad)', 'Colvin and Albright (RAHP A)', 'Beman and Brinsmade (RAHP B)'],
        Junior: ['City Station', 'Polytechnic', 'Bryckwyck Apartments', 'Stacwyck Apartments'],
        Senior: ['City Station', 'Polytechnic','Bryckwyck Apartments', 'Stacwyck Apartments']
    };

    const roomTypes =
    {
        'Barton Hall':['Triple'],
        'Bray Hall': ['Single', 'Double'],
        'Sharp Hall':['Single Suite'],
        'North Hall': ['Single', 'Double'],
        'E-Complex': ['Single', 'Double'],
        'Blitman':['Apartment'],
        'Quadrangle (Quad)':['Single','Double','Quadruple'],
        'Colvin and Albright (RAHP A)':['Apartment'],
        'Beman and Brinsmade (RAHP B)':['Apartment']
    }
    
    const modelData = {
        'E-Complex': {
            'Single': [
                {name: 'E-Complex_Single1', videoUrl: '/Finalized_Models/Ecomplex_Single.mp4'},
                {name: 'E-Complex_Single2', videoUrl: '/Finalized_Models/Ecomplex_Single2.mp4'}
            ],
            'Double': [
                //{name: 'E-Complex_Double1', videoUrl: '/Finalized_Models/Ecomplex_Double.mp4'}
            ]
        },
    
        'Blitman': {
            'Apartment': [
                {name: 'Blitman_Apt1', videoUrl: '/Finalized_Models/Blitman_Apt1.mp4'}
            ]
        }
    
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
            {showRoomDetails && selectedDorm && selectedRoomType && (
                <div>
                    <Link to="/dorm-pictures" style={{textDecoration: 'none'}}>
                        <button>Videos</button>
                    </Link>

                    <button onClick={handleShowModelList}>View 3D Model</button>
                    
                    {showModelList && modelData[selectedDorm] && modelData[selectedDorm][selectedRoomType] && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                            {modelData[selectedDorm][selectedRoomType].map((model, index) => {
                                console.log('Model name:', model.name);
                                console.log('Model video URL:', model.videoUrl);

                                return (
                                    <button
                                        key={index}
                                        onClick={() => handleVideoClick(model.videoUrl)}
                                        style={{
                                            padding: '10px',
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            backgroundColor: '#f0f0f0',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {model.name}
                                    </button>
                                );
                            })}
                        </div>
                    )}

                </div>
            )}
            {selectedVideo && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Video Preview</h3>
                    <video controls style={{ width: '100%', maxWidth: '600px' }}>
                        <source src={selectedVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
}

export default DormSelector
/*original*/