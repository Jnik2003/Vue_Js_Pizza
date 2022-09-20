<template>
  <div class="pizza">
    <img :src="pizza.img" :alt="pizza.name" />
    <h3>{{ pizza.name }}</h3>
    <p>{{ pizza.maindescription }}</p>
    <div class="pizza__footer">
      <h3>От {{ pizza.size.small.price }} Р</h3>
      <button class="btn-select" @click="selectPizza">Выбрать</button>
    </div>
  </div>
  <!-- <ModalUiComponent v-if="isModalVisible" :isModalVisible="isModalVisible"> -->
  <ModalUiComponent
    v-if="isModalVisible"
    v-model:isModalVisible="isModalVisible"
    @closeModal="closeModal"
  >
    <div class="pizza-modal">
      <div class="pizza-modal__main">
        <img :src="pizza.img" :alt="pizza.name" />
      </div>
      <div class="pizza-modal__additional">
        <h3>{{ pizza.name }}</h3>
        <p>{{ pizza.description }}</p>
        <div class="sizes">
          <div v-for="(size, ind) in pizza.size" :key="ind">
            <label> <input type="radio" name="size" v-model="pizzaSize" :value="size.name" :checked="size.checked"/>{{ size.name }}</label>
          </div>
        </div>
        <div class="pizza__footer">
          <div class="total-price">
            <h3>{{price}} Р</h3>
          </div>
          <button class="btn-select">В корзину</button>
        </div>
      </div>
    </div>
  </ModalUiComponent>
</template>

<script>
import ModalUiComponent from "./UI/ModalUiComponent.vue";
export default {
  name: "PizzaComponent",
  data() {
    return {
      // isModalVisible: false,
      isModalVisible: true,
      pizzaSize: 'Средняя',
      totalPrice: 0,
    };
  },
  props: {
    pizza: {
      type: Object,
    },
  },
  components: { ModalUiComponent },
  methods: {
    selectPizza() {
      this.isModalVisible = true;
      console.log("this.isModalVisible");
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  computed:{
    
    price(){
      if(this.pizzaSize == this.pizza.size.small.name){
        this.totalPrice = this.pizza.size.small.price
      }
      else if(this.pizzaSize == this.pizza.size.middle.name){
        this.totalPrice = this.pizza.size.middle.price
      }
      else{
        this.totalPrice = this.pizza.size.big.price
      }

      return this.totalPrice
    }
  }
};
</script>

<style lang="scss" scoped>
.pizza {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  width: 30%;
  border-radius: 1rem;
  img {
    max-width: 80%;
  }
}
.pizza__footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pizza-modal {
  display: flex;
  gap: 100px;
  justify-content: space-evenly;
  text-align: left;
  img {
    max-width: 100%;
  }
  .pizza-modal__main {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pizza-modal__additional {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-around;
  }
  .sizes{
    display: flex;
  }
}
</style>
