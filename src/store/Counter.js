import { defineStore } from 'pinia';

export const useCounterStore = defineStore('useCounterStore', {
    state: () => ({
        cartItem: [],
        count: 0,
        items: [],
    }),
    actions: {

        addItem(item) {
            this.cartItem.push(item);
            localStorage.setItem('cartItem', JSON.stringify(this.cartItem));
            console.log(this.cartItem);
        },
        getItems() {
            this.items = JSON.parse(localStorage.getItem('cartItem'));
            console.log(this.items);
        },
    }
});
