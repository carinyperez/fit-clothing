import React from 'react'; 
import './collection-item.styles.scss'; 

// reference to anon function that takes props and renders component
// pulling data from shop data 

class CollectionItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            backgroundImage: `url(${props.imageUrl})`, 
            hidden: true
        }
    }
   handleMouseEnter = () => {
    const {changeImageUrl} = this.props; 
    this.setState({
        backgroundImage: `url(${changeImageUrl})`, 
        hidden: false
      });
    };
    handleMouseLeave = () => {
    const {imageUrl} = this.props; 
    this.setState({
        backgroundImage: `url(${imageUrl})`,
        });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
           hidden: true
        });
    } 

    render () {
        const {hidden} = this.state;
        const {name, price} = this.props; 
        return (
        <div className='collection-item'>
            <div className='image' 
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{
                backgroundImage: this.state.backgroundImage
            }}
            
            />
            <div className='quickadd'>

            {hidden ? null : 
            <div className='quickadd-content'>
            <form onSubmit={this.handleSubmit}>
                <p>Quick Add</p>
                <button type='submit'>S</button>
                <button type='submit' >M</button>
                <button type='submit'>L</button>
                <button type='submit'>XL</button>
            </form>
            </div>}
            
            </div>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
        ); 
    }
}

export default CollectionItem;

