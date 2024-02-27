<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col">Home</div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "Home",
  components: { NavBar },
  setup(props, { emit }) {
    const data = ref("");

    return {
      data,
    };
  },
});
</script>

<style></style>
