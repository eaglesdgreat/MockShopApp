import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {cartActions} from './_actions/addToCartAction'


class Cart extends Component{
        //to remove the item completely
        handleRemove = (id)=>{
            this.props.cartActions.remove_item(id);
        }
        //to add the quantity
        handleAddQuantity = (id)=>{
            this.props.cartActions.add_quantity(id);
        }
        //to substruct from the quantity
        handleSubtractQuantity = (id)=>{
            this.props.cartActions.sub_quantity(id);
        }

    render(){ 
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="img-fluid"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="card-title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="fa fa-arrow-up">arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="fa fa-arrow-down">arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove">Remove</button>
                                    </div>
                                    
                               </li>                        
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>  
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(cartActions.remove_item(id))},
        addQuantity: (id)=>{dispatch(cartActions.add_quantity(id))},
        subtractQuantity: (id)=>{dispatch(cartActions.sub_quantity(id))}
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Cart)