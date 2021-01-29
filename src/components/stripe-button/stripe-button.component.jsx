import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 
import logo from '../../assets/wellness-logo.svg'; 

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100; 
    const publishableKey = 'pk_test_51IE26sGXsFzuFS5CYkPQQAxau71iyBuoetfr3SXdnA1PNHvkQfyR7w9DaES9K4iVyhaIKN1d6yQMp4VJloll4LeL00gBOohKcP';
    
    const onToken = token => {
        alert('Payment Successful'); 
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name="Fit Clothing"
            billingAddress 
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        /> 
    )
}

export default StripeCheckoutButton; 