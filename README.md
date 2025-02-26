# Revel Systems API Integration

The main idea of ​​this library created in the JavaScript language is to provide a ready-made set of API methods for
integration with Revel Systems Management Console

## Author

https://www.youtube.com/@QANSIGLIERE/

## Support the project

https://buymeacoffee.com/qansigliere

## Installation

Using npm `npm i qansigliere-revelsystems-api-integration`

## How to use it

### Create a \*.env file

Create any \*.env file (like `revelsystems.env`) and write the following information in the created file

```
export REVELSYSTEMS_URL="https://__YOUR_URL__"
export REVELSYSTEMS_APIKEY="__YOUR_APIKEY__"
export REVELSYSTEMS_APISECRET="__YOUR_APISECRET__"
```

### Make the \*.env file works

Just run in the terminal the following command: `source yourfile.env`

### Address

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getAddressByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadAddress(false);
```

### Employee

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getEmployeeByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadEmployee('2021-03-19T15:55:59.507984');
```

### Establishment

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getEstablishmentByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadEstablishment();
```

### Order

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrder();
```

### Version

#### Get an object

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getVersion();
```

### OrderAllInOne

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderAllInOneByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderAllInOne();
```

### OrderDataDiff

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderDataDiffByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderDataDiff();
```

### OrderExchange

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderExchangeByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderExchange();
```

### OrderExchangeItem

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderExchangeItemByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderExchangeItem();
```

### OrderHistory

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderHistoryByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderHistory();
```

### OrderItem

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderItemByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderItem();
```

### OrderItemCatering

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderItemCateringByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderItemCatering();
```

### OrderItemCommission

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderItemCommissionByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderItemCommission();
```

### OrderItemDataDiff

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderItemDataDiffByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderItemDataDiff();
```

### OrderTaxBreakDown

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getOrderTaxBreakDownByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadOrderTaxBreakDown();
```

### Payment

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getPaymentByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadPayment();
```

### AppliedServiceFee

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getAppliedServiceFeeByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadAppliedServiceFee();
```

### AppliedTaxOrder

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getAppliedTaxOrderByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadAppliedTaxOrder();
```

### AppliedTaxOrderItem

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getAppliedTaxOrderItemByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadAppliedTaxOrderItem();
```

### Attribute

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getAttributeByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadAttribute();
```

### AttributeValue

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getAttributeValueByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadAttributeValue();
```

### BankDrop

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getBankDropByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadBankDrop();
```

### Brand

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getBrandByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadBrand();
```

### BusinessActionLog

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getBusinessActionLogByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadBusinessActionLog();
```

### BusinessDay

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getBusinessDayByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadBusinessDay();
```

### CashOffice

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCashOfficeByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCashOffice();
```

### ComboProductSet

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getComboProductSetByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadComboProductSet();
```

### ComboProductSetProduct

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getComboProductSetProductSetByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadComboProductSetProduct();
```

### Company

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCompanyByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCompany();
```

### Currency

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCurrencyByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCurrency();
```

### CurrentStock

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCurrentStockByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCurrentStock();
```

### CustomMenu

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCustomMenuByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCustomMenu();
```

### CustomOrderOption

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCustomOrderOptionByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCustomOrderOption();
```

### CustomOrderOptionPrinterSettings

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCustomOrderOptionPrinterSettingsByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCustomOrderOptionPrinterSettings();
```

### CustomPaymentType

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCustomPaymentTypeByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCustomPaymentType();
```

### Customer

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCustomerByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCustomer();
```

### CustomerAddress

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCustomerAddressByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCustomerAddress();
```

### CustomerEstablishment

#### Get any specific object by id

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.getCustomerEstablishmentByID(1);
```

#### Download all filtered records

```
let apiRequest = new RevelSystemsAPI();
let resp = await apiRequest.downloadCustomerEstablishment();
```

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7
