<template>
  <div class="App">
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

html, body, #__nuxt, #__layout, .App {
  width: 100%;
  height: 100%;
  margin: 0;
}

button, input[type="button"] {
  padding: 10px;
  background-color: transparent;
  min-width: 80px;
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

input:focus {
  outline: none;
}

.slide-down-enter-active {
  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.slide-down-enter {
  transform: translateY(-80%);
  opacity: 0;
}

</style>
