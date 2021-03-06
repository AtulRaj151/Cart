import React from 'react';
import Cart from './Cart';
// import CartItem from './CartItem';

import Navbar from './Navbar'
import * as firebase from 'firebase';
class App extends React.Component {

  constructor(){
    super();
   

    this.state = {
    products:[]  ,
    loading:true
  }  
  this.db = firebase.firestore();  
}

componentDidMount() {
    //  firebase
    //  .firestore()
    //  .collection('products')
    //  .get()
    //  .then((snapshot) =>{
    //      snapshot.docs.map((doc) => {
    //         console.log(doc.data())
    //      })

    //      const product = snapshot.docs.map((doc) => {
    //         const data  = doc.data();
    //         data['id'] = doc.id;

    //         return data;
    //      })
    //  this.setState({
    //    products:product,
    //    loading:false
    //  })
         
    //  })

  this.db
    .collection('products')
    // .where('price','>',900)
    .orderBy('price','desc')
    .onSnapshot((snapshot) =>{
      snapshot.docs.map((doc) => {
         console.log(doc.data())
      })

      const product = snapshot.docs.map((doc) => {
         const data  = doc.data();
         data['id'] = doc.id;

         return data;
      })
  this.setState({
    products:product,
    loading:false
  })
      
  })
}

  


handleIncreaseQuantity = (product) => {
    console.log('Hey Please Increase the Quantity of product',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({

    //     products:products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
     .update({
         qty: products[index].qty + 1
     })
     .then(()=>{
       console.log("updated");
     })
     .catch((err) =>{
        console.log('error',err);
     })
      
     
}

handleDecreaseQuantity = (product) => {
        
          const {products,loading} = this.state;
          const index = products.indexOf(product);
            if(products[index].qty == 0){

              return;
            }
// 
          // products[index].qty -= 1;

          // this.setState({

          //     products:products
          // })

          const docRef = this.db.collection('products').doc(products[index].id);

          docRef
           .update({
               qty: products[index].qty - 1
           })
           .then(()=>{
             console.log("updated");
           })
           .catch((err) =>{
              console.log('error',err);
           })
      }
      handleDeleteProduct = (id) => {

                const {products} = this.state;
                // const items = products.filter((item) => item.id != id);
                // this.setState({
                //       products:items
                     
                // })

                const docRef = this.db.collection('products').doc(id);

                docRef
                .delete()
                .then(() =>{
                  console.log('Deleted');
                })
                .catch((err) =>{
                    console.log('error',err);
                })




      }

      getCartCount = () => {

          const {products} = this.state;

          let count  = 0;

          products.forEach((product) =>{
              count += product.qty;
          })


          return count;
      }

      getCartTotal = () =>{
            const {products} = this.state;
           let  cartTotal = 0;
            products.map((product) =>{
                cartTotal = cartTotal + product.qty * product.price;
                 
            });
            return cartTotal;
      }

      addProduct = () => {
          this.db
          .collection('products')
          .add({
            img:'',
            price:900,
            qty:2,
            title:'Game'
          })
          .then((docRef)=>{
            console.log("product has been added",docRef);
          })
          .catch((err) =>{
               console.log(err);
          })
      }


        render(){
          const {products,loading} = this.state;
        return (
          <div className="App">
            <Navbar count={this.getCartCount()}/>
            <button onClick={this.addProduct}>add product</button>
            <Cart 
                 products={products} 
                 onIncreaseQuantity={this.handleIncreaseQuantity}
                 onDecreaseQuantity={this.handleDecreaseQuantity}
                 onDeleteProduct={this.handleDeleteProduct}
          
            />
            {loading && <h1>Loading Products ...</h1>}
             <div style={{fontSize:20,padding: 20 }}>
               Total Price: Rs
            {" " +this.getCartTotal()}
          </div>
          </div>
         
        );

        }
}

export default App;
