<template>
  <div class="pizza">
    <img :src="pizza.img" :alt="pizza.name" class="pizza-img"/>
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
        <img :src="pizza.img" :alt="pizza.name" class="pizza-img__modal"/>
      </div>
      <div class="pizza-modal__additional">
        <h3>{{ pizza.name }}</h3>
        <div class="pizza-modal__description">
          <p>{{getDiam}}</p>
        </div>
        <p>{{ pizza.description }}</p>
        <div class="sizes">
          <label class="sizes__label">
            <input class="sizes__input" type="radio" name="size" value="small" v-model="LabelSizePizza" @click="getSize('small')"/>{{ pizza.size.small.name }}
          </label>
          <label class="sizes__label active">
            <input class="sizes__input" type="radio" name="size" value="middle"  v-model="LabelSizePizza" @click="getSize('middle')" />{{ pizza.size.middle.name }}
          </label>
          <label class="sizes__label">
            <input class="sizes__input" type="radio" name="size" value="big"  v-model="LabelSizePizza" @click="getSize('big')"/>{{ pizza.size.big.name }}
          </label>
        </div>

        <div class="paste">
          <label class="paste__label active">
            <input type="radio" name="paste" />{{
              pizza.paste.traditional.name
            }}</label
          >
          <label class="paste__label">
            <input type="radio" name="paste" />{{
              pizza.paste.thin.name
            }}</label
          >
        </div>

        <div class="pizza__footer">
          <div class="total-price">
            <h3>{{getPrice}} Р</h3>
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
      order: [{}],
      isModalVisible: false,
      // isModalVisible: true,
      LabelSizePizza: 'middle',
      LabelName: '',
      PizzaDiameter: '',
      PizzaPrice: 0,
    };
  },
  props: {
    pizza: {
      type: Object,
    },
  },
  components: { ModalUiComponent },
  methods: {
    closeModal() {
      this.isModalVisible = false;
    },
    selectPizza() {
      this.isModalVisible = true;
      console.log("this.isModalVisible");
    },
    getSize(value){
      const inputs = document.querySelectorAll('.sizes__input')
      console.log(value)
      inputs.forEach(item => {
        item.parentNode.classList.remove('active')
      })
      document.querySelector(`[value=${value}]`).parentNode.classList.add('active')
     
      const image = document.querySelector('.pizza-img__modal')
      console.log(image)
      // if(value == 'small'){
      //   image.classList.add('small')
      // }
      value == 'small' ? image.classList.add('small') : image.classList.remove('small')
      value == 'middle' ? image.classList.add('middle') : image.classList.remove('middle')
      value == 'big' ? image.classList.add('big') : image.classList.remove('big')
      
      this.LabelSizePizza = value
      this.LabelName = this.pizza.size[this.LabelSizePizza].name
      
    }
    
  },
  computed: {
   getDiam(){
    return this.PizzaDiameter = this.pizza.size[this.LabelSizePizza].diameter
   },
   getPrice(){
    return this.PizzaPrice = this.pizza.size[this.LabelSizePizza].price
   },  
   
  },
  mounted(){  
    console.log('mount')
     this.PizzaPrice = this.pizza.size[this.LabelSizePizza].price
     this.PizzaDiameter = this.pizza.size[this.LabelSizePizza].diameter
     this.LabelName = this.pizza.size[this.LabelSizePizza].name
   
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
    img {
      width: 80%;
    }
  }
  .pizza-modal__additional {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-around;
  }
  .sizes,
  .paste {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    background-color: #9b9a9a;
    border-radius: 9999px;
    border: 1px solid #ccc;
  }

  .small {
    width: 60% !important;
  }
  .middle {
    width: 80% !important;
  }
  .big {
    width: 100% !important;
  }
  .disabled {
    color: #ccc;
    background-color: #faf8f8 !important;
  }
  input[type="radio"] {
    display: none;
  }
  label:has(input[value="Средняя"]) {
    background-color: white;
  }
  .sizes__label,
  .paste__label {
    padding: 5px 10px;
    border-radius: 9999px;
    // background-color: #ccc;
    display: block;
    width: 150px;
    display: flex;
    justify-content: center;
    transition: 0.5s;
  }
  .paste__label {
    width: 250px;
  }
  .active {
    background-color: white;
  }
}
</style>
