<template>
  <div>
    <h1>This is an auth page</h1>
    <h2>ID: {{ this.user.user?.id }}</h2>
    <h2>Name: {{ this.user.user?.name }}</h2>
  </div>
</template>

<script>
import { useTokenStore } from "../stores/token";
import { useUserStore } from "../stores/user";

export default {
  setup() {
    const token = useTokenStore();
    const user = useUserStore();

    const getMe = async () => {
      const res = await fetch("http://127.0.0.1:8000/auth/me", {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          authorization: "Bearer " + token.accessToken,
        },
        method: "GET",
      });

      const { data } = await res.json();

      user.setUser(data.user);
    };

    getMe();

    return { token, user };
  },
};
</script>
