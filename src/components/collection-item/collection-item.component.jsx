import React from 'react'; 
import './collection-item.styles.scss'; 
import {connect} from 'react-redux'; 
import { addItem} from '../../redux/cart/cart.actions';

// reference to anon function that takes props and renders component
// pulling data from shop data 

class CollectionItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            backgroundImage: `url(${props.item.imageUrl})`, 
            hidden: true, 
        }
    }
   handleMouseEnter = () => {
    const {changeImageUrl} = this.props.item; 
    this.setState({
        backgroundImage: `url(${changeImageUrl})`, 
        hidden: false
    
      });
    };
    handleMouseLeave = () => {
    const {imageUrl} = this.props.item; 
    this.setState({
        backgroundImage: `url(${imageUrl})`,
        hidden: true
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();

    } 

    render () {
        const {hidden} = this.state;
        const {item, addItem} = this.props;   
        return (
        <div className='collection-item'
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
        >
            <div className='image' 
            style={{
                backgroundImage: this.state.backgroundImage
            }}
            
            />
            <div className='quickadd'>
            {
            hidden ? null : 
            <div className='quickadd-content'>
            <form onSubmit={this.handleSubmit}>
                <p>Quick Add</p>
                <button onClick={() => addItem(item)}>S</button>
                <button type='submit' onClick={() => addItem(item)}>M</button>
                <button type='submit' onClick={() => addItem(item)}>L</button>
                <button type='submit' onClick={() => addItem(item)}>XL</button>
            </form>
            </div>
            }
            </div>
            <div className='collection-footer'>
                <span className='name'>{item.name}</span>
                <span className='price'>${item.price}</span>
            </div>
        </div>
        ); 
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);

