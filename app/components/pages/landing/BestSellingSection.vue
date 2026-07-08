<script lang="ts">
import { Icon } from "@iconify/vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default {
  components: {
    Icon,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Badge,
    Button,
  },
  data() {
    return {
      products: [
        {
          rank: "#1 Best Seller",
          name: "Nuit Dorée",
          notes: "Oud · Amber · Sandalwood",
          price: "$195",
          rating: "4.9",
          images: [
            "https://images.unsplash.com/photo-1615634260167-c8cdede054de",
            "https://images.unsplash.com/photo-1541643600914-78b084683601",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
          ],
        },
        {
          rank: "#2 Best Seller",
          name: "Rose Ardente",
          notes: "Rose · Peach · Musk",
          price: "$165",
          rating: "4.8",
          images: [
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
            "https://images.unsplash.com/photo-1585399000684-d2f72660f092",
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
          ],
        },
        {
          rank: "#3 Best Seller",
          name: "Bois Sacré",
          notes: "Cedar · Vetiver · Smoke",
          price: "$210",
          rating: "4.7",
          images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
            "https://images.unsplash.com/photo-1615634260167-c8cdede054de",
          ],
        },
        {
          rank: "Best Seller",
          name: "Lumière Blanche",
          notes: "Iris · Jasmine · Vanilla",
          price: "$175",
          rating: "4.6",
          images: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
          ],
        },
        {
          rank: "Best Seller",
          name: "Lumière Blanche",
          notes: "Iris · Jasmine · Vanilla",
          price: "$175",
          rating: "4.6",
          images: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
          ],
        },
        {
          rank: "Best Seller",
          name: "Lumière Blanche",
          notes: "Iris · Jasmine · Vanilla",
          price: "$175",
          rating: "4.6",
          images: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
          ],
        },
        {
          rank: "Best Seller",
          name: "Lumière Blanche",
          notes: "Iris · Jasmine · Vanilla",
          price: "$175",
          rating: "4.6",
          images: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
          ],
        },
        {
          rank: "Best Seller",
          name: "Lumière Blanche",
          notes: "Iris · Jasmine · Vanilla",
          price: "$175",
          rating: "4.6",
          images: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f",
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div
      class="mx-auto max-w-container bg-muted-foreground/5 px-4 sm:px-6 lg:px-5 pt-16 sm:pt-20 pb-12 lg:pb-20"
    >
      <!-- Header -->
      <div class="flex justify-center text-center">
        <div>
          <p
            class="text-xs text-[#B8935F] font-semibold tracking-widest uppercase"
          >
            TOP RATED
          </p>
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-wide mt-2"
          >
            Best Sellers
          </h1>
          <p
            class="text-sm sm:text-md mt-3 sm:mt-4 text-muted-foreground leading-relaxed max-w-md"
          >
            The scents our customers can't stop reordering
          </p>
        </div>
      </div>

      <!-- Content -->
      <Carousel class="relative mt-10 lg:mt-14 w-full px-10 sm:px-12">
        <CarouselContent class="-ml-4 sm:-ml-6">
          <CarouselItem
            v-for="product in products"
            :key="product.name"
            class="pl-4 sm:pl-6 sm:basis-1/3 lg:basis-1/4"
          >
            <Card
              class="relative rounded-3xl border-none shadow-sm p-3 sm:p-4 h-full"
            >
              <CardHeader class="p-0">
                <div
                  class="relative rounded-2xl overflow-hidden aspect-square"
                >
                  <img
                    :src="product.images[0]"
                    class="absolute inset-0 w-full h-full object-cover"
                  />
                  <!-- Dark overlay for readability -->
                  <div class="absolute inset-0 bg-black/75" />
 
                  <div class="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                    <Badge> {{ product.rank }} </Badge>
                  </div>
                </div>
              </CardHeader>
 
              <CardContent class="px-1">
                <CardTitle>{{ product.name }}</CardTitle>
                <CardDescription class="text-sm text-muted-foreground mt-1">
                  {{ product.notes }}
                </CardDescription>
 
                <div class="flex items-center justify-between mt-3">
                  <span class="text-white font-medium">{{
                    product.price
                  }}</span>
                  <span class="flex items-center gap-1 text-sm text-white">
                    <Icon
                      icon="lucide:star"
                      class="w-3.5 h-3.5 text-[#B8935F]"
                    />
                    {{ product.rating }}
                  </span>
                </div>
              </CardContent>
 
              <CardFooter class="px-4">
                <Button size="lg" class="w-full"> Add to Cart </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
 
        <CarouselPrevious
          class="left-0 h-9 w-9 border border-white/15 bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 hover:text-white"
        />
        <CarouselNext
          class="right-0 h-9 w-9 border border-white/15 bg-black/60 text-white backdrop-blur-sm hover:bg-black/80 hover:text-white"
        />
      </Carousel>
    </div>
  </div>
</template>
