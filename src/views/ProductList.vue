<template>
  <div class="product-list">
    <div class="hero-section">
      <h1>Bühler Industrial Solutions</h1>
      <p>Explore our comprehensive range of industrial equipment and automation solutions</p>
    </div>

    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>Loading products...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
    </div>

    <div v-else class="sections-container">
      <section v-for="section in productData.sections" :key="section.id" class="product-section">
        <h2 class="section-title">{{ section.name }}</h2>
        
        <div class="products-grid">
          <div 
            v-for="product in section.products" 
            :key="product.id" 
            class="product-card"
          >
            <div class="product-image" @click="viewProductDetails(product.id)">
              <img :src="product.imageUrl" :alt="product.name" />
              <div class="image-overlay">
                <span>View Details</span>
              </div>
            </div>
            
            <div class="product-info">
              <h3 class="product-name" @click="viewProductDetails(product.id)">
                {{ product.name }}
              </h3>
              <p class="product-type">{{ product.category.replace('machine_', '').replace('_', ' ') }}</p>
              <div class="product-footer">
                <span class="product-price">${{ formatPrice(product.price) }}</span>
                <button 
                  class="add-to-cart-btn" 
                  @click="handleAddToCart(product)"
                  :class="{ 'added': addedProducts.has(product.id) }"
                >
                  <svg v-if="!addedProducts.has(product.id)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  {{ addedProducts.has(product.id) ? 'Added' : 'Add to Cart' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useCart } from '../composables/useCart'

const router = useRouter()
const { addToCart } = useCart()

const products = ref([])
const loading = ref(true)
const error = ref(null)
const addedProducts = ref(new Set())

// Group products by category to create sections
const productData = computed(() => {
  const categoryMap = {
    'machine_roller': 'Roller Machines',
    'machine_sorter': 'Optical Sorters',
    'machine_dryer': 'Dryer Systems',
    'machine_die_casting': 'Die Casting Machines'
  }
  
  const grouped = {}
  products.value.forEach(product => {
    if (!grouped[product.category]) {
      grouped[product.category] = {
        id: product.category,
        name: categoryMap[product.category] || product.category,
        products: []
      }
    }
    grouped[product.category].products.push(product)
  })
  
  return {
    sections: Object.values(grouped)
  }
})

const loadProducts = async () => {
  try {
    loading.value = true
    const response = await fetch('/products.json')
    if (!response.ok) {
      throw new Error('Failed to load products')
    }
    products.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const formatPrice = (price) => {
  return price.toLocaleString('en-US')
}

const viewProductDetails = (productId) => {
  router.push(`/products/${productId}`)
}

const handleAddToCart = (product) => {
  addToCart(product)
  addedProducts.value.add(product.id)
  
  // Remove the "added" state after 2 seconds
  setTimeout(() => {
    addedProducts.value.delete(product.id)
  }, 2000)
}

onMounted(() => {
  loadProducts()
})
</script>

<style scoped>
.product-list {
  min-height: 100vh;
  background: #f5f7fa;
}

.hero-section {
  background: linear-gradient(135deg, #E30613 0%, #a00410 100%);
  color: white;
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-section p {
  font-size: 1.2rem;
  opacity: 0.95;
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

.sections-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.product-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #E30613;
  display: inline-block;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.product-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(227, 6, 19, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
}

.product-card:hover .image-overlay {
  opacity: 1;
}

.product-info {
  padding: 1.5rem;
}

.product-name {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.2s ease;
}

.product-name:hover {
  color: #E30613;
}

.product-type {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.product-price {
  font-size: 1.5rem;
  color: #E30613;
  font-weight: 700;
}

.add-to-cart-btn {
  background: #E30613;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.add-to-cart-btn:hover {
  background: #c00510;
  transform: scale(1.05);
}

.add-to-cart-btn.added {
  background: #28a745;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 1.8rem;
  }

  .hero-section p {
    font-size: 1rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .sections-container {
    padding: 1rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>
