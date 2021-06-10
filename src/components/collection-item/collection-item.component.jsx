import React from 'react'; 
import {connect} from 'react-redux'; 
import { addItem} from '../../redux/cart/cart.actions';
import { CollectionItemContainer,ImageContainer,
    QuickAddContainer,QuickAddContentContainer,
    CollectionButtonContainer,CollectionFooterContainer, NameContainer,PriceContainer} from './collection-item';

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
        const {item, addItemToCart} = this.props;   
        return (
        <CollectionItemContainer
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
        >
            <ImageContainer
            style={{
                backgroundImage: this.state.backgroundImage
            }}
            />
            <QuickAddContainer>
            {
            hidden ? null : 
            <QuickAddContentContainer>
            <form onSubmit={this.handleSubmit}>
                <p>Quick Add</p>
                <CollectionButtonContainer onClick={() => addItemToCart(item)}>S</CollectionButtonContainer>
                <CollectionButtonContainer onClick={() => addItemToCart(item)}>M</CollectionButtonContainer>
                <CollectionButtonContainer onClick={() => addItemToCart(item)}>L</CollectionButtonContainer>
                <CollectionButtonContainer onClick={() => addItemToCart(item)}>XL</CollectionButtonContainer>
            </form>
            </QuickAddContentContainer>
            }
            </QuickAddContainer>
            <CollectionFooterContainer>
                <NameContainer>{item.name}</NameContainer>
                <PriceContainer>${item.price}</PriceContainer>
            </CollectionFooterContainer>
        </CollectionItemContainer>
        ); 
    }
}

/*
    const mapDispatchToProps = dispatch => ({
        addItem: item => dispatch(addItem(item))
    })
*/ 


export default CollectionItem;
// connect(null,mapDispatchToProps)


