import React from 'react';
import { useParams } from 'react-router-dom';

function DormPictures({roomImages})
{
    const {dorm, roomType}=useParams();

    return(
        <div>
            <h2>{dorm} - {roomType} Pictures</h2>
            <div>
                {roomImages[dorm][roomType].map((imageURL, index)=>(
                    <img
                    key={index}
                    src={imageURL}
                    alt={'${roomType} Example'}
                    style={{width: '200px', height: '150px', marginRight: '10px'}}
                    />
                ))}
            </div>
        </div>
    );
}
export default DormPictures;
