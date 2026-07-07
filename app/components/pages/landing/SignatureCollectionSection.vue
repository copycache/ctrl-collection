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
  <div class="min-h-screen">
    <div class="mx-auto max-w-container h-screen px-5 pt-30 pb-20">
      <div class="flex items-end justify-between mb-6">
        <div>
          <p
            class="text-xs text-[#B8935F] font-semibold tracking-widest uppercase"
          >
            THE COLLECTION
          </p>
          <h1 class="text-5xl font-serif text-white tracking-wide mt-2">
            Signature Collections
          </h1>
          <p
            class="text-md mt-4 text-muted-foreground leading-relaxed max-w-md"
          >
            Four seasons. Four moods. Each of the world its own.
          </p>
        </div>
        <Button variant="link" class="text-[#B8935F]">
          View all collections
          <Icon icon="lucide:arrow-right" class="w-4 h-4" />
        </Button>
      </div>

      <!-- Content grid -->
      <div class="grid h-full grid-cols-4 grid-rows-5 gap-2">
        <div class="row-span-4">
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
              <p
                class="text-[11px] text-[#B8935F] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              >
                FLORAL - FRESH
              </p>
            </div>

            <div class="absolute bottom-8 left-9 max-w-xl z-10">
              <p class="text-xs text-[#B8935F] font-semibold tracking-wider">
                12 scents
              </p>
              <h1 class="text-4xl font-serif text-white tracking-wide mt-2">
                Spring Bloom
              </h1>

              <p
                class="text-md mt-4 text-muted-foreground leading-relaxed max-w-md line-clamp-1"
              >
                Delicate florals awakening in morning dew
              </p>

              <div class="flex items-center gap-5 mt-5">
                <Button
                  variant="link"
                  class="text-muted-foreground text-[#B8935F]"
                >
                  Explore
                  <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-start-2 row-span-2 col-span-2">
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
              <p
                class="text-[11px] text-[#B8935F] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              >
                FLORAL - FRESH
              </p>
            </div>

            <div class="absolute bottom-8 left-9 max-w-xl z-10">
              <p class="text-xs text-[#B8935F] font-semibold tracking-wider">
                12 scents
              </p>
              <h1 class="text-4xl font-serif text-white tracking-wide mt-2">
                Spring Bloom
              </h1>

              <p
                class="text-md mt-4 text-muted-foreground leading-relaxed max-w-md line-clamp-1"
              >
                Delicate florals awakening in morning dew
              </p>

              <div class="flex items-center gap-5 mt-5">
                <Button
                  variant="link"
                  class="text-muted-foreground text-[#B8935F]"
                >
                  Explore
                  <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-start-4 row-span-2">
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
              <p
                class="text-[11px] text-[#B8935F] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              >
                FLORAL - FRESH
              </p>
            </div>

            <div class="absolute bottom-8 left-9 max-w-xl z-10">
              <p class="text-xs text-[#B8935F] font-semibold tracking-wider">
                12 scents
              </p>
              <h1 class="text-4xl font-serif text-white tracking-wide mt-2">
                Spring Bloom
              </h1>

              <p
                class="text-md mt-4 text-muted-foreground leading-relaxed max-w-md line-clamp-1"
              >
                Delicate florals awakening in morning dew
              </p>

              <div class="flex items-center gap-5 mt-5">
                <Button
                  variant="link"
                  class="text-muted-foreground text-[#B8935F]"
                >
                  Explore
                  <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-start-2 col-span-2 row-start-3 row-span-2">
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
              <p
                class="text-[11px] text-[#B8935F] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
              >
                FLORAL - FRESH
              </p>
            </div>

            <div class="absolute bottom-8 left-9 max-w-xl z-10">
              <p class="text-xs text-[#B8935F] font-semibold tracking-wider">
                12 scents
              </p>
              <h1 class="text-4xl font-serif text-white tracking-wide mt-2">
                Spring Bloom
              </h1>

              <p
                class="text-md mt-4 text-muted-foreground leading-relaxed max-w-md line-clamp-1"
              >
                Delicate florals awakening in morning dew
              </p>

              <div class="flex items-center gap-5 mt-5">
                <Button
                  variant="link"
                  class="text-muted-foreground text-[#B8935F]"
                >
                  Explore
                  <Icon icon="lucide:arrow-right" class="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-start-4 row-start- row-span-2">
          <div
            class="relative h-full col-span-8 overflow-hidden rounded-3xl p-12 bg-cover bg-center"
          >
            <div class="absolute inset-0 w-full h-full object-cover bg-[#B8935F]" />
            <!-- Dark overlay for readability -->
            <div class="absolute inset-0 bg-black/75" />

            <div class="absolute top-6 left-6 z-10">
              <p
                class="text-xs text-[#B8935F] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              >
                EXCLUSIVE
              </p>
            </div>

            <div class="absolute top-15 left-9 max-w-xl z-10">
              <h1 class="text-2xl font-serif text-white tracking-wide mt-2">
                Build Your Collection
              </h1>

              <p
                class="text-md text-muted-foreground leading-relaxed max-w-sm"
              >
                Mix and match scents across all seasons into a bedspoke set.
              </p>
            </div>

            <div class="absolute bottom-8 left-9 max-w-xl z-10">
                <Button
                  variant="default"
                >
                  Create Set
                </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
