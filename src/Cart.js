import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor(){
        super();
       

        this.state = {
        products:[
            {
                price:900,
                title:"Mobile Phones",
                qty: 9,
                img:'',
                id:1
           },
           {
            price:102,
            title:"Mobile Phones",
            qty: 8,
            img:'',
            id:2
          },

          {
            price:14300,
            title:"Mobile Phones",
            qty:5,
            img:'',
            id:3
          },

          {
            price:103210,
            title:"Mobile Phones",
            qty: 1,
            img:'',
            id:4
         },

         {
            price:1090,
            title:"Mobile Phones",
            qty: 5,
            img:'',
            id:5
         }

        ]

    }
       
    }

    handleIncreaseQuantity = (product) => {
        console.log('Hey Please Increase the Quantity of product',product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({

            products:products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('Hey Please Increase the Quantity of product',product);
        const {products} = this.state;
        const index = products.indexOf(product);
           if(products[index].qty == 0){

            return;
           }

        products[index].qty -= 1;

        this.setState({

            products:products
        })
    }
    handleDeleteProduct = (id) => {

               const {products} = this.state;
               const items = products.filter((item) => item.id != id);
               this.setState({
                     products:items
               })
    }
  render(){
      const {products} = this.state;
      return (
         <div  className="cart">

            {products.map( (product) => {
                 
                 return <CartItem 
                 product={product} 
                 key={product.id}
                 onIncreaseQuantity={this.handleIncreaseQuantity}
                 onDecreaseQuantity={this.handleDecreaseQuantity}
                 onDeleteProduct={this.handleDeleteProduct}
                 />
            })}
         </div>
        
        
      );

  }
}

export default Cart;