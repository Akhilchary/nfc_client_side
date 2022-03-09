import React from 'react'
// import productsData from './prodCard1Data';
import "./productsCust.css";
export const Card1 = (props) => {
    // console.log(" props prodcard1 ",props," p or c ",props.p_or_c);
    let card1c={"display":'none'};
    let card1_img={'height':'12vh','width':'8vw'};
    let intercard1css={'height':'40vh'};
    if(props.p_or_c==='C'){
        card1c={"display":'none'};
        card1_img={'height':'12vh','width':'10vw'};
        intercard1css={'height':'40vh'};
    }else{
        card1c={};
        card1_img={};
        intercard1css={};
        
    }
    return (
        <>
        {
            props.Data.map(x=>{
                return (
                <>
                <div key={x.id} className='inter-card1' style={intercard1css}>
                    <div className='card1-img'>
                        <img style={card1_img} src={x.image} alt="" srcset="" />
                    </div>
                    <div className='card1-c'>
                        <p style={card1c}>{x.imageName}</p>
                    </div>
                </div>
                </>
                );
            })
        }
        

        </>
        );
}
