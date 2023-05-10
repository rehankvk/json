<template>
  <div
    v-for="content in items"
    class="mt-3 w-11/12 mx-auto px-6 py-3 rounded-lg shadow-md dark:bg-gray-800"
  >
    <div class="w-full">
      <p class="normal-case text-gray-700 dark:text-white">
        Name : {{ content.name }}
      </p>

      <p class="normal-case mt-2 text-gray-600 dark:text-gray-300">
        Email : {{ content.email }}
      </p>
      <p class="normal-case mt-2 text-gray-600 dark:text-gray-300">
        Comments : {{ content.body }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
      });
  },
};
</script>
