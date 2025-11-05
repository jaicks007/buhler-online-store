<template>
  <div class="product-details">
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading product details...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <button @click="goBack" class="back-btn">Go Back</button>
    </div>

    <div v-else-if="product" class="product-container">
      <!-- Back Button -->
      <button @click="goBack" class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Products
      </button>

      <div class="product-content">
        <!-- Product Image -->
        <div class="product-image-section">
          <img :src="product.imageUrl" :alt="product.name" class="product-image" />
        </div>

        <!-- Product Information -->
        <div class="product-info-section">
          <h1 class="product-title">{{ product.name }}</h1>
          
          <div class="product-meta">
            <span class="product-type">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
              {{ product.category }}
            </span>
            <span class="product-id">ID: {{ product.id }}</span>
          </div>

          <p class="product-description">High-quality industrial equipment from Bühler. This product combines cutting-edge technology with reliable performance for your manufacturing needs.</p>

          <div class="product-pricing">
            <div class="price-section">
              <span class="price-label">Price</span>
              <span class="price-value">${{ formatPrice(product.price) }}</span>
            </div>
          </div>

          <div class="product-actions">
            <button 
              @click="handleAddToCart" 
              class="add-to-cart-btn"
              :class="{ 'added': isAdded }"
            >
              <svg v-if="!isAdded" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {{ isAdded ? 'Added to Cart' : 'Add to Cart' }}
            </button>

            <button @click="goToCheckout" class="checkout-btn">
              Proceed to Checkout
            </button>
          </div>

          <div class="product-features">
            <h3>Key Features</h3>
            <ul>
              <li>Industrial-grade construction</li>
              <li>Advanced automation capabilities</li>
              <li>Energy-efficient operation</li>
              <li>Easy maintenance and servicing</li>
              <li>Comprehensive warranty coverage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCart } from '../composables/useCart'

const router = useRouter()
const route = useRoute()
const { addToCart } = useCart()

const product = ref(null)
const loading = ref(true)
const error = ref(null)
const isAdded = ref(false)

const productId = computed(() => route.params.productId)

const loadProduct = async () => {
  try {
    loading.value = true
    const response = await fetch('/products.json')
    if (!response.ok) {
      throw new Error('Failed to load product data')
    }
    const products = await response.json()
    
    // Find the product by ID
    const foundProduct = products.find(p => p.id === productId.value)
    
    if (!foundProduct) {
      throw new Error('Product not found')
    }
    
    product.value = foundProduct
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const formatPrice = (price) => {
  return price.toLocaleString('en-US')
}

const handleAddToCart = () => {
  addToCart(product.value)
  isAdded.value = true
  
  setTimeout(() => {
    isAdded.value = false
  }, 2000)
}

const goBack = () => {
  router.push('/')
}

const goToCheckout = () => {
  router.push('/checkout')
}

onMounted(() => {
  loadProduct()
})
</script>

<style scoped>
.product-details {
  min-height: 100vh;
  background: #f5f7fa;
}

.loading,
.error {
  text-align: center;
  padding: 4rem 2rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #E30613;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.product-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 2px solid #E30613;
  color: #E30613;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: #E30613;
  color: white;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.product-image-section {
  position: relative;
}

.product-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-info-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.product-title {
  font-size: 2.5rem;
  color: #333;
  margin: 0;
  font-weight: 700;
}

.product-meta {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;
}

.product-type {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #E30613;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
}

.product-id {
  color: #666;
  font-family: monospace;
  font-size: 0.95rem;
}

.product-description {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.8;
}

.product-pricing {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #E30613;
}

.price-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.price-label {
  color: #666;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.price-value {
  font-size: 2.5rem;
  color: #E30613;
  font-weight: 700;
}

.product-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.add-to-cart-btn,
.checkout-btn {
  flex: 1;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.add-to-cart-btn {
  background: #E30613;
  color: white;
}

.add-to-cart-btn:hover {
  background: #c00510;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(227, 6, 19, 0.3);
}

.add-to-cart-btn.added {
  background: #28a745;
}

.checkout-btn {
  background: #333;
  color: white;
}

.checkout-btn:hover {
  background: #000;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.product-features {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
}

.product-features h3 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.product-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-features li {
  padding: 0.5rem 0;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.product-features li::before {
  content: "✓";
  color: #28a745;
  font-weight: bold;
  font-size: 1.2rem;
}

@media (max-width: 968px) {
  .product-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .product-image {
    height: 400px;
  }

  .product-title {
    font-size: 2rem;
  }

  .product-actions {
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .product-container {
    padding: 1rem;
  }

  .product-content {
    padding: 1.5rem;
  }

  .product-image {
    height: 300px;
  }

  .product-title {
    font-size: 1.5rem;
  }

  .price-value {
    font-size: 2rem;
  }
}
</style>
