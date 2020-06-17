import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
             price:1000,
             title:"Mobile Phones",
             qty: 1,
             img:''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () =>{
        console.log('this',this);
    }
       render() {
        const {price,qty,title } = this.state;
           return (
               <div className="cart-item">

                     <div className="left-block">
                           <img style={Style.image}></img>
                     </div>

                     <div className="right-block">
                         <div style={ {fontSize:25 } }>{ title}</div>
                         <div  style={ { color:"#777" } }>Rs. {price}</div>
                         <div  style={ { color:"#777" } }>Qty. {qty}</div>

                         <div className="cart-item-actions">
                         
                                <img 
                                alt="increase" 
                                className="action-icons"
                                src="https://image.flaticon.com/icons/svg/992/992651.svg"
                                onClick={this.increaseQuantity}

                                 />
                                <img alt="decrease"
                                className="action-icons"
                                src="https://image.flaticon.com/icons/svg/864/864373.svg"
                                 />
                                <img alt="delete" 
                                className="action-icons" 
                                src="https://image.flaticon.com/icons/svg/1345/1345823.svg" 
                                />

                         </div>

                     </div>

               </div>

           );
           
       }
}

const Style = {
    image:{
        height:120,
        width:110,
        borderRadius:4,
        background:"#ccc"
        
    }
}
export default CartItem;