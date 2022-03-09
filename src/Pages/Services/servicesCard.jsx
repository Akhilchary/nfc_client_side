import React from 'react'
// import productsData from './prodCard1Data';
import "./services.css";

import servicesdata from './servicesdata';

const ServicesCard = () => {

    // let card2imgcss={'margin-left':'3vw','padding':'2vw'};
    // if(props.p_or_c==='C'){
    //     card2imgcss={'margin-left':'3vw','padding':'2vw','height':'12vh','margin-top':'5vh','width':'10vw'};
    // }else{
    //     card2imgcss={};
    // }



  return (
    <>
   { servicesdata.map(x=>{
        return(
            <>
                <div className='serv-card-div'>
                    <div className='serv-card-img'>
                        <img src={x.image} alt="" />
                    </div>
                    <div className='serv-card-content'>
                        <p>{x.imageName}</p>
                        <div className='serv-card-internal-con'>
                            <p>{x.content}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    )}
    </>
  )
}

export default ServicesCard