# Bühler Online Store# Bühler Online Store# Bühler Online Store# Vue 3 + Vite



An online store application for Bühler industrial products built with Vue.js 3.



## FeaturesA modern single-page web application that allows Bühler customers to explore industrial products and place orders online. Built with Vue.js 3 and Vite.



### Header

- Bühler logo (click to go home)

- Live date and time display![Vue.js](https://img.shields.io/badge/Vue.js-3.5.22-4FC08D?style=flat&logo=vue.js&logoColor=white)A modern single-page web application built with Vue.js that allows Bühler customers to explore industrial products and place orders online.This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

- Shopping cart with item count

![Vite](https://img.shields.io/badge/Vite-7.2.0-646CFF?style=flat&logo=vite&logoColor=white)

### Product List

Products are organized by category:![License](https://img.shields.io/badge/License-MIT-green.svg)

- Roller Machines

- Optical Sorters

- Dryer Systems

- Die Casting Machines---## 🎯 FeaturesLearn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).



Each product card shows the product image, name, category, price, and an "Add to Cart" button.



### Product Details## 🎯 Features

Click any product to view detailed information including:

- Product image### Header

- Name and category

- Price### ✨ Core Functionality- **Bühler Logo**: Clickable logo that navigates to the product list page

- Product description

- Features list- **Live Date & Time**: Real-time display of current date and time

- Add to Cart option

#### Header Component- **Shopping Cart**: Shows cart item count with navigation to checkout

### Checkout

View your shopping cart with:- **Bühler Logo** - Clickable logo that navigates to the product list page

- List of items with images and prices

- Quantity adjustment controls- **Live Date & Time** - Real-time clock display that updates every second### Product List

- Remove items option

- Order summary with subtotal, tax, and total- **Shopping Cart** - Shows cart item count with badge, navigates to checkout- Section-wise product categorization (Milling, Sorting, Packaging, etc.)

- Place order functionality

- Product cards displaying:

## Setup

#### Product List Page  - Product image

### Prerequisites

- Node.js (v18 or higher)- **Section-wise Organization** - Products grouped by category:  - Product name and type

- npm

  - Roller Machines (5 products)  - Price

### Installation

  - Optical Sorters (4 products)  - Add to Cart button

```bash

# Clone the repository  - Dryer Systems (4 products)- Responsive grid layout

git clone https://github.com/jaicks007/buhler-online-store.git

cd buhler-online-store  - Die Casting Machines (1 product)- Click on product card to view details



# Install dependencies- **Product Cards** displaying:

npm install

```  - Product image (real Bühler products)### Product Details



### Running the Application  - Product name- Dynamic routing (`/products/{productId}`)



```bash  - Category type- Comprehensive product information:

# Start development server

npm run dev  - Price  - Large product image

```

  - Add to Cart button with visual feedback  - Name, type, and ID

The app will run at `http://localhost:5173`

- **Responsive Grid Layout** - Adapts to all screen sizes  - Detailed description

### Build for Production

- **Interactive Cards** - Click to view product details  - Price

```bash

# Create production build  - Key features list

npm run build

#### Product Details Page- Add to Cart functionality

# Preview production build

npm run preview- **Dynamic Routing** - Each product has unique URL (`/products/{productId}`)- Back navigation to product list

```

- **Comprehensive Information**:- Quick checkout option

## Project Structure

  - Large product image

```

buhler-online-store/  - Product name and category### Checkout

├── public/

│   └── products.json       # Product data  - Product ID- Shopping cart summary with all added items

├── src/

│   ├── components/  - Detailed description- Each cart item displays:

│   │   └── Header.vue      # Header component

│   ├── composables/  - Price display  - Product image

│   │   ├── useCart.js      # Cart state management

│   │   └── useDateTime.js  # Date/time functionality  - Key features list  - Name and type

│   ├── router/

│   │   └── index.js        # Route definitions- **Actions**:  - Quantity controls (increase/decrease)

│   ├── views/

│   │   ├── ProductList.vue    # Product listing page  - Add to Cart button  - Individual price

│   │   ├── ProductDetails.vue # Product detail page

│   │   └── Checkout.vue       # Cart and checkout page  - Back to Products button  - Subtotal

│   ├── App.vue

│   ├── main.js  - Quick Checkout option  - Remove from cart option

│   └── style.css

└── vite.config.js- Order summary:

```

#### Checkout Page  - Total items count

## Technologies Used

- **Shopping Cart Management**:  - Subtotal

- **Vue.js 3** - JavaScript framework

- **Vue Router** - Routing  - List of all cart items with images, names, and prices  - Tax calculation (8%)

- **Vite** - Build tool

- **Composition API** - Vue 3 feature for better code organization  - Quantity controls (increase/decrease)  - Grand total



## Product Data  - Remove item functionality- Continue shopping option



The application displays 14 Bühler industrial products across 4 categories. Product data is stored in `/public/products.json`.  - Individual and subtotal prices- Place order functionality



## Assignment Requirements- **Order Summary**:



This project meets all the requirements:  - Total items count## 🚀 Getting Started



✅ Header with logo, date/time, and cart  - Subtotal calculation

✅ Product list with section-wise organization  

✅ Product details with unique URLs    - Tax calculation (8%)### Prerequisites

✅ Checkout with cart management and totals

  - Grand total

## Author

- **Actions**:- **Node.js**: Version 18.x or higher recommended (current: 20.15.0)

Created for Bühler assignment submission

  - Continue Shopping button- **npm**: Version 9.x or higher

  - Place Order button (clears cart after order)

- **Empty Cart State** - Friendly message when cart is empty### Installation



---1. **Clone the repository**

   ```bash

## 🚀 Getting Started   git clone <your-repository-url>

   cd buhler-online-store

### Prerequisites   ```



Before you begin, ensure you have the following installed:2. **Install dependencies**

- **Node.js** - Version 18.x or higher recommended   ```bash

  - Current project tested with: Node.js 20.15.0   npm install

  - Check version: `node --version`   ```

- **npm** - Version 9.x or higher

  - Check version: `npm --version`### Development



### InstallationRun the development server with hot-reload:



1. **Clone the repository**```bash

   ```bashnpm run dev

   git clone https://github.com/YOUR_USERNAME/buhler-online-store.git```

   cd buhler-online-store

   ```The application will be available at `http://localhost:5173`



2. **Install dependencies**### Build for Production

   ```bash

   npm installCreate an optimized production build:

   ```

   This will install all required packages including:```bash

   - Vue.js 3npm run build

   - Vue Router 4```

   - Vite

The built files will be in the `dist/` directory.

### Development

### Preview Production Build

Run the development server with hot-reload:

Preview the production build locally:

```bash

npm run dev```bash

```npm run preview

```

The application will be available at:

- **Local**: `http://localhost:5173` (or next available port)## 📁 Project Structure

- **Network**: Use `--host` flag to expose to network

```

Open your browser and navigate to the URL shown in the terminal.buhler-online-store/

├── public/

### Build for Production│   ├── products.json          # Product data source

│   └── vite.svg

Create an optimized production build:├── src/

│   ├── assets/                # Static assets

```bash│   ├── components/

npm run build│   │   └── Header.vue         # Header component with logo, time, cart

```│   ├── composables/

│   │   ├── useCart.js         # Shopping cart state management

The built files will be generated in the `dist/` directory and are ready for deployment.│   │   └── useDateTime.js     # Real-time date/time functionality

│   ├── router/

### Preview Production Build│   │   └── index.js           # Vue Router configuration

│   ├── views/

Preview the production build locally before deploying:│   │   ├── ProductList.vue    # Main product listing page

│   │   ├── ProductDetails.vue # Individual product detail page

```bash│   │   └── Checkout.vue       # Shopping cart & checkout page

npm run preview│   ├── App.vue                # Root component

```│   ├── main.js                # Application entry point

│   └── style.css              # Global styles

---├── index.html

├── package.json

## 📁 Project Structure├── vite.config.js

└── README.md

``````

buhler-online-store/

├── public/                      # Static assets## 🛠️ Technology Stack

│   ├── products.json           # Product data (14 products)

│   └── vite.svg- **Vue.js 3**: Progressive JavaScript framework

├── src/- **Vue Router 4**: Official router for Vue.js

│   ├── assets/                 # Images and static files- **Vite**: Next-generation frontend tooling

│   │   └── vue.svg- **Composition API**: Modern Vue.js API for better code organization

│   ├── components/             # Reusable Vue components- **CSS3**: Custom styling with CSS variables

│   │   └── Header.vue         # Header with logo, time, cart

│   ├── composables/            # Shared logic and state## 🎨 Design Highlights

│   │   ├── useCart.js         # Shopping cart management

│   │   └── useDateTime.js     # Real-time date/time- **Bühler Brand Colors**: Red (#E30613) as primary color

│   ├── router/                 # Vue Router configuration- **Responsive Design**: Mobile-first approach, works on all screen sizes

│   │   └── index.js           # Route definitions- **Modern UI**: Clean, professional interface with smooth transitions

│   ├── views/                  # Page components- **Accessibility**: Semantic HTML and proper ARIA labels

│   │   ├── ProductList.vue    # Main product listing- **Performance**: Optimized images and lazy loading

│   │   ├── ProductDetails.vue # Product detail page

│   │   └── Checkout.vue       # Shopping cart & checkout## 📦 Key Dependencies

│   ├── App.vue                 # Root component

│   ├── main.js                 # Application entry point```json

│   └── style.css               # Global styles{

├── .gitignore                  # Git ignore rules  "vue": "^3.5.22",

├── index.html                  # HTML entry point  "vue-router": "^4.x",

├── package.json                # Project dependencies  "vite": "^7.1.7",

├── vite.config.js              # Vite configuration  "@vitejs/plugin-vue": "^6.0.1"

└── README.md                   # This file}

``````



---## 🌟 Enhancements Implemented



## 🛠️ Technology Stack1. **State Management**: Composables pattern for shared state (cart management)

2. **Real-time Updates**: Live date/time display in header

| Technology | Version | Purpose |3. **User Feedback**: Visual feedback for adding items to cart

|------------|---------|---------|4. **Quantity Management**: Increase/decrease quantities in checkout

| **Vue.js** | 3.5.22 | Progressive JavaScript framework |5. **Price Formatting**: Proper currency formatting throughout

| **Vue Router** | 4.x | Official router for Vue.js |6. **Tax Calculation**: Automatic tax computation at checkout

| **Vite** | 7.2.0 | Next-generation frontend tooling |7. **Responsive Images**: Using Unsplash for placeholder product images

| **JavaScript** | ES6+ | Programming language |8. **Error Handling**: Graceful error states for data loading

| **CSS3** | Latest | Styling with custom properties |9. **Loading States**: Spinner animations during data fetch

10. **Professional Styling**: Consistent design system with hover effects

### Why These Technologies?

## 🚦 Application Flow

- **Vue.js 3** - Modern, reactive, and performant framework with Composition API

- **Vue Router** - Seamless page navigation in SPA1. **Home (Product List)** → Browse products by category

- **Vite** - Fast development server and optimized builds2. **Product Details** → Click any product to view details

- **Composition API** - Better code organization and reusability3. **Add to Cart** → Add products from list or details page

- **CSS Variables** - Consistent theming and easy maintenance4. **Checkout** → Review cart, adjust quantities, view total

5. **Place Order** → Complete the purchase

---

## 📱 Browser Support

## 🎨 Design & Styling

- Chrome (latest)

### Brand Identity- Firefox (latest)

- **Primary Color**: #E30613 (Bühler Red)- Safari (latest)

- **Typography**: System fonts for optimal performance- Edge (latest)

- **Images**: Real Bühler products from dam.buhlergroup.com

## 🤝 Development Best Practices

### Responsive Design

- **Mobile-First Approach** - Optimized for all devices- **Component-based Architecture**: Modular, reusable components

- **Breakpoints**:- **Composition API**: Better code organization and reusability

  - Mobile: < 640px- **Clean Code**: Meaningful variable names and proper comments

  - Tablet: 640px - 968px- **Consistent Formatting**: Uniform code style throughout

  - Desktop: > 968px- **Vue 3 Best Practices**: Following official Vue.js guidelines

- **Flexible Layouts** - CSS Grid and Flexbox- **Performance Optimization**: Efficient rendering and state updates



### UI/UX Features## 📝 Notes

- Smooth transitions and animations

- Hover effects for interactive elements- Product data is stored in `public/products.json` for easy updates

- Visual feedback for user actions- Images are sourced from Unsplash for demonstration purposes

- Loading states with spinners- Cart state persists during the session (resets on page refresh)

- Error handling with friendly messages- The application is a frontend demo; no backend integration included

- Empty states for better UX

## 🐛 Troubleshooting

---

### Port already in use

## 📊 Product DataIf port 5173 is occupied, Vite will automatically use the next available port.



### Data Structure### Dependencies issues

Products are stored in `public/products.json` with the following structure:```bash

rm -rf node_modules package-lock.json

```jsonnpm install

[```

  {

    "id": "21",### Build errors

    "name": "Roller MDDK",Ensure you're using Node.js version 18.x or higher.

    "category": "machine_roller",

    "price": 9,## 📄 License

    "imageUrl": "https://dam.buhlergroup.com/..."

  }This project is created as an assignment submission.

]

```## 👨‍💻 Author



### Product CategoriesCreated as part of the Bühler Online Store assignment.

1. **Roller Machines** (`machine_roller`)

   - Roller MDDK, MDDL, MDDP, MDDQ, MDDM---

   

2. **Optical Sorters** (`machine_sorter`)**Thank you for reviewing this project!** 🎉

   - SORTEX F, A MultiVision, B, S UltraVision
   
3. **Dryer Systems** (`machine_dryer`)
   - AeroDry, EcoDry, BCT, BCE
   
4. **Die Casting** (`machine_die_casting`)
   - Die Casting Machine Ecoline

**Total Products**: 14 industrial machines

---

## 🔧 Configuration

### Vite Configuration
The project uses Vite's default Vue plugin configuration. See `vite.config.js` for details.

### Environment Variables
Currently, the app doesn't use environment variables, but you can add them:

1. Create `.env` file in root directory
2. Add variables with `VITE_` prefix
3. Access via `import.meta.env.VITE_YOUR_VARIABLE`

---

## 🚦 Application Flow

```
1. User lands on Home Page (Product List)
   ↓
2. Browse products organized by categories
   ↓
3. Click product card → View Product Details
   ↓
4. Add product to cart (from list or details page)
   ↓
5. Cart badge updates automatically
   ↓
6. Click cart icon → Navigate to Checkout
   ↓
7. Review items, adjust quantities, see total
   ↓
8. Place Order → Cart clears, redirect to home
```

---

## 🎯 Key Features Implementation

### State Management
- **Composables Pattern** - Shared state without Vuex/Pinia
- **Reactive Updates** - Automatic UI updates when state changes
- **Cart Persistence** - During session (resets on refresh)

### Real-time Features
- **Live Clock** - Updates every second using `setInterval`
- **Cart Count** - Computed property updates automatically
- **Visual Feedback** - Instant UI responses to user actions

### Performance
- **Computed Properties** - Cached calculations
- **Proper Cleanup** - `onUnmounted` hooks prevent memory leaks
- **Optimized Rendering** - Vue's reactivity system
- **Code Splitting** - Ready for lazy loading routes

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Homepage loads with all product sections
- [ ] All product images load correctly
- [ ] Product cards are clickable and navigate to details
- [ ] Add to Cart updates badge immediately
- [ ] Cart shows correct item count
- [ ] Product details page displays correct information
- [ ] Back button returns to product list
- [ ] Checkout shows all cart items correctly
- [ ] Quantity controls work (increase/decrease)
- [ ] Remove item updates cart
- [ ] Total calculations are accurate
- [ ] Place Order clears cart and redirects
- [ ] Empty cart state displays correctly
- [ ] Responsive design works on mobile
- [ ] Date/time updates every second

### Automated Testing (Future)
Consider adding:
- **Unit Tests** - Vitest for composables and utilities
- **Component Tests** - Vue Test Utils
- **E2E Tests** - Cypress or Playwright

---

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Vite will automatically try the next available port
# Or specify a different port:
npm run dev -- --port 3000
```

#### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Check Node.js version
node --version

# Should be 18.x or higher
# Update if needed
```

#### Images Not Loading
- Check network connection
- Verify image URLs in `products.json`
- Check browser console for CORS errors

---

## 📈 Future Enhancements

### Planned Features
- [ ] Search and filter functionality
- [ ] Product sorting (price, name, category)
- [ ] Wishlist/favorites
- [ ] User authentication
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Multi-currency support
- [ ] Internationalization (i18n)

### Technical Improvements
- [ ] TypeScript migration
- [ ] Unit and E2E tests
- [ ] Backend API integration
- [ ] Cart persistence (localStorage)
- [ ] Progressive Web App (PWA)
- [ ] Server-Side Rendering (Nuxt.js)
- [ ] Analytics integration
- [ ] SEO optimization

---

## 🤝 Contributing

This is an assignment project, but suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Assignment Requirements

This project fulfills all assignment requirements:

✅ **Header Component**
- Bühler logo (clickable, navigates home)
- Current date and time (live updates)
- Cart details with count (navigates to checkout)

✅ **Product List**
- Section-wise product organization
- Product cards with image, name, price, Add to Cart
- Data from products.json

✅ **Product Details**
- Unique URL with product identifier
- Complete product information
- Back navigation to product list

✅ **Checkout**
- Cart items with image, name, type, price
- Ability to remove products
- Total price calculation

---

## 📄 License

This project is created as part of an assignment submission.

---

## 👨‍💻 Author

**Assignment Submission for Bühler**
- Project: Online Store Implementation
- Technologies: Vue.js 3, Vue Router, Vite
- Date: November 2025

---

## 🙏 Acknowledgments

- **Bühler Group** - For product images and inspiration
- **Vue.js Team** - For the amazing framework
- **Vite Team** - For the lightning-fast build tool

---

## 📞 Support

For questions or issues:
1. Check the [Troubleshooting](#-troubleshooting) section
2. Review the code comments
3. Check Vue.js and Vite documentation

---

**⭐ If you find this project useful, please star the repository!**

---

## 📸 Screenshots

### Home Page - Product List
Products organized by category with real Bühler industrial equipment images.

### Product Details
Detailed view with product information, pricing, and Add to Cart functionality.

### Shopping Cart & Checkout
Complete cart management with quantity controls and order summary.

---

**Built with ❤️ using Vue.js 3 and Vite**
