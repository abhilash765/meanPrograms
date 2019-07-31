/* A utility class for reading stock details,writing stock details,displaying list of stocks*/
let fs = require('fs');
let read = require('readline-sync')
class Stock {
    constructor() {
        this.inventorey;
        this.data;
        this.benzStockValue, this.bmwStockValue, this.toyotaStockValue, this.totalStockValue;
    }
}
// Prototype for reading the stocks
Stock.prototype.readStock = () => {
    this.data = fs.readFileSync("D:\meanPrograms\oopPrograms\Stock Report\stockInventory.json");
    let i = JSON.parse(this.data.toString());

    return i;
}
// Function prototype for writing stock
Stock.prototype.writeStock = () => {
    i = JSON.stringify(this.data.toString());
    fs.writeFileSync("D:\meanPrograms\oopPrograms\Stock Report\stockInventory.json", i);
}

Stock.prototype.listOfStocks = () => {
    this.inventorey = this.readStock();
    console.log("------------------------Stock Report---------------------------")
    var arrayItems = [];
    this.inventorey.forEach(element => {
        let key = Object.keys(element);
        key.forEach(keyele => {
            element[keyele].forEach(ele => {
                arrayItems.push(ele);
            })
        });
    })

    console.log(arrayItems)
}
Stock.prototype.calculateBenz = () => {
    this.inventorey = this.readStock();
    this.inventorey.forEach(element => {
        element.Benz.forEach(ele => {
            this.benzStockValue = ele.noOfShares * ele.sharePrice;
        });
    });
    return this.benzStockValue;
}
Stock.prototype.calculateBmw = () => {
    this.inventorey = this.readStock();
    this.inventorey.forEach(element => {
        element.BMW.forEach(ele => {
            this.bmwStockValue = ele.noOfShares * ele.sharePrice;
        });
    });
    return this.bmwStockValue;
}
Stock.prototype.calculateToyota = () => {
    this.inventorey = this.readStock();
    this.inventorey.forEach(element => {
        element.Toyota.forEach(ele => {
            toyotaStockValue = ele.noOfShares * ele.sharePrice;
        });

    });
    return toyotaStockValue;
}
Stock.prototype.print = (details) => {
    this.inventorey = this.readStock();
    this.inventorey.forEach(element => {
        element[details].forEach(ele => {
            console.log(ele["stockName"])
            console.log(ele["noOfShares"])
            console.log(ele["sharePrice"])
        });
    });
}
Stock.prototype.calculateTotal = () => {
    this.inventorey = this.readStock();
    // Calculating stock value of benz from json file
    this.inventorey.forEach(element => {
        element.Benz.forEach(ele => {
            this.benzStockValue = ele.noOfShares * ele.sharePrice;
        });
        // Calculating value of Bmw from json file
        element.BMW.forEach(ele => {
            this.bmwStockValue = ele.noOfShares * ele.sharePrice;
        });
        // Calculating value of toyota from json file
        element.Toyota.forEach(ele => {
            toyotaStockValue = ele.noOfShares * ele.sharePrice;
        });

    });

    this.totalStockValue = this.benzStockValue + this.bmwStockValue + this.toyotaStockValue;
    return this.totalStockValue;
}