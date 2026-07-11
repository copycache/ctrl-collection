<script lang="ts"></script>

<template>
  <section class="relative overflow-hidden">
    <img
        src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"
        alt=""
        class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/75" />

    <div
      class="relative mx-auto max-w-container px-4 sm:px-6 lg:px-24 py-16 sm:py-20 lg:py-28"
    >
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center">
        <!-- Left -->
        <div class="lg:col-span-3">
          <p
            class="text-xs text-[#B8935F] font-semibold tracking-[0.2em] uppercase"
          >
            Our Heritage
          </p>

          <h1
            class="font-serif text-white text-3xl sm:text-4xl lg:text-4xl leading-tight mt-3"
          >
            The Art of Distilled
            <br class="hidden sm:block" />
            Emotion
          </h1>

          <p
            class="text-sm sm:text-base mt-5 text-white/60 leading-relaxed max-w-md"
          >
            Born in the heart of Grasse, the world's perfume capital, Lumière
            is a testament to the patient art of extraction. Our master
            perfumers spend years perfecting a single accord, treating each
            botanical essence like a rare gemstone.
          </p>

          <p
            class="font-serif italic text-white/70 text-sm sm:text-base mt-6 max-w-md"
          >
            "We do not just create scents; we preserve memories in glass."
          </p>

          <div class="flex items-end gap-10 sm:gap-14 mt-10">
            <div>
              <p class="font-serif text-white text-2xl sm:text-3xl">2026</p>
              <p
                class="text-[10px] sm:text-[11px] text-white/40 tracking-widest uppercase mt-1"
              >
                Established
              </p>
            </div>
            <div>
              <p class="font-serif text-white text-2xl sm:text-3xl">100%</p>
              <p
                class="text-[10px] sm:text-[11px] text-white/40 tracking-widest uppercase mt-1"
              >
                Natural Oils
              </p>
            </div>
            <div>
              <p class="font-serif text-white text-2xl sm:text-3xl">Grasse</p>
              <p
                class="text-[10px] sm:text-[11px] text-white/40 tracking-widest uppercase mt-1"
              >
                Provenance
              </p>
            </div>
          </div>
        </div>

        <!-- Right -->
        <div class="lg:col-span-2 flex justify-center lg:justify-end">
          <div
            class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden"
          >
            <img
                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de"
                alt=""
                class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>