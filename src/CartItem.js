import React from 'react';
class CartItem extends React.Component {

       render() {

        const {price,title,qty} = this.props.product;
        const {product,
            onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
               } = this.props;
      
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
                                onClick={() => { onIncreaseQuantity(product)}}

                                 />
                                <img alt="decrease"
                                className="action-icons"
                                src="https://image.flaticon.com/icons/svg/864/864373.svg"
                                onClick={() => { onDecreaseQuantity(product)}}
                                 />
                                <img alt="delete" 
                                className="action-icons" 
                                src="https://image.flaticon.com/icons/svg/1345/1345823.svg" 
                                onClick={() => {onDeleteProduct(product.id)}}
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