function calculateDiscount(price, discountPercent) {
    let discount = (price * discountPercent) / 100;
    return price - discount;
}
