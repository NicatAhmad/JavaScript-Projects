class Migros {
    discountRate = 20;
    constructor(name, surName, haveCard, products) {
        this.name = name;
        this.surName = surName;
        this.haveCard = haveCard;
        this.products = products;

    }
    calculate() {
        let payment = 0;
        if (this.checkProducts(this.products)) {
            if (this.haveCard) {
                this.products.forEach(product => {
                    payment += (product.price * (100 - this.discountRate) / 100);
                }
                )
            }
            else {
                this.products.forEach(product => {
                    payment += product.price;
                }
                )
            }

        }
        else {
            alert("You must buy at least one product");
        }
        return payment;
    }
    checkProducts(products) {
        if (products != null && products.length > 0) {
            return true;
        }
        return false;
    }
}