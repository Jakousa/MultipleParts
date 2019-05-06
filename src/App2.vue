<template>
  <div id='root'>
    <button v-on:click="link('/')">away</button>
    <button v-on:click="link('/app1')">one</button>
    <button v-on:click="link('/app2')">two</button>
    <br />
    <span> Vue app </span>
  </div>
</template>

<script>

export default {
  methods: {
    link: (path) => {
      window.history.pushState('','',path)
    }
  }
}
</script>