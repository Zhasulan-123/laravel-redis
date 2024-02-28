<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"></a>
      <router-link class="navbar-brand" to="/">TESTING</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a @click="sendAdd" class="btn btn-secondary" href="#">
              Push-уведомления <Push />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useStore } from "vuex";
import Push from "@/icons/Push.vue";

export default defineComponent({
  name: "NavBar",
  components: { Push },
  setup() {
    const store = useStore();

    async function sendAdd() {
      await store.dispatch("addSend");
      alert("отправлять push-уведомления");
    }

    return {
      sendAdd,
    };
  },
});
</script>

<style lang="scss" scoped></style>
