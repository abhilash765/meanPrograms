let fs = require('fs');
let read = require('readline-sync')
let inventory;
let data;
let totalStockValue, totalDesktopStockValue, totalTabletStockValue, totalLaptopStockValue;
module.exports.stockLink = class InventoryManager {
    readStock() {
        data = fs.readFileSync("D://meanPrograms//oopPrograms//inventoryManagement//computerInventory.json");
        let i = JSON.parse(data.toString());

        return i;
    }
    writeStock() {
        i = JSON.stringify(data.toString());
        fs.writeFileSync("D://meanPrograms//oopPrograms//inventoryManagement//computerInventory.json", i);
    }

    detailsInventory() {
        inventory = this.readStock();
        console.log("------------------------Inventory Details---------------------------")
        var items = [];
        inventory.forEach(element => {
            let key = Object.keys(element);
            key.forEach(keyele => {
                element[keyele].forEach(ele => {
                    items.push(ele);
                })
            });
        })

        console.log(items);
    }
    laptopInventory() {
        inventory = this.readStock();
        inventory.forEach(element => {
            element.Laptops.forEach(ele => {
                totalLaptopStockValue = ele.items * ele.productPrice;
            });
        });
        return totalLaptopStockValue;
    }
    desktopInventory() {
        inventory = this.readStock();
        inventory.forEach(element => {
            element.Desktops.forEach(ele => {
                totalDesktopStockValue = ele.items * ele.productPrice;
            });
        });
        return totalDesktopStockValue;
    }
    tabletInventory() {
        inventory = this.readStock();
        inventory.forEach(element => {
            element.Tablets.forEach(ele => {
                totalTabletStockValue = ele.items * ele.productPrice;
            });

        });
        return totalTabletStockValue;
    }
    printData(details) {
        inventory = this.readStock();
        inventory.forEach(element => {
            element[details].forEach(ele => {
                console.log(ele["stockName"])
                console.log(ele["items"])
                console.log(ele["productPrice"])
            });
        });
    }
    insertInventory(title, items, price) {
        // let left=0;
        // let amt=0;
        // var insertItem={
        //     stockName : " IBM  ",
        //     items:left,
        //     productPrice :amt
        // }
        // inventory.forEach(element =>{
        //     element[details].forEach(ele =>{
        //         ele["stockName"]=left;
        //         ele["productPrice"]=amt;
        //     })
        // })
        inventory = this.readStock();
        let iData = [{
            "stockName": title,
        "items": items,
        "productPrice": price}];
        inventory.forEach(element => {
            element.forEach(ele => {
                ele.push(iData);
            })
        })
        this.writeStock();
    }
    calculateTotal() {
        inventory = this.readStock();
        // Calculating stock value of Laptops from json file
        inventory.forEach(element => {
            element.Laptops.forEach(ele => {
                totalStockValue = ele.items * ele.productPrice;
            });
            // Calculating value of Desktops from json file
            element.Desktops.forEach(ele => {
                totalDesktopStockValue = ele.items * ele.productPrice;
            });
            // Calculating value of Tablets from json file
            element.Tablets.forEach(ele => {
                tabletsStockValue = ele.items * ele.productPrice;
            });

        });

        totalStockValue = totalLaptopStockValue + totalDesktopStockValue + totalTabletStockValue;
        return totalStockValue;
    }

}