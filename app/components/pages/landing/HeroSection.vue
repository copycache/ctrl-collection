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
  data() {
    return {
      bestsellers: [] as Array<{
        name: string;
        notes: string;
        price: number;
        rating: number;
      }>,
    };
  },
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
  mounted() {
    this.fetchBestsellers();
  },
  methods: {
    async fetchBestsellers() {
      try {
        // Simulate an API call to fetch bestsellers
        const bestsellers = [
          {
            name: "Nuit Dorée",
            notes: "Oud · Amber · Sandalwood",
            price: 195,
            rating: 4.9,
          },
          {
            name: "Rose Ardente",
            notes: "Rose · Peach · Musk",
            price: 165,
            rating: 4.8,
          },
          {
            name: "Bois Sacré",
            notes: "Cedar · Vetiver · Smoke",
            price: 210,
            rating: 4.7,
          },
          {
            name: "Lumière Blanche",
            notes: "Iris · Jasmine · Vanilla",
            price: 175,
            rating: 4.6,
          },
        ];
        this.bestsellers = bestsellers;
      } catch (error) {
        console.error("Error fetching bestsellers:", error);
      }
    },
  },
};
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-container h-screen px-5 pt-30 pb-20">
      <div class="grid h-full grid-cols-4 gap-4">
        <div class="col-span-3">
          <div
            class="relative h-full col-span-8 overflow-hidden rounded-3xl p-12 bg-cover bg-center"
          >
            <img
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"
              alt=""
              class="absolute inset-0 w-full h-full object-cover"
            />
            <!-- Dark overlay for readability -->
            <div class="absolute inset-0 bg-black/75" />

            <div class="absolute top-6 left-6 z-10">
              <Badge
                class="text-[11px] tracking-widest uppercase px-3 py-1 rounded-full"
              >
                Featured Scent
              </Badge>
            </div>

            <Badge
              variant="secondary"
              class="absolute top-6 right-6 text-xs flex items-center gap-2 z-10 bg-black/40 text-white border-0 px-3 py-1.5 rounded-full"
            >
              <Icon icon="lucide:star" class="w-3.5 h-3.5 text-[#B8935F]" />
              <span class="font-semibold">4.9</span>
              <span class="text-muted-foreground">(2.4k)</span>
            </Badge>

            <div class="absolute bottom-8 left-12 max-w-xl z-10">
              <p class="text-xs text-[#B8935F] font-semibold tracking-widest">
                EAU DE PARFUM · 100ML
              </p>
              <h1 class="text-6xl font-serif text-white tracking-wide mt-2">
                Nuit Dorée
              </h1>

              <p
                class="text-md mt-4 text-muted-foreground leading-relaxed max-w-md"
              >
                A deep, intoxicating fusion of amber, oud &amp; sandalwood. Rich
                warmth that wraps around you like velvet.
              </p>

              <div class="flex items-center gap-5 mt-8">
                <Button
                  size="lg"
                >
                  Add to Cart
                </Button>

                <Button variant="link" class="text-muted-foreground">
                  View Details
                  <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div
              class="absolute bottom-8 right-10 text-4xl font-serif font-light text-white tracking-wide z-10"
            >
              $195
            </div>
          </div>
        </div>

        <!-- Right side -->
        <div>
          <Card class="relative h-full rounded-3xl">
            <CardHeader>
              <CardTitle
                class="text-xs font-semibold uppercase tracking-wider text-[#B8935F]"
              >
                THIS SEASON
              </CardTitle>
              <CardDescription
                class="shrink-0 font-['Cormorant_Garamond',_serif] text-lg tracking-wide text-white"
              >
                Bestsellers
              </CardDescription>

              <CardContent class="flex flex-col gap-5 mt-4 px-0">
                <template v-for="(item, index) in bestsellers" :key="item.name">
                  <div class="flex items-center gap-4">
                    <Skeleton class="w-16 h-16 rounded-lg shrink-0" />

                    <div class="flex-1 min-w-0">
                      <p class="text-sm font-semibold truncate">
                        {{ item.name }}
                      </p>
                      <span class="text-xs text-muted-foreground">
                        {{ item.notes }}
                      </span>
                    </div>

                    <div class="flex flex-col items-end gap-1 shrink-0">
                      <span class="text-sm font-semibold">
                        ${{ item.price }}
                      </span>
                      <span
                        class="flex items-center gap-1 text-xs text-muted-foreground"
                      >
                        <Icon
                          icon="lucide:star"
                          class="w-3.5 h-3.5 text-[#B8935F]"
                        />
                        {{ item.rating }}
                      </span>
                    </div>
                  </div>

                  <div
                    v-if="index < bestsellers.length - 1"
                    class="border-t border-white/10"
                  />
                </template>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
