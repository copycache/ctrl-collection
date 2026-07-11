<script lang="ts">
import { Icon } from "@iconify/vue";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default {
  components: {
    Icon,
    Badge,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  },
};
</script>

<template>
  <div>
    <div
      class="mx-auto max-w-container px-4 sm:px-6 lg:px-5 pt-16 sm:pt-20 pb-12 lg:pb-20"
    >
      <!-- Header -->
      <div class="flex justify-center text-center">
        <div>
          <p
            class="text-xs text-[#B8935F] font-semibold tracking-widest uppercase"
          >
            Our Promises
          </p>
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-wide mt-2"
          >
            Why Choose Us
          </h1>
        </div>
      </div>

      <!-- Content -->
      <div class="mt-10 lg:mt-14 w-full px-10 sm:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card
          class="text-center py-8 px-6 flex flex-col items-center"
        >
          <div
            class="p-5 rounded-lg bg-foreground/5 flex items-center justify-center"
          >
            <Icon icon="lucide:leaf" class="w-6 h-6 text-white" />
          </div>
          <CardTitle class="text-white text-base font-serif tracking-wide">
            Ethically Sourced
          </CardTitle>
          <CardDescription class="text-sm text-muted-foreground leading-relaxed">
            Ingredients hand-picked from sustainable growers worldwide
          </CardDescription>
        </Card>

        <Card
          class="text-center py-8 px-6 flex flex-col items-center"
        >
          <div
            class="p-5 rounded-lg bg-foreground/5 flex items-center justify-center"
          >
            <Icon icon="lucide:shield-check" class="w-6 h-6 text-white" />
          </div>
          <CardTitle class="text-white text-base font-serif tracking-wide">
            Authenticity Guaranteed
          </CardTitle>
          <CardDescription class="text-sm text-muted-foreground leading-relaxed">
            Every bottle certified 100% genuine, never deluted
          </CardDescription>
        </Card>

        <Card
          class="text-center py-8 px-6 flex flex-col items-center"
        >
          <div
            class="p-5 rounded-lg bg-foreground/5 flex items-center justify-center"
          >
            <Icon icon="lucide:truck" class="w-6 h-6 text-white" />
          </div>
          <CardTitle class="text-white text-base font-serif tracking-wide">
            Free Express Shipping 
          </CardTitle>
          <CardDescription class="text-sm text-muted-foreground leading-relaxed">
            Complimentary delivery on all orders over ₱150
          </CardDescription>
        </Card>

        <Card
          class="text-center py-8 px-6 flex flex-col items-center"
        >
          <div
            class="p-5 rounded-lg bg-foreground/5 flex items-center justify-center"
          >
            <Icon icon="lucide:gem" class="w-6 h-6 text-white" />
          </div>
          <CardTitle class="text-white text-base font-serif tracking-wide">
            Handcrafted Luxury
          </CardTitle>
          <CardDescription class="text-sm text-muted-foreground leading-relaxed">
            Small-batch perfumery made with meticulous artisan care
          </CardDescription>
        </Card>
      </div>
    </div>
  </div>
</template>
