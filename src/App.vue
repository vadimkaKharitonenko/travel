<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  body, ul, h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    background-color: #E5E5E5;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  * {
    box-sizing: border-box;
  }

  button {
    border: none;
    padding: 0;
  }

  :root {
    --white: #FFFFFF;
    --gray: #EEEEEE;
    --dark-blue: #403E55;
    --red: #FC5954;
  }

  .container {
    width: 1170px;
    margin: 0 auto;
  }
</style>
