document.addEventListener('DOMContentLoaded', () => {
  const cartProductsContainer = document.querySelector('.cart__products');

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.matches('.product__quantity-control')) {
      const productCard = target.closest('.product');
      const valueEl = productCard.querySelector('.product__quantity-value');
      let currentValue = parseInt(valueEl.textContent, 10) || 1;

      if (target.classList.contains('product__quantity-control_inc')) {
        currentValue++;
      } else if (target.classList.contains('product__quantity-control_dec')) {
        currentValue = Math.max(1, currentValue - 1);
      }

      valueEl.textContent = currentValue;
    }

    if (target.matches('.product__add')) {
      const productCard = target.closest('.product');
      const id = productCard.dataset.id;
      const imageSrc = productCard.querySelector('.product__image').src;
      const quantity = parseInt(productCard.querySelector('.product__quantity-value').textContent, 10) || 1;

      addToCart(id, imageSrc, quantity);
    }
  });

  function addToCart(id, imageSrc, quantity) {
    const existingProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${id}"]`);

    if (existingProduct) {
      const countEl = existingProduct.querySelector('.cart__product-count');
      const currentCount = parseInt(countEl.textContent, 10) || 0;
      countEl.textContent = currentCount + quantity;
    } else {
      const newProduct = document.createElement('div');
      newProduct.className = 'cart__product';
      newProduct.dataset.id = id;

      const img = document.createElement('img');
      img.className = 'cart__product-image';
      img.src = imageSrc;

      const count = document.createElement('div');
      count.className = 'cart__product-count';
      count.textContent = quantity;

      newProduct.appendChild(img);
      newProduct.appendChild(count);
      cartProductsContainer.appendChild(newProduct);
    }
  }
});
