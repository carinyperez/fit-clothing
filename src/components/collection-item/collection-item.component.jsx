import React from 'react'; 
import './collection-item.styles.scss'; 

// reference to anon function that takes props and renders component
// pulling data from shop data 

class CollectionItem extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            backgroundImage: `url(${props.imageUrl})`
        }
    }
   handleMouseEnter = () => {
    const {changeImageUrl} = this.props; 
    this.setState({
        backgroundImage: `url(${changeImageUrl})`
      });
    };
    handleMouseLeave = () => {
    const {imageUrl} = this.props; 
    this.setState({
        backgroundImage: `url(${imageUrl})`
        });
    };

    render () {
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
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
        ); 
    }
}

export default CollectionItem;

