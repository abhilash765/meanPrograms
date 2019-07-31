/********************************************************************************************************************
* @Execution : default node : cmd> commercialData.js
*
* @Purpose :Object oriented concepts
*
* @description : The StockAccount class also maintains a list of CompanyShares object which has Stock Symbol and
 Number of Shares as well as DateTime of the transaction.
  When buy or sell is initiated StockAccount checks if CompanyShares are available and accordingly update or create an Object..
* 
* @overview :Object oriented analysis and design
* @author : Abhilash <aabhilash765@gmail.com>
* @version : 1.0
* @since : 29-July-2019
*
*******************************************************************************************************************/
let link=require('./utility');
let sLink=new link();
sLink.shareBuy(" abhi");
sLink.valueOf();
sLink.shareSell("athu",234)