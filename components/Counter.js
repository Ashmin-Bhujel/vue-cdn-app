import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    function decrement() {
      count.value--;
    }

    function reset() {
      count.value = 0;
    }

    function increment() {
      count.value++;
    }

    return {
      count,
      decrement,
      reset,
      increment,
    };
  },

  template: /* HTML */ `
    <section>
      <p>Current Count: {{ count }}</p>

      <!-- Buttons -->
      <div>
        <button @click="decrement">-</button>
        <button @click="reset">Reset Counter</button>
        <button @click="increment">+</button>
      </div>
    </section>
  `,
};
