import user from '@/api/user';

export default {
    state: () => ({
        users: [],
        send: [],
    }),
    getters: {
        getUsers: (state) => state.users,
    },
    mutations: {
        setUsers: (state, users) => (state.users = users),
        setSend: (state, send) => (state.send = send)
    },
    actions: {
        async fetchUsers({ commit }) {
            const { data } = await user.get();
            await new Promise((resolve, reject) => {
              setTimeout(() => {
                  commit('setUsers', data)
                  resolve()
                }, 1000);
            });
        },
        async addSend({ commit }) {
            const { data } = await user.create();
            commit('setSend', data)
        },
    }
}
