const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection Open")
    })
    .catch(err => {
        console.log("An error has occurred!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be greater than zero!"]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

// Define an instance method which makes it available to all instances of a schema
// this keyword refers to the instance of the model
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

// A static method is one that works on the model itself, rather than an instance of it
// this keyword refers to the model class itself
// Static methods are often used for CRUD operations
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema);

const bike = new Product({name: "Mountain Bike", price: 599, categories: ['Cycling']})
bike.save()
    .then(data => {
        console.log("Items saved to database")
        console.log(data)
    })
    .catch(err => {
        console.log("An error has occurred!")
        console.log(err)
    })

// Define an async function which finds item in the DB
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

Product.fireSale().then(res => console.log(res))

findProduct();