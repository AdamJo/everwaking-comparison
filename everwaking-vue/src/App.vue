<template>
  <div class="flex-container" id="app">
    <card></card>
  </div>
</template>

<script>
import Card from './components/Card';

export default {
  name: 'app',
  components: {
    Card,
  },
};
</script>

<style>
  html {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 20px;
  }

  body {
    background: hsl(0, 0%, 95%);
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    height: 95vh;
    margin: 0;
    
    text-align: center;
  }

  .content {
    font-size: .9rem;
  }

  .dark {
    background: hsl(0, 0%, 50%);
  }

  .on-dark {
    color: hsl(0, 0%, 90%);
  }

  .on-dark-link {
    color: hsl(51, 100%, 40%);

  }

  .on-dark-link:active {
    color: hsl(51, 80%, 40%);
  }

  .light {
    background: hsl(0, 0%, 100%);
  }

  .on-light {
    color: hsl(0, 0%, 20%);
  }

  .on-light-link {
    color: hsl(0, 0%, 40%);
  }

  .on-light-link:visited {
    color: hsl(0, 0%, 45%);
  }

  .on-light-link:active {
    color: hsl(0, 0%, 30%);
  }
</style>
