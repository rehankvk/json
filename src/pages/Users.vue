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
        Username : {{ content.username }}
      </p>
      <p class="normal-case mt-2 text-gray-600 dark:text-gray-300">
        Email : {{ content.email }}
      </p>
      <p class="normal-case mt-2 text-gray-600 dark:text-gray-300">
        Phone : {{ content.phone }}
      </p>
      <p class="normal-case mt-2 text-gray-600 dark:text-gray-300">
        Website : {{ content.website }}
      </p>
      <div class="normal-case mt-2 text-gray-600 dark:text-gray-300">
        Address :
        <li class="text-sm">Street : {{ content.address.street }}</li>
        <li class="text-sm">Suite : {{ content.address.suite }}</li>
        <li class="text-sm">City : {{ content.address.city }}</li>
        <li class="text-sm">Zip Code : {{ content.address.zipcode }}</li>
      </div>
      <div class="normal-case mt-2 text-gray-600 dark:text-gray-300">
        Company :
        <li class="text-sm">Name : {{ content.company.name }}</li>
        <li class="text-sm">CatchPharse : {{ content.company.catchPhrase }}</li>
        <li class="text-sm">BS : {{ content.company.bs }}</li>
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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
      });
  },
};
</script>
