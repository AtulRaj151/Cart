import React from 'react';

class CartItem extends React.Component {
       render() {

           return (
               <div className="cart-item">

                     <div className="left-block">
                           <img style={Style.image}></img>
                     </div>

                     <div className="right-block">
                         <div style={ {fontSize:25 } }>Phone</div>
                         <div  style={ { color:"#777" } }>Rs. 1999</div>
                         <div  style={ { color:"#777" } }>Qty. 1</div>

                         <div className="cart-item-actions">
                                {/* Buttons */}

                         </div>

                     </div>

               </div>

           );
           
       }
}

const Style = {
    image:{
        height:100,
        width:110,
        borderRadius:4,
        background:"#ccc"
        
    }
}
export default CartItem;