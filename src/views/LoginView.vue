<template>
  <div>
    <h1>This is an Login page</h1>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="state.email"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="state.password"
              label="Password"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-btn type="submit" @click="this.loginCallback">Login</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useCounterStore } from "../stores/counter";
import { useTokenStore } from "../stores/token";

export default {
  setup() {
    const counter = useCounterStore();
    const token = useTokenStore();

    const state = reactive({
      valid: false,
      email: "855963777711",
      password: "password",
    });

    const loginCallback = async () => {
      console.log(state);
      const res = await fetch("http://127.0.0.1:8000/auth/login", {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: state.email,
          password: state.password,
        }),
      });

      const { data } = await res.json();
      token.setTokens(data);
    };

    return { counter, state, loginCallback };
  },
};
</script>
