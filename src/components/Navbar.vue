<template>
  <nav class="flex top-0 sticky text-center bg-white shadow dark:bg-gray-800">
    <div class="container w-full px-6 mx-auto">
      <div
        class="py-3 -mx-3 overflow-x-scroll lg:overflow-x-auto whitespace-nowrap"
      >
        <router-link
          class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
          to="/"
          >Home</router-link
        >
        <router-link
          class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
          to="/posts"
          >Posts</router-link
        >
        <router-link
          class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
          to="/comments"
          >Comments</router-link
        >
        <router-link
          class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
          to="/albums"
          >Albums</router-link
        >

        <router-link
          class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
          to="/todos"
          >Todos</router-link
        >
        <router-link
          class="mx-4 text-sm leading-5 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
          to="/users"
          >Users</router-link
        >
      </div>
    </div>
  </nav>
</template>

<style>
.scroll-hidden::-webkit-scrollbar {
  height: 0px;
  background: transparent;
  /* make scrollbar transparent */
}
</style>
