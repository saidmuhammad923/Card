                                      // Данные для привязки//

document.addEventListener('DOMContentLoaded', function() {
  const productList = document.getElementById('product-list');
  const cartItems = document.getElementById('cart-items');
  const totalAmount = document.getElementById('total-amount');
  const checkoutBtn = document.getElementById('checkout-btn');
  
                                        // Кнопка добавить товар//

  productList.addEventListener('click', function(event) {
    if (event.target.classList.contains('plus-to-cart-btn')) {
      const li = event.target.parentNode;
      const counter = li.querySelector('[data-counter]');
      const price = parseInt(li.getAttribute('data-price'));

      let count = parseInt(counter.textContent);
      count += 1;
      counter.textContent = count;

      const id = li.getAttribute('data-id');
      const name = li.querySelector('span').textContent;
       const cartItem = document.createElement('li');
      cartItem.textContent = name;
      cartItem.setAttribute('data-id', id);
      cartItems.appendChild(cartItem);

      const total = parseInt(totalAmount.textContent);
      totalAmount.textContent = total + price;

                                  //  Кнопка отмены продукта//

    } else if (event.target.classList.contains('minus-to-cart-btn')) {
      const li = event.target.parentNode;
      const counter = li.querySelector('[data-counter]');
      const price = parseInt(li.getAttribute('data-price'));

      let count = parseInt(counter.textContent);
      if (count > 0) {
        count -= 1;
        counter.textContent = count;


        const id = li.getAttribute('data-id');
        const cartItemsList = cartItems.querySelectorAll('li');
        for (let i = 0; i < cartItemsList.length; i++) {
          if (cartItemsList[i].getAttribute('data-id') === id) {
            cartItems.removeChild(cartItemsList[i]);
            break;
          }
        }

        // Общая сумма //

        const total = parseInt(totalAmount.textContent);
        totalAmount.textContent = total - price;
      }
    }
  });
});