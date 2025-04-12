import { ref } from "vue";

export default {
  setup() {
    const username = ref("");
    const invalidMessage = ref("");

    function handleSubmit() {
      if (username.value.trim()) {
        alert(`Hi, ${username.value.trim()} 👋`);
        username.value = "";
      } else {
        invalidMessage.value = "Please enter a valid username!";
      }
    }

    return {
      username,
      invalidMessage,
      handleSubmit,
    };
  },

  template: /* HTML */ `
    <form @submit.prevent="handleSubmit">
      <div class="input-wrapper">
        <input
          type="text"
          name="username"
          placeholder="Enter your Name"
          v-model="username"
          @input="invalidMessage = ''"
          :aria-invalid="!!invalidMessage || false"
        />

        <!-- Show message for invalid username -->
        <small v-if="invalidMessage">{{ invalidMessage }}</small>
      </div>

      <button type="submit">Submit Username</button>
    </form>
  `,
};
