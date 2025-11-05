<template>
  <div class="checkout">
    <div class="checkout-container">
      <h1 class="checkout-title">Shopping Cart</h1>

      <div v-if="cartItems.length === 0" class="empty-cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <h2>Your cart is empty</h2>
        <p>Add some products to get started</p>
        <button @click="goToProducts" class="continue-shopping-btn">
          Continue Shopping
        </button>
      </div>

      <div v-else class="checkout-content">
        <div class="cart-items">
          <div 
            v-for="item in cartItems" 
            :key="item.id" 
            class="cart-item"
          >
            <div class="item-image">
              <img :src="item.imageUrl || item.image" :alt="item.name" />
            </div>

            <div class="item-details">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-type">{{ item.category || item.type }}</p>
              <p class="item-id">ID: {{ item.id }}</p>
            </div>

            <div class="item-quantity">
              <button @click="decreaseQuantity(item)" class="quantity-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <span class="quantity-value">{{ item.quantity }}</span>
              <button @click="increaseQuantity(item)" class="quantity-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>

            <div class="item-price">
              <span class="price-label">Price</span>
              <span class="price-value">${{ formatPrice(item.price) }}</span>
            </div>

            <div class="item-subtotal">
              <span class="subtotal-label">Subtotal</span>
              <span class="subtotal-value">${{ formatPrice(item.price * item.quantity) }}</span>
            </div>

            <button @click="removeItem(item.id)" class="remove-btn" title="Remove from cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>

        <div class="cart-summary">
          <h2>Order Summary</h2>
          
          <div class="summary-details">
            <div class="summary-row">
              <span>Items ({{ totalItems }})</span>
              <span>${{ formatPrice(cartTotal) }}</span>
            </div>
            <div class="summary-row">
              <span>Shipping</span>
              <span class="free-text">FREE</span>
            </div>
            <div class="summary-row subtotal-row">
              <span>Subtotal</span>
              <span>${{ formatPrice(cartTotal) }}</span>
            </div>
            <div class="summary-row tax-row">
              <span>Tax (estimated)</span>
              <span>${{ formatPrice(taxAmount) }}</span>
            </div>
          </div>

          <div class="summary-total">
            <span>Total</span>
            <span class="total-amount">${{ formatPrice(grandTotal) }}</span>
          </div>

          <button class="place-order-btn" @click="placeOrder">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Place Order
          </button>

          <button @click="goToProducts" class="continue-shopping-link">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCart } from '../composables/useCart'

const router = useRouter()
const { cartItems, removeFromCart, cartTotal, addToCart, clearCart } = useCart()

const totalItems = computed(() => {
  return cartItems.value.reduce((total, item) => total + item.quantity, 0)
})

const taxAmount = computed(() => {
  return cartTotal.value * 0.08 // 8% tax
})

const grandTotal = computed(() => {
  return cartTotal.value + taxAmount.value
})

const formatPrice = (price) => {
  return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const removeItem = (productId) => {
  if (confirm('Are you sure you want to remove this item from cart?')) {
    removeFromCart(productId)
  }
}

const increaseQuantity = (item) => {
  addToCart(item)
}

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity -= 1
  } else {
    removeItem(item.id)
  }
}

const goToProducts = () => {
  router.push('/')
}

const placeOrder = () => {
  const orderTotal = formatPrice(grandTotal.value)
  const orderItems = totalItems.value
  
  alert(`Order placed successfully!\n\nTotal: $${orderTotal}\nItems: ${orderItems}\n\nThank you for your order!`)
  
  // Clear the cart after successful order
  clearCart()
  
  // Optionally redirect to home page
  setTimeout(() => {
    router.push('/')
  }, 500)
}
</script>

<style scoped>
.checkout {
  min-height: 100vh;
  background: #f5f7fa;
  padding: 2rem 0;
}

.checkout-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.checkout-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  font-weight: 700;
}

.empty-cart {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.empty-cart svg {
  color: #ccc;
  margin-bottom: 1.5rem;
}

.empty-cart h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.empty-cart p {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.continue-shopping-btn {
  background: #E30613;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.continue-shopping-btn:hover {
  background: #c00510;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(227, 6, 19, 0.3);
}

.checkout-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 2rem;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.cart-item {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 120px 1fr auto auto auto auto;
  gap: 1.5rem;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.cart-item:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.item-image {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.item-name {
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  margin: 0;
}

.item-type {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

.item-id {
  color: #999;
  font-size: 0.85rem;
  font-family: monospace;
  margin: 0;
}

.item-quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 8px;
}

.quantity-btn {
  background: white;
  border: 1px solid #ddd;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quantity-btn:hover {
  background: #E30613;
  border-color: #E30613;
  color: white;
}

.quantity-value {
  font-weight: 600;
  min-width: 30px;
  text-align: center;
}

.item-price,
.item-subtotal {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
}

.price-label,
.subtotal-label {
  font-size: 0.85rem;
  color: #666;
}

.price-value {
  font-size: 1.1rem;
  color: #333;
  font-weight: 600;
}

.subtotal-value {
  font-size: 1.3rem;
  color: #E30613;
  font-weight: 700;
}

.remove-btn {
  background: #fff;
  border: 2px solid #dc3545;
  color: #dc3545;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-btn:hover {
  background: #dc3545;
  color: white;
  transform: scale(1.1);
}

.cart-summary {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  height: fit-content;
  position: sticky;
  top: 100px;
}

.cart-summary h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.summary-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #555;
}

.free-text {
  color: #28a745;
  font-weight: 600;
}

.subtotal-row {
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
  font-weight: 600;
  color: #333;
}

.tax-row {
  color: #666;
  font-size: 0.95rem;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 2px solid #E30613;
}

.summary-total span:first-child {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
}

.total-amount {
  font-size: 2rem;
  font-weight: 700;
  color: #E30613;
}

.place-order-btn {
  width: 100%;
  background: #E30613;
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.place-order-btn:hover {
  background: #c00510;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(227, 6, 19, 0.3);
}

.continue-shopping-link {
  width: 100%;
  background: transparent;
  color: #E30613;
  border: 2px solid #E30613;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.continue-shopping-link:hover {
  background: #E30613;
  color: white;
}

@media (max-width: 1200px) {
  .checkout-content {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }

  .cart-item {
    grid-template-columns: 100px 1fr;
    gap: 1rem;
  }

  .item-quantity,
  .item-price,
  .item-subtotal,
  .remove-btn {
    grid-column: 2;
  }
}

@media (max-width: 640px) {
  .checkout-container {
    padding: 0 1rem;
  }

  .checkout-title {
    font-size: 1.8rem;
  }

  .cart-item {
    grid-template-columns: 80px 1fr;
    padding: 1rem;
  }

  .item-image {
    width: 80px;
    height: 80px;
  }

  .item-name {
    font-size: 1rem;
  }

  .cart-summary {
    padding: 1.5rem;
  }
}
</style>
