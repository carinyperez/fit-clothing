import React from 'react'; 
import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from './directory.selectors';
import {createStructuredSelector} from 'reselect'; 
import {connect} from 'react-redux'; 
import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({sections}) =>  (
    <DirectoryMenuContainer>
        {sections.map(({id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps}/>     
            )) 
        }  
    </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory); 