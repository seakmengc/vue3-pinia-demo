<template>
  <div>
    <h1>This is an counter page {{ this.counter.counter }}</h1>
    <v-btn @click="this.counter.increment">Increment</v-btn>
  </div>
</template>

<script>
import { useCounterStore } from "../stores/counter"

export default {
  setup() {
    const counter = useCounterStore();

    return { counter };
  }
}
</script>