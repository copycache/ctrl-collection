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
  },
  data() {
    return {
      cartCount: 3,
      wishlistCount: 5,
    };
  },
  methods: {},
};
</script>

<template>
  <div class="text-[11px] tracking-[0.18em] uppercase bg-(--background)">
    <div
      class="mx-auto max-w-[1440px] px-6 h-9 flex items-center justify-center gap-2"
    >
      <Icon icon="lucide:sparkles" class="w-3.5 h-3.5 text-[#B8935F]" />
      <span
        >Complimentary shipping over ₱3,500 · Discover your signature
        scent</span
      >
    </div>
  </div>

  <div class="mx-auto max-w-full px-6 bg-(--background)">
    <div class="h-20 flex items-center justify-between">
      <div class="flex items-center gap-6">
        <a
          href="/"
          class="shrink-0 font-['Cormorant_Garamond',_serif] text-2xl tracking-[0.14em] select-none"
        >
          CTRL Collection
        </a>

        <NavigationMenu>
          <NavigationMenuList class="gap-1">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                class="inline-flex items-center px-4 py-2 text-[13px] tracking-[0.08em] uppercase rounded-md hover:bg-[#F1E9DD] transition-colors"
              >
                Women
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                class="inline-flex items-center px-4 py-2 text-[13px] tracking-[0.08em] uppercase rounded-md hover:bg-[#F1E9DD] transition-colors"
              >
                Men
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                class="inline-flex items-center px-4 py-2 text-[13px] tracking-[0.08em] uppercase rounded-md hover:bg-[#F1E9DD] transition-colors"
              >
                Unisex
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                class="inline-flex items-center px-4 py-2 text-[13px] tracking-[0.08em] uppercase rounded-md hover:bg-[#F1E9DD] transition-colors"
              >
                Collections
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div class="flex items-center gap-3 shrink-0">
        <form class="mx-w-xl mx-auto">
          <div class="relative">
            <Icon
              icon="lucide:search"
              class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
            />

            <Input
              type="search"
              placeholder="Search fragrances..."
              class="h-10 w-full rounded-full border-0 bg-[#F5F1EB] pl-10 pr-4 text-sm shadow-none focus-visible:ring-1"
            />
          </div>
        </form>

        <Button variant="default" class="rounded-full"> Shop Now </Button>

        <Button variant="ghost" size="icon" class="relative h-10 w-10">
          <Icon icon="lucide:shopping-bag" class="w-5 h-5" />

          <span
            v-if="cartCount"
            class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[9px] text-white"
          >
            {{ cartCount }}
          </span>
        </Button>

        <Button variant="ghost" size="icon">
          <Icon icon="lucide:user" class="w-5 h-5" />
        </Button>
      </div>
    </div>
  </div>
</template>
