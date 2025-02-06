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

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7
