<script lang="ts">
import HeroSection from "@/components/pages/landing/HeroSection.vue";
import BestSellingSection from "@/components/pages/landing/BestSellingSection.vue";
import SignatureCollectionSection from "@/components/pages/landing/SignatureCollectionSection.vue";

export default {
  components: {
    HeroSection,
    BestSellingSection,
    SignatureCollectionSection,
  },
  data() {
    return {
      loading: false,
      error: null as string | null,
    };
  },
  mounted() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      this.loading = true;
      this.error = null;

      try {
        const [] = await Promise.all([]);
      } catch (err: any) {
        this.error = err.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<template>
  <div>
    <HeroSection />
    <SignatureCollectionSection />
    <BestSellingSection />
  </div>
</template>
