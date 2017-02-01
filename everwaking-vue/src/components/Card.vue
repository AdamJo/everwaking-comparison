<template>
  <div v-on:mousemove="moveShadow" class="card">
    <div class="card-info">
      <contact></contact>
      <current-project></current-project>
    </div>
  </div>
</template>

<script>
import Contact from './Contact';
import CurrentProject from './CurrentProject';

const docStyle = document.documentElement.style;

export default {
  name: 'card',
  components: {
    Contact,
    CurrentProject,
  },
  methods: {
    moveShadow: function (element) {
      let x = element.clientX;
      let y = element.clientY;

      let height = window.innerHeight;
      let width = window.innerWidth;

      let calcX = (19 + (width / x)) / (width / x);
      let calcY = (19 + (height / y)) / (height / y);

      if (calcX > 10.5) {
        calcX = ((calcX) * -1 + 10);
      } else {
        calcX = (calcX - 10) * -1;
      }

      if (calcY > 10.5) {
        calcY = ((calcY) * -1 + 10);
      } else {
        calcY = (calcY - 10) * -1;
      }

      if (isNaN(calcX) || isNaN(calcY)) {
        calcX = 0;
        calcY = 0;
      }

      docStyle.setProperty('--x', calcX+'px');
      docStyle.setProperty('--y', calcY+'px');
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .card {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;

  }

  .card-info {
    box-shadow: var(--x) var(--y) 5px rgba(100, 100, 100, .4);

    margin: auto;
    min-height: 250px;
    min-width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
