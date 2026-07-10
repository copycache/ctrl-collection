<script lang="ts">
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cart } from "@/components/pages/landing/store"

export default {
  components: {
    Icon,
    Button,
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    Input,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
  },
  data() {
    return {
      mobileMenuOpen: false,
      mobileSearchOpen: false,
    };
  },
  computed: {
    cartItems() {
      return cart.items;
    },
    cartCount() {
      return cart.count.value;
    },
  },
  methods: {
    setMobileMenuOpen(open: any) {
      this.mobileMenuOpen = open;
      if (open) this.mobileSearchOpen = false;
    },
    setMobileSearchOpen(open: any) {
      this.mobileSearchOpen = open;
      if (open) this.mobileMenuOpen = false;
    },
    removeFromCart(id:any) {
      cart.removeFromCart(id);
    },
  },
};
</script>

<template>
  <div class="fixed top-0 left-0 w-full z-50">
    <!-- Announcement bar -->
    <div
      class="text-[10px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.18em] uppercase bg-(--background)"
    >
      <div
        class="mx-auto max-w-[1440px] px-4 sm:px-6 h-8 sm:h-9 flex items-center justify-center gap-2 text-center"
      >
        <Icon
          icon="lucide:sparkles"
          class="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B8935F] shrink-0"
        />
        <span class="truncate sm:whitespace-normal"
          >Complimentary shipping over ₱3,500 · Discover your signature
          scent</span
        >
      </div>
    </div>

    <!-- Main nav -->
    <div class="mx-auto max-w-full px-4 sm:px-6 bg-(--background)">
      <div class="h-16 sm:h-20 flex items-center justify-between gap-2">
        <div class="flex items-center gap-6 min-w-0">
          <Button
            variant="ghost"
            size="icon"
            class="lg:hidden shrink-0"
            @click="setMobileMenuOpen(!mobileMenuOpen)"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation menu"
          >
            <Icon
              :icon="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
              class="w-5 h-5"
            />
          </Button>

          <a
            href="/"
            class="shrink-0 font-['Cormorant_Garamond',_serif] text-xl sm:text-2xl tracking-[0.1em] sm:tracking-[0.14em] select-none truncate"
          >
            CTRL Collection
          </a>

          <NavigationMenu class="hidden lg:block">
            <NavigationMenuList class="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-[13px] tracking-[0.08em] uppercase rounded-md transition-colors"
                >
                  Women
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-[13px] tracking-[0.08em] uppercase rounded-md transition-colors"
                >
                  Men
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-[13px] tracking-[0.08em] uppercase rounded-md transition-colors"
                >
                  Unisex
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-[13px] tracking-[0.08em] uppercase rounded-md transition-colors"
                >
                  Collections
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div class="flex items-center gap-1 sm:gap-3 shrink-0">
          <form class="hidden md:block mx-w-xl mx-auto">
            <div class="relative">
              <Icon
                icon="lucide:search"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              />

              <Input
                type="search"
                placeholder="Search fragrances..."
                class="h-10 w-48 lg:w-64 rounded-full border-0 bg-[#F5F1EB] pl-10 pr-4 text-sm shadow-none focus-visible:ring-1"
              />
            </div>
          </form>

          <Button
            variant="ghost"
            size="icon"
            class="md:hidden h-10 w-10"
            @click="setMobileSearchOpen(!mobileSearchOpen)"
            :aria-expanded="mobileSearchOpen"
            aria-label="Toggle search"
          >
            <Icon icon="lucide:search" class="w-5 h-5" />
          </Button>

          <Button variant="default" class="hidden sm:inline-flex rounded-full">
            Shop Now
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button
                variant="ghost"
                size="icon"
                class="relative h-10 w-10"
                aria-label="Open cart"
              >
                <Icon icon="lucide:shopping-cart" class="w-5 h-5" />

                <Badge
                  variant="secondary"
                  v-if="cartCount"
                  class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px]"
                >
                  {{ cartItems.length }}
                </Badge>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              :side-offset="12"
              class="w-80 sm:w-96 p-0 rounded-2xl overflow-hidden bg-(--background)"
            >
              <div class="px-4 py-3 border-b border-black/5 flex justify-between items-center">
                <p class="text-sm tracking-[0.08em]">
                  Your Cart
                  <span class="text-gray-500 normal-case tracking-normal">
                    ({{ cartItems.length }})
                  </span>
                </p>
                <Button v-if="cartItems.length != 0" variant="link" class="text-xs normal-case tracking-normal text-[#B8935F]">
                  View Cart
                  <!-- <Icon icon="lucide:arrow-right" class="w-4 h-4" /> -->
                </Button>
              </div>

              <div v-if="cartItems.length" class="max-h-72 overflow-y-auto">
                <div
                  v-for="item in cartItems"
                  :key="item.id"
                  class="flex items-center gap-3 px-4 py-3 border-b border-black/5 last:border-b-0"
                >
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="w-14 h-14 rounded-lg object-cover shrink-0 bg-[#F5F1EB]"
                  />

                  <div class="min-w-0 flex-1">
                    <p class="text-sm truncate">{{ item.name }}</p>
                    <p class="text-xs text-gray-500">{{ item.size }}</p>
                    <p class="text-xs text-gray-500">Qty: {{ item.qty }}</p>
                  </div>

                  <div class="flex flex-col items-end gap-1 shrink-0">
                    <span class="text-sm">₱{{ item.price }}</span>
                    <Button
                      size="icon"
                      variant="link"
                      class="text-red-400 hover:text-red-700 transition-colors"
                      @click.stop="removeFromCart(item.id)"
                    >
                      <Icon icon="lucide:trash" class="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>

              <div v-else class="px-4 py-8 text-center">
                <Icon
                  icon="lucide:shopping-cart"
                  class="w-8 h-8 mx-auto text-gray-300 mb-2"
                />
                <p class="text-sm text-gray-500">Your cart is empty</p>
              </div>

              <div v-if="cartItems.length" class="px-4 py-3 border-t border-black/5 space-y-3">
                <Button variant="default" class="w-full rounded-full">
                  Checkout
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" class="hidden sm:inline-flex">
            <Icon icon="lucide:user" class="w-5 h-5" />
          </Button>
        </div>
      </div>

      <!-- Mobile search flyout -->
      <Collapsible :open="mobileSearchOpen" as="div" class="md:hidden">
        <CollapsibleContent class="pb-4">
          <form>
            <div class="relative">
              <Icon
                icon="lucide:search"
                class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              />

              <Input
                type="search"
                placeholder="Search fragrances..."
                autofocus
                class="h-10 w-full rounded-full border-0 bg-[#F5F1EB] pl-10 pr-4 text-sm shadow-none focus-visible:ring-1"
              />
            </div>
          </form>
        </CollapsibleContent>
      </Collapsible>

      <!-- Mobile nav menu -->
      <Collapsible :open="mobileMenuOpen" as="div" class="lg:hidden">
        <CollapsibleContent
          class="pb-4 flex flex-col gap-1 border-t border-black/5 pt-3"
        >
          <a
            href="#"
            class="px-2 py-2.5 text-[13px] tracking-[0.08em] uppercase rounded-md transition-colors"
          >
            Women
          </a>
          <a
            href="#"
            class="px-2 py-2.5 text-[13px] tracking-[0.08em] uppercase rounded-md transition-colors"
          >
            Men
          </a>
          <a
            href="#"
            class="px-2 py-2.5 text-[13px] tracking-[0.08em] uppercase rounded-md transition-colors"
          >
            Unisex
          </a>
          <a
            href="#"
            class="px-2 py-2.5 text-[13px] tracking-[0.08em] uppercase rounded-md transition-colors"
          >
            Collections
          </a>

          <div
            class="flex items-center gap-3 pt-2 mt-1 border-t border-black/5"
          >
            <Button variant="default" class="rounded-full flex-1 sm:hidden">
              Shop Now
            </Button>
            <Button variant="ghost" size="icon" class="sm:hidden">
              <Icon icon="lucide:user" class="w-5 h-5" />
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
</template>