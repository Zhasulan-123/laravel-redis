<template>
    <NavBar />
    <div class="container-fluid">
        <div class="row">
            <div class="col mt-5" v-for="user in getAllUsers" :key="user.id">
                <div class="card" style="width: 18rem">
                    <div class="card-body">
                        <h5 class="card-title">{{ user.name }}</h5>
                        <p class="card-text">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>{{ user.id }}</td>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.remember_token }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, defineComponent, computed } from "vue";
import { useStore } from 'vuex';
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  name: "Home",
  components: { NavBar },
  setup() {
      const store = useStore()
	  const getAllUsers = computed(() => store.getters.getUsers);
      store.dispatch("fetchUsers");
    return {
      getAllUsers
    };
  },
});
</script>

<style lang="scss" scoped></style>
