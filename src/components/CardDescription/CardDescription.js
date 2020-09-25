import React from 'react';
import { useLocation } from 'react-router-dom';
import travelData from '../../assets/travel-guru/fakeData/travelData';


const CardDescription = (props) => {
    const location = useLocation();
    
    return (
        <div className="text-white w-75 mx-auto mt-5">
            {    
            location.pathname === '/' ? (
                    <>
                    {/* Default */}
                        <h1 className="text-center">{travelData[0].name}</h1>
                        <p className="text-center">{travelData[0].shortDesc}</p>
                    </> 
                ) : (
                    <>
                        <h1>{props.locationData?.name}</h1>
                        <p>{props.locationData?.desc}</p>
                    </> 
            )

            }
        </div>
    );
};

export default CardDescription;