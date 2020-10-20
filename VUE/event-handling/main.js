var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        altText: "A pair of socks",
        image: "./assets/vmSocks-green.png",
        width: "300",
        height: "250",
        url:"https://www.brilio.net",
        inStock: true,
        inventory: 10,
        onSale : true,
        details: ['80% Cotton','20% Polyester','Gender-neutral'],
        sizes: ['4','5','6','7'],
        variants: [
            {
                variantId: 12345,
                variantColor: "blue",
                variantImage: "./assets/vmSocks-blue.png",
            },
            {
                variantId: 43562,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.png",
            }
        ],
        cart: 0
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart >= 1)
            this.cart -= 1
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    }
});