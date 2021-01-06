import React from 'react'; 
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'; 

class Directory extends React.Component {
    constructor() {
        super(); 
        this.state = {
            sections:   [ 
            {
                title: 'bottoms and leggings',
                imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/PowerLeggings_Lilac_06_1200x.jpg?v=1598260946',
                size: 'small',
                id: 1
            },
            {
                title: 'hoodies and jackets',
                imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/CroppedHoodie_RoyalBlue_05_a0b03f12-49f4-400c-b280-3aede181e6f6.jpg?v=1606820978',
                size: 'small',
                id: 2
            },
            {
                title: 'shorts',
                imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/CyclingShorts_Red_03_200x200_crop_center@2x.jpg?v=1598260938',
                size: 'small', 
                id: 3
            },
            {
                title: 'sports bras',
                imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/PowerBra_Black_02.jpg?v=1557241432',
                size: 'large',
                id: 4
            },
            {
                title: 't-shirts and tops',
                imageUrl: 'https://cdn.shopify.com/s/files/1/1812/3759/products/PowerLongSleeve_Black_02.jpg?v=1557241362',
                size: 'large',
                id: 5
            }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                 )) 
                }  
            </div>
        )
    }
}

export default Directory; 