import { ref, computed } from 'vue'

// Cart state - shared across the application
const cartItems = ref([])

export function useCart() {
  // Add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1
      })
    }
  }

  // Remove item from cart
  const removeFromCart = (productId) => {
    const index = cartItems.value.findIndex(item => item.id === productId)
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }

  // Get cart item count
  const cartCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  // Get cart total price
  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
  })

  // Clear cart
  const clearCart = () => {
    cartItems.value = []
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    cartCount,
    cartTotal,
    clearCart
  }
}
