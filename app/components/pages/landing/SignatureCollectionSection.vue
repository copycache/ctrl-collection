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
import { Skeleton } from "@/components/ui/skeleton";

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
    Skeleton,
  },
};
</script>

<template>
  <div>
    <div
      class="mx-auto max-w-container px-4 sm:px-6 lg:px-5 pt-16 sm:pt-20 lg:pt-30 pb-12 lg:pb-20"
    >
      <div
        class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6"
      >
        <div>
          <p
            class="text-xs text-[#B8935F] font-semibold tracking-widest uppercase"
          >
            THE COLLECTION
          </p>
          <h1
            class="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-wide mt-2"
          >
            Signature Collections
          </h1>
          <p class="text-sm sm:text-md mt-3 sm:mt-4 text-muted-foreground leading-relaxed max-w-md">
            Four seasons. Four moods. Each of the world its own.
          </p>
        </div>
        <Button variant="link" class="text-[#B8935F] self-start sm:self-auto -ml-4 sm:ml-0">
          View all collections
          <Icon icon="lucide:arrow-right" class="w-4 h-4" />
        </Button>
      </div>
 
      <!-- Content -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 gap-3 sm:gap-4 lg:gap-2 lg:h-[calc(100vh-15rem)]"
      >
        <div class="sm:col-span-2 lg:col-span-1 lg:row-span-4">
          <div
            class="relative h-[280px] sm:h-[360px] lg:h-full overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12 bg-cover bg-center"
          >
            <img
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"
              alt=""
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/75" />
 
            <div class="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <p class="text-[10px] sm:text-[11px] text-[#B8935F] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                FLORAL - FRESH
              </p>
            </div>
 
            <div class="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-9 sm:right-9 z-10">
              <p class="text-xs text-[#B8935F] font-semibold tracking-wider">
                12 scents
              </p>
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-wide mt-2">
                Spring Bloom
              </h1>
              <p class="text-sm sm:text-md mt-3 sm:mt-4 text-muted-foreground leading-relaxed max-w-md line-clamp-2 sm:line-clamp-1">
                Delicate florals awakening in morning dew
              </p>
              <div class="flex items-center gap-5 mt-4 sm:mt-5">
                <Button variant="link" class="text-muted-foreground text-[#B8935F] px-0">
                  Explore
                  <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
 
        <div class="lg:col-start-2 lg:col-span-2 lg:row-span-2">
          <div
            class="relative h-[220px] sm:h-[260px] lg:h-full overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12 bg-cover bg-center"
          >
            <img
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"
              alt=""
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/75" />
 
            <div class="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <p class="text-[10px] sm:text-[11px] text-[#B8935F] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                FLORAL - FRESH
              </p>
            </div>
 
            <div class="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-9 sm:right-9 z-10">
              <p class="text-xs text-[#B8935F] font-semibold tracking-wider">
                12 scents
              </p>
              <h1 class="text-xl sm:text-2xl lg:text-4xl font-serif text-white tracking-wide mt-2">
                Spring Bloom
              </h1>
              <p class="text-sm sm:text-md mt-3 sm:mt-4 text-muted-foreground leading-relaxed max-w-md line-clamp-1">
                Delicate florals awakening in morning dew
              </p>
              <div class="flex items-center gap-5 mt-4 sm:mt-5">
                <Button variant="link" class="text-muted-foreground text-[#B8935F] px-0">
                  Explore
                  <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
 
        <div class="lg:col-start-4 lg:row-span-2">
          <div
            class="relative h-[220px] sm:h-[260px] lg:h-full overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12 bg-cover bg-center"
          >
            <img
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"
              alt=""
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/75" />
 
            <div class="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <p class="text-[10px] sm:text-[11px] text-[#B8935F] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                FLORAL - FRESH
              </p>
            </div>
 
            <div class="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-9 sm:right-9 z-10">
              <p class="text-xs text-[#B8935F] font-semibold tracking-wider">
                12 scents
              </p>
              <h1 class="text-xl sm:text-2xl lg:text-4xl font-serif text-white tracking-wide mt-2">
                Spring Bloom
              </h1>
              <p class="text-sm sm:text-md mt-3 sm:mt-4 text-muted-foreground leading-relaxed max-w-md line-clamp-1">
                Delicate florals awakening in morning dew
              </p>
              <div class="flex items-center gap-5 mt-4 sm:mt-5">
                <Button variant="link" class="text-muted-foreground text-[#B8935F] px-0">
                  Explore
                  <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
 
        <div class="lg:col-start-2 lg:col-span-2 lg:row-start-3 lg:row-span-2">
          <div
            class="relative h-[220px] sm:h-[260px] lg:h-full overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12 bg-cover bg-center"
          >
            <img
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"
              alt=""
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-black/75" />
 
            <div class="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <p class="text-[10px] sm:text-[11px] text-[#B8935F] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                FLORAL - FRESH
              </p>
            </div>
 
            <div class="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-9 sm:right-9 z-10">
              <p class="text-xs text-[#B8935F] font-semibold tracking-wider">
                12 scents
              </p>
              <h1 class="text-xl sm:text-2xl lg:text-4xl font-serif text-white tracking-wide mt-2">
                Spring Bloom
              </h1>
              <p class="text-sm sm:text-md mt-3 sm:mt-4 text-muted-foreground leading-relaxed max-w-md line-clamp-1">
                Delicate florals awakening in morning dew
              </p>
              <div class="flex items-center gap-5 mt-4 sm:mt-5">
                <Button variant="link" class="text-muted-foreground text-[#B8935F] px-0">
                  Explore
                  <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
 
        <div class="lg:col-start-4 lg:row-start-3 lg:row-span-2">
          <div
            class="relative h-[220px] sm:h-[200px] lg:h-full overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-12 bg-cover bg-center"
          >
            <div class="absolute inset-0 w-full h-full object-cover bg-[#B8935F]" />
            <div class="absolute inset-0 bg-black/75" />
 
            <div class="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <p class="text-xs text-[#B8935F] font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                EXCLUSIVE
              </p>
            </div>
 
            <div class="absolute top-14 left-6 right-6 sm:top-15 sm:left-9 sm:right-9 max-w-xl z-10">
              <h1 class="text-xl sm:text-2xl font-serif text-white tracking-wide mt-2">
                Build Your Collection
              </h1>
              <p class="text-sm sm:text-md text-muted-foreground leading-relaxed max-w-sm">
                Mix and match scents across all seasons into a bespoke set.
              </p>
            </div>
 
            <div class="absolute bottom-6 left-6 sm:bottom-8 sm:left-9 z-10">
              <Button variant="default"> Create Set </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
