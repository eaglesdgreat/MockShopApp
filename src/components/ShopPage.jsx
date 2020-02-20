import React, { Component } from 'react';
import { connect } from 'react-redux';
import {cartActions} from './_actions/addToCartAction';

class Shop extends Component{
     //to click item to cart
     handleClick = (id)=>{
        this.props.cartActions.add_to_cart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <p><img class=" img-fluid" src={item.img} alt={item.title}/></p>
                                        <h4 class="card-title">{item.title}</h4>
                                        <p class="card-text">{item.desc}</p>
                                        <p class="card-text"><b>Price: {item.price}$</b></p>
                                        <a href="/shop" class="btn btn-primary btn-sm" onClick={()=>{this.handleClick(item.id)}}><i class="fa fa-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="backside">
                                <div class="card">
                                    <div class="card-body text-center mt-4">
                                        <h4 class="card-title">{item.title}</h4>
                                        <p class="card-text">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                // <div className="card" key={item.id}>
                //         <div className="bd-placeholder-img card-img-top">
                //             <img src={item.img} alt={item.title} width="300" height="200"/>
                //             <span className="card-title">{item.title}</span>
                //             <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="fa fa-plus">add</i></span>
                //         </div>

                //         <div className="card-content">
                //             <p>{item.desc}</p>
                //             <p><b>Price: {item.price}$</b></p>
                //         </div>
                //  </div>
            )
        })

        return(
            <div className="container">
                <h5 class="section-title h1 left">ITEMS IN STORE</h5>
                <div className="row">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps = (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(cartActions.add_to_cart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Shop)