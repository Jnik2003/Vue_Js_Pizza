<template>
  <div class="container">
    <h1>Пицца</h1>
    <div class="pizzas">
      <pizza-component
        v-for="(pizza, ind) in pizzas"
        :key="ind"
        :pizza="pizza"
      />
    </div>
  </div>
</template>

<script>
import datapizza from "@/data/Datapizza";
import PizzaComponent from "../components/PizzaComponent.vue";

export default {
  data() {
    return {
      pizzas: datapizza,
      
    };
  },
  computed: {},
  methods: {},
  components: { PizzaComponent },
};
</script>

<style lang="scss" scoped>
.pizzas {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  // padding-bottom: 20%;
}
</style>
