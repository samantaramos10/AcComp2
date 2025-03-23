const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

function proceedToCheckout() {
    // Guardar el carrito y el total en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total.toFixed(2));
    // Redirigir a la página del carrito
    window.location.href = 'carrito.html';
}