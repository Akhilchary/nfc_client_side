import React from 'react'
// import productsData from './prodCard1Data';
import "./productsCust.css";

const Card2 = (props) => {
    let card2imgcss={'margin-left':'3vw','padding':'2vw'};
    if(props.p_or_c==='C'){
        card2imgcss={'margin-left':'3vw','padding':'2vw','height':'12vh','margin-top':'5vh','width':'10vw'};
    }else{
        card2imgcss={};
    }



  return (
    <>
   { props.Data.map(x=>{
        return(
            <>
                <div className='card2-div'>
                    <div className='card2-img'>
                        <img src={x.image} style={card2imgcss} alt="" />
                    </div>
                    <div className='card2-content'>
                        <p>{x.imageName}</p>
                        <div className='card2-internal-con'>
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

export default Card2