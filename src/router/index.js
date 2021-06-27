import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home/Home.vue";
import Product from "@/views/product/Product.vue";
import Cart from "@/views/cart/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});