<template>
  <div
    v-for="content in items"
    class="mt-3 w-11/12 mx-auto px-6 py-3 rounded-lg shadow-md dark:bg-gray-800"
  >
    <div class="w-full">
      <p class="normal-case text-gray-700 dark:text-white">
        Title : {{ content.title }}
      </p>

      <div
        class="flex flex-row items-center normal-case mt-2 text-gray-600 dark:text-gray-300"
      >
        Status :
        <p
          :class="{ done: content.completed, undone: !content.completed }"
          class="bg-red-500 bg-green-400 rounded px-2 py-1 mx-2 text-black"
        >
          {{ content.completed }}
        </p>
      </div>
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
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
      });
  },
};
</script>
<style>
.done {
  background-color: #22c55e;
}

.undone {
  background-color: #dc2626;
  color: white;
}
</style>
