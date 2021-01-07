import React from 'react'; 
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'; 

class Directory extends React.Component {
    constructor() {
        super(); 
        this.state = { 
            sections: [ 
                {
                    title: 'bottoms and leggings',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/PowerLeggings_Lilac_06_1200x.jpg?v=1598260946',
                    size: 'small',
                    id: 1,
                    linkUrl: 'bottomsandleggings'
                },
                {
                    title: 'hoodies and jackets',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/CroppedHoodie_RoyalBlue_01_64c25d34-94f6-4b35-ac0a-840554d043bf_650x.jpg?v=1606820976',
                    size: 'small',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'shorts',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/CyclingShorts_Red_03_200x200_crop_center@2x.jpg?v=1598260938',
                    size: 'small', 
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'sports bras',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/PowerBra_Black_02.jpg?v=1557241432',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 't-shirts and tops',
                    imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/PowerLongSleeve_Black_02.jpg?v=1557241362',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
                ]

        }
    }

    render() { 
        return ( 
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                    
                 )) 
                }  
            </div>
        )
    }
}

export default Directory; 