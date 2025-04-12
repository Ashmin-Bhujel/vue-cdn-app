import { ref } from "vue";
import Counter from "./components/Counter.js";
import UserForm from "./components/Form.js";

export default {
  setup() {
    const message = ref("Hello, World!");

    function greet() {
      alert("Hi, Are you ready to learn Vue.js?");
    }

    return {
      message,
      greet,
    };
  },

  components: {
    Counter,
    UserForm,
  },

  template: /* HTML */ `
    <main>
      <h1>{{ message }}</h1>

      <!-- Greet -->
      <div>
        <button @click="greet">Click Me</button>
      </div>

      <!-- Counter component -->
      <Counter class="counter" />

      <!-- Form component -->
      <UserForm class="user-form" />
    </main>
  `,
};
