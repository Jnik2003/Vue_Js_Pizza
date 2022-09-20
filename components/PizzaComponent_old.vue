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
        <img :src="pizza.img" :alt="pizza.name" :class="statusSize" />
      </div>
      <div class="pizza-modal__additional">
        <h3>{{ pizza.name }}</h3>
        <div class="pizza-modal__description">
          <p>{{ pizzaDiameter }}, {{ pasteSelect }}</p>
        </div>
        <p>{{ pizza.description }}</p>
        <div class="sizes">
          <div v-for="(size, ind) in pizza.size" :key="ind">
            <label class="sizes__label"
            
            @click.self="setActive"
            >
              <input
                type="radio"
                name="size"
                v-model="pizzaSize"
                :value="size.name"
                :checked="size.checked"
              />{{ size.name }}</label
            >
          </div>
        </div>

        <div class="paste">
          <label class="paste__label">
            <input
              type="radio"
              name="paste"
              v-model="pasteSelect"
              :value="pizza.paste.traditional.name"
            />{{ pizza.paste.traditional.name }}</label
          >
          <label  class="paste__label" :class="{ disabled: statusSize == 'small' }">
            <input
              type="radio"
              name="paste"
              v-model="pasteSelect"
              :value="pizza.paste.thin.name"
              :disabled="statusSize == 'small' ? true : false"
            />{{ pizza.paste.thin.name }}</label
          >
        </div>

        <div class="pizza__footer">
          <div class="total-price">
            <h3>{{ price[0] }} Р</h3>
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
      pasteSelect: this.pizza.paste.traditional.name,
      // statusPaste: thin,
      isModalVisible: false,
      // isModalVisible: true,
      pizzaSize: "Средняя",
      statusSize: "middle",
      totalPrice: 0,
      pizzaDiameter: "0 см,",
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
    changeActivePaste() {
      console.log(this.pasteSelect);
      this.pasteSelect = this.pizza.paste.traditional.name;
    },
    setActive(e){
      console.log(e.target)
      const sizesLabels = document.querySelectorAll('.sizes__label')
      console.log(sizesLabels)
      sizesLabels.forEach(item => {
        item.classList.remove('active')
      })
      e.target.classList.add('active')
    }
  },
  computed: {
    price() {
      if (this.pizzaSize == this.pizza.size.small.name) {
        this.totalPrice = this.pizza.size.small.price;
        this.pizzaDiameter = this.pizza.size.small.diameter;
        this.statusSize = "small";
        this.changeActivePaste();
      } else if (this.pizzaSize == this.pizza.size.middle.name) {
        this.totalPrice = this.pizza.size.middle.price;
        this.pizzaDiameter = this.pizza.size.middle.diameter;
        this.statusSize = "middle";
      } else {
        this.totalPrice = this.pizza.size.big.price;
        this.pizzaDiameter = this.pizza.size.big.diameter;
        this.statusSize = "big";
      }
      // передать в массив order
      this.order.name = this.pizza.name;
      this.order.size = this.pizzaSize;
      this.order.diameter = this.pizzaDiameter;
      this.order.paste = this.pasteSelect;

      this.order.price = this.totalPrice;
      // console.log(this.order);
      return [this.totalPrice, this.pizzaDiameter];
    },
    paste() {},
  },
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
    gap:10px;
    background-color: #9B9A9A;
    border-radius: 9999px;
    border: 1px solid #ccc;
  }

  .small {
    width: 60% !important;
  }
  .big {
    width: 100% !important;
  }
  .disabled {
    color: #ccc;
    background-color: #FAF8F8!important;
  }
  input[type="radio"] {
    display: none;
  }
  label:has(input[value="Средняя"]){
    background-color: white;
  }
  .sizes__label, .paste__label{
    padding: 5px 10px;
    border-radius: 9999px;
    // background-color: #ccc;    
    display: block;
    width: 150px;   
    display: flex;
    justify-content: center; 
    transition: .3s;
  }
  .paste__label{
    width: 250px;
  }
  .active{
    background-color: white;
  }
}
</style>
