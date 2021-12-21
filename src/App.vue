<template>
  <div>
    <nav
      class="navbar navbar-dark bg-dark justify-content-between flex-nowrap flex-row"
      style="position: fixed;  width:100%; top: 0;"
    >
      <div class="container">
        <a class="navbar-brand float-left">SKI STORE</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link" to="/">STUFF</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style scoped></style>
