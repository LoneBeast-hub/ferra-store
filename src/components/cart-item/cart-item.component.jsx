// styled Components
import React from "react";
import { CartItemContainer, ItemDetailsContainer, NameContainer, ImgContainer } from "./cart-item.styles";

export const CartItem = React.memo(({ item: {imgUrl, name, price, quantity} }) => {
    return(
        <CartItemContainer>
            <ImgContainer src={imgUrl} alt="item" />
            <ItemDetailsContainer className="item-details">
                <NameContainer className="name"> {name} </NameContainer>
                <span> {quantity} x &#8358;{price} </span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
})