import React from 'react'; 
import { SpinnerOverlayContainer,SpinnerContainer } from './with-spinner.styles';

// HOC is a function that takes another component(Wrapped Component as an argument) and gives us back a spinner component that will render the component we passed in(WrappedComponent) when isLoading is false 
const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlayContainer>
                <SpinnerContainer/>
            </SpinnerOverlayContainer>
        ) : 
        <WrappedComponent {...otherProps}/>
    }
    return Spinner; 
}
export default WithSpinner; 