import React from 'react';
import {default as CollectionItem} from '../collection-item/collection-item.container'; 
import { CollectionPreviewContainer,CollectionTitleContainer,PreviewContainer  } from './collection-preview';


const CollectionPreview = ({title, items}) => ( 
    <CollectionPreviewContainer>
        <CollectionTitleContainer>{title.toUpperCase()}</CollectionTitleContainer>
        <PreviewContainer >
            {items.filter((item,idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item}/>
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>  
);

export default (CollectionPreview); 
