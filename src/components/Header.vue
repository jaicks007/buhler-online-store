<template>
  <header class="app-header">
    <div class="header-container">
      <!-- Bühler Logo -->
      <div class="logo" @click="goToHome">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" class="logo-svg">
          <rect x="10" y="15" width="30" height="30" fill="#E30613" />
          <text x="50" y="40" font-family="Arial, sans-serif" font-size="32" font-weight="bold" fill="#333">
            Bühler
          </text>
        </svg>
      </div>

      <!-- Current Date and Time -->
      <div class="datetime">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>{{ formatDateTime(currentDateTime) }}</span>
      </div>

      <!-- Cart -->
      <div class="cart" @click="goToCheckout">
        <div class="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span v-if="cartCount > 0" class="cart-badge">{{ cartCount }}</span>
        </div>
        <span class="cart-text">Cart</span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useCart } from '../composables/useCart'
import { useDateTime } from '../composables/useDateTime'

const router = useRouter()
const { cartCount } = useCart()
const { currentDateTime, formatDateTime } = useDateTime()

const goToHome = () => {
  router.push('/')
}

const goToCheckout = () => {
  router.push('/checkout')
}
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 3px solid #E30613;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.logo {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-svg {
  height: 50px;
  width: auto;
}

.datetime {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-size: 0.95rem;
  font-weight: 500;
  flex: 1;
  justify-content: center;
}

.datetime svg {
  color: #E30613;
}

.cart {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  background: #E30613;
  color: white;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.cart:hover {
  background: #c00510;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(227, 6, 19, 0.3);
}

.cart-icon {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ffd700;
  color: #333;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  border: 2px solid white;
}

.cart-text {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .header-container {
    padding: 1rem;
    gap: 1rem;
  }

  .datetime {
    display: none;
  }

  .logo-svg {
    height: 40px;
  }

  .cart {
    padding: 0.6rem 1rem;
  }

  .cart-text {
    display: none;
  }
}
</style>
