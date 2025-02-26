var { get, download } = require('qansigliere-axios-utils');

class RevelSystemsAPI {
    constructor(url = '', apiKey = '', apiSecret = '') {
        this.url = url ? url : process.env.REVELSYSTEMS_URL;
        this.headers = {
            'user-agent': 'QANSIGLIERE',
            'content-type': 'application/json',
            accept: 'application/json',
            'API-AUTHENTICATION': `${apiKey ? apiKey : process.env.REVELSYSTEMS_APIKEY}:${
                apiSecret ? apiSecret : process.env.REVELSYSTEMS_APISECRET
            }`,
        };
        this.headersFormData = {
            'user-agent': 'QANSIGLIERE',
            accept: 'application/json',
            'API-AUTHENTICATION': `${apiKey ? apiKey : process.env.REVELSYSTEMS_APIKEY}:${
                apiSecret ? apiSecret : process.env.REVELSYSTEMS_APISECRET
            }`,
        };

        this.Address = 'resources/Address/';
        this.Employee = 'resources/Employee/';
        this.Establishment = 'enterprise/Establishment/';
        this.Order = 'resources/Order/';
        this.Version = 'resources/Version/';
        this.OrderAllInOne = 'resources/OrderAllInOne/';
        this.OrderDataDiff = 'resources/OrderDataDiff/';
        this.OrderExchange = 'resources/OrderExchange/';
        this.OrderExchangeItem = 'resources/OrderExchangeItem/';
        this.OrderHistory = 'resources/OrderHistory/';
        this.OrderItem = 'resources/OrderItem/';
        this.OrderItemCatering = 'resources/OrderItemCatering/';
        this.OrderItemCommission = 'resources/OrderItemCommission/';
        this.OrderItemDataDiff = 'resources/OrderItemDataDiff/';
        this.OrderTaxBreakDown = 'resources/OrderTaxBreakDown/';
        this.Payment = 'resources/Payment/';
        this.AppliedServiceFee = 'resources/AppliedServiceFee/';
        this.AppliedTaxOrder = 'resources/AppliedTaxOrder/';
        this.AppliedTaxOrderItem = 'resources/AppliedTaxOrderItem/';
        this.Attribute = 'resources/Attribute/';
        this.AttributeValue = 'resources/AttributeValue/';
        this.BankDrop = 'resources/BankDrop/';
        this.Brand = 'enterprise/Brand/';
        this.BusinessActionLog = 'resources/BusinessActionLog/';
        this.BusinessDay = 'resources/BusinessDay/';
        this.CashOffice = 'resources/CashOffice/';
        this.ComboProductSet = 'resources/ComboProductSet/';
        this.ComboProductSetProduct = 'resources/ComboProductSetProduct/';
        this.Company = 'enterprise/Company/';
        this.Currency = 'resources/Currency/';
        this.CurrentStock = 'inventoryx/api/inventory/CurrentStock/';
        this.CustomMenu = 'resources/CustomMenu/';
        this.CustomOrderOption = 'resources/CustomOrderOption/';
        this.CustomOrderOptionPrinterSettings = 'resources/CustomOrderOptionPrinterSettings/';
        this.CustomPaymentType = 'resources/CustomPaymentType/';
        this.Customer = 'resources/Customer/';
        this.CustomerAddress = 'resources/CustomerAddress/';
    }

    async getCustomerAddressByID(id) {
        return await get(this.url, `${this.CustomerAddress}${id}/`, this.headers);
    }

    async downloadCustomerAddress(
        customer = '',
        uuid = '',
        country = '',
        active = '',
        street_1 = '',
        id = '',
        additional_filters = '',
    ) {
        let url = this.CustomerAddress + '?';
        if (customer) url += `customer=${customer}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (country) url += `country=${country}&`;
        if (active) url += `active=${active}&`;
        if (street_1) url += `street_1=${street_1}&`;
        if (id) url += `id=${id}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getCustomerByID(id) {
        return await get(this.url, `${this.Customer}${id}/`, this.headers);
    }

    async downloadCustomer(
        updated_date = '',
        phone_number = '',
        last_name = '',
        total_purchases = '',
        active = '',
        first_name = '',
        uuid = '',
        ref_number = '',
        email = '',
        created_date = '',
        total_visits = '',
        additional_filters = '',
    ) {
        let url = this.Customer + '?';
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (phone_number) url += `phone_number=${phone_number}&`;
        if (last_name) url += `last_name=${last_name}&`;
        if (total_purchases) url += `total_purchases=${total_purchases}&`;
        if (active) url += `active=${active}&`;
        if (first_name) url += `first_name=${first_name}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (ref_number) url += `ref_number=${ref_number}&`;
        if (email) url += `email=${email}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (total_visits) url += `total_visits=${total_visits}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getCustomPaymentTypeByID(id) {
        return await get(this.url, `${this.CustomPaymentType}${id}/`, this.headers);
    }

    async downloadCustomPaymentType(additional_filters = '') {
        let url = this.CustomPaymentType + '?';
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getCustomOrderOptionPrinterSettingsByID(id) {
        return await get(this.url, `${this.CustomOrderOptionPrinterSettings}${id}/`, this.headers);
    }

    async downloadCustomOrderOptionPrinterSettings(additional_filters = '') {
        let url = this.CustomOrderOptionPrinterSettings + '?';
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getCustomOrderOptionByID(id) {
        return await get(this.url, `${this.CustomOrderOption}${id}/`, this.headers);
    }

    async downloadCustomOrderOption(additional_filters = '') {
        let url = this.CustomOrderOption + '?';
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getCustomMenuByID(id) {
        return await get(this.url, `${this.CustomMenu}${id}/`, this.headers);
    }

    async downloadCustomMenu(active = '', updated_date = '', product_group = '', additional_filters = '') {
        let url = this.CustomMenu + '?';
        if (active) url += `active=${active}&`;
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (product_group) url += `product_group=${product_group}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getCurrentStockByID(id) {
        return await get(this.url, `${this.CurrentStock}${id}/`, this.headers);
    }

    async downloadCurrentStock(updated_date = '', establishment = '', additional_filters = '') {
        let url = this.CurrentStock + '?';
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (establishment) url += `establishment=${establishment}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getCurrencyByID(id) {
        return await get(this.url, `${this.Currency}${id}/`, this.headers);
    }

    async downloadCurrency(additional_filters = '') {
        let url = this.Currency + '?';
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getCompanyByID(id) {
        return await get(this.url, `${this.Company}${id}/`, this.headers);
    }

    async downloadCompany(additional_filters = '') {
        let url = this.Company + '?';
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getComboProductSetProductByID(id) {
        return await get(this.url, `${this.ComboProductSetProduct}${id}/`, this.headers);
    }

    async downloadComboProductSetProduct(additional_filters = '') {
        let url = this.ComboProductSetProduct + '?';
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getComboProductSetByID(id) {
        return await get(this.url, `${this.ComboProductSet}${id}/`, this.headers);
    }

    async downloadComboProductSet(product = '', additional_filters = '') {
        let url = this.ComboProductSet + '?';
        if (product) url += `product=${product}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getCashOfficeByID(id) {
        return await get(this.url, `${this.CashOffice}${id}/`, this.headers);
    }

    async downloadCashOffice(establishment = '', additional_filters = '') {
        let url = this.CashOffice + '?';
        if (establishment) url += `establishment=${establishment}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getBusinessDayByID(id) {
        return await get(this.url, `${this.BusinessDay}${id}/`, this.headers);
    }

    async downloadBusinessDay(establishment = '', additional_filters = '') {
        let url = this.BusinessDay + '?';
        if (establishment) url += `establishment=${establishment}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getBusinessActionLogByID(id) {
        return await get(this.url, `${this.BusinessActionLog}${id}/`, this.headers);
    }

    async downloadBusinessActionLog(
        uuid = '',
        action_date_time = '',
        pos_station = '',
        user = '',
        action_type = '',
        establishment = '',
        additional_filters = '',
    ) {
        let url = this.BusinessActionLog + '?';
        if (uuid) url += `uuid=${uuid}&`;
        if (action_date_time) url += `action_date_time=${action_date_time}&`;
        if (pos_station) url += `pos_station=${pos_station}&`;
        if (user) url += `user=${user}&`;
        if (action_type) url += `action_type=${action_type}&`;
        if (establishment) url += `establishment=${establishment}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getBrandByID(id) {
        return await get(this.url, `${this.Brand}${id}/`, this.headers);
    }

    async downloadBrand(additional_filters = '') {
        let url = this.Brand + '?';
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getBankDropByID(id) {
        return await get(this.url, `${this.BankDrop}${id}/`, this.headers);
    }

    async downloadBankDrop(
        till = '',
        local_id = '',
        establishment = '',
        uuid = '',
        drawer_number = '',
        additional_filters = '',
    ) {
        let url = this.BankDrop + '?';
        if (till) url += `till=${till}&`;
        if (local_id) url += `local_id=${local_id}&`;
        if (establishment) url += `establishment=${establishment}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (drawer_number) url += `drawer_number=${drawer_number}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getAttributeValueByID(id) {
        return await get(this.url, `${this.AttributeValue}${id}/`, this.headers);
    }

    async downloadAttributeValue(active = '', attribute = '', updated_date = '', additional_filters = '') {
        let url = this.AttributeValue + '?';
        if (active) url += `active=${active}&`;
        if (attribute) url += `attribute=${attribute}&`;
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getAttributeByID(id) {
        return await get(this.url, `${this.Attribute}${id}/`, this.headers);
    }

    async downloadAttribute(sort = '', id = '', additional_filters = '') {
        let url = this.Attribute + '?';
        if (sort) url += `sort=${sort}&`;
        if (id) url += `id=${id}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getAppliedTaxOrderItemByID(id) {
        return await get(this.url, `${this.AppliedTaxOrderItem}${id}/`, this.headers);
    }

    async downloadAppliedTaxOrderItem(order_item = '', uuid = '', additional_filters = '') {
        let url = this.AppliedTaxOrderItem + '?';
        if (order_item) url += `order_item=${order_item}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getAppliedTaxOrderByID(id) {
        return await get(this.url, `${this.AppliedTaxOrder}${id}/`, this.headers);
    }

    async downloadAppliedTaxOrder(order = '', uuid = '', additional_filters = '') {
        let url = this.AppliedTaxOrder + '?';
        if (order) url += `order=${order}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getAppliedServiceFeeByID(id) {
        return await get(this.url, `${this.AppliedServiceFee}${id}/`, this.headers);
    }

    async downloadAppliedServiceFee(item = '', order = '', uuid = '', additional_filters = '') {
        let url = this.AppliedServiceFee + '?';
        if (item) url += `item=${item}&`;
        if (order) url += `order=${order}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getPaymentByID(id) {
        return await get(this.url, `${this.Payment}${id}/`, this.headers);
    }

    async downloadPayment(
        updated_date = '',
        refund_transaction_id = '',
        station = '',
        uuid = '',
        created_date = '',
        establishment = '',
        order = '',
        transaction_id = '',
        additional_filters = '',
    ) {
        let url = this.Payment + '?';
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (refund_transaction_id) url += `refund_transaction_id=${refund_transaction_id}&`;
        if (station) url += `station=${station}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (establishment) url += `establishment=${establishment}&`;
        if (order) url += `order=${order}&`;
        if (transaction_id) url += `transaction_id=${transaction_id}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderTaxBreakDownByID(id) {
        return await get(this.url, `${this.OrderTaxBreakDown}${id}/`, this.headers);
    }

    async downloadOrderTaxBreakDown(tax_type = '', order = '', additional_filters = '') {
        let url = this.OrderTaxBreakDown + '?';
        if (tax_type) url += `tax_type=${tax_type}&`;
        if (order) url += `order=${order}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderItemDataDiffByID(id) {
        return await get(this.url, `${this.OrderItemDataDiff}${id}/`, this.headers);
    }

    async downloadOrderItemDataDiff(orderitem = '', created_date = '', additional_filters = '') {
        let url = this.OrderItemDataDiff + '?';
        if (orderitem) url += `orderitem=${orderitem}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderItemCommissionByID(id) {
        return await get(this.url, `${this.OrderItemCommission}${id}/`, this.headers);
    }

    async downloadOrderItemCommission(
        order_item = '',
        commission_user = '',
        updated_date = '',
        additional_filters = '',
    ) {
        let url = this.OrderItemCommission + '?';
        if (order_item) url += `order_item=${order_item}&`;
        if (commission_user) url += `commission_user=${commission_user}&`;
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderItemCateringByID(id) {
        return await get(this.url, `${this.OrderItemCatering}${id}/`, this.headers);
    }

    async downloadOrderItemCatering(
        updated_date = '',
        product = '',
        voided_date = '',
        uuid = '',
        catering_complete = '',
        created_date = '',
        catering_delivery_date = '',
        id = '',
        order = '',
        additional_filters = '',
    ) {
        let url = this.OrderItemCatering + '?';
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (product) url += `product=${product}&`;
        if (voided_date) url += `voided_date=${voided_date}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (catering_complete) url += `catering_complete=${catering_complete}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (catering_delivery_date) url += `catering_delivery_date=${catering_delivery_date}&`;
        if (id) url += `id=${id}&`;
        if (order) url += `order=${order}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderItemByID(id) {
        return await get(this.url, `${this.OrderItem}${id}/`, this.headers);
    }

    async downloadOrderItem(
        updated_date = '',
        product = '',
        voided_date = '',
        uuid = '',
        catering_complete = '',
        created_date = '',
        catering_delivery_date = '',
        id = '',
        order = '',
        additional_filters = '',
    ) {
        let url = this.OrderItem + '?';
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (product) url += `product=${product}&`;
        if (voided_date) url += `voided_date=${voided_date}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (catering_complete) url += `catering_complete=${catering_complete}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (catering_delivery_date) url += `catering_delivery_date=${catering_delivery_date}&`;
        if (id) url += `id=${id}&`;
        if (order) url += `order=${order}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderHistoryByID(id) {
        return await get(this.url, `${this.OrderHistory}${id}/`, this.headers);
    }

    async downloadOrderHistory(opened = '', order = '', closed = '', uuid = '', additional_filters = '') {
        let url = this.OrderHistory + '?';
        if (opened) url += `opened=${opened}&`;
        if (order) url += `order=${order}&`;
        if (closed) url += `closed=${closed}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderExchangeItemByID(id) {
        return await get(this.url, `${this.OrderExchangeItem}${id}/`, this.headers);
    }

    async downloadOrderExchangeItem(order_item = '', order_exchange = '', additional_filters = '') {
        let url = this.OrderExchangeItem + '?';
        if (order_item) url += `order_item=${order_item}&`;
        if (order_exchange) url += `order_exchange=${order_exchange}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderExchangeByID(id) {
        return await get(this.url, `${this.OrderExchange}${id}/`, this.headers);
    }

    async downloadOrderExchange(exchanged_order = '', order = '', additional_filters = '') {
        let url = this.OrderExchange + '?';
        if (exchanged_order) url += `exchanged_order=${exchanged_order}&`;
        if (order) url += `order=${order}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderDataDiffByID(id) {
        return await get(this.url, `${this.OrderDataDiff}${id}/`, this.headers);
    }

    async downloadOrderDataDiff(order = '', created_date = '', additional_filters = '') {
        let url = this.OrderDataDiff + '?';
        if (order) url += `order=${order}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getOrderAllInOneByID(id) {
        return await get(this.url, `${this.OrderAllInOne}${id}/`, this.headers);
    }

    async downloadOrderAllInOne(
        running_tax_number = '',
        web_order = '',
        has_items = '',
        registry_data = '',
        id = '',
        call_number = '',
        uuid = '',
        created_by = '',
        closed = '',
        establishment = '',
        updated_date = '',
        delivery_employee = '',
        pickup_time = '',
        dining_option = '',
        call_name = '',
        printed = '',
        device_id = '',
        customer = '',
        is_invoice = '',
        local_id = '',
        created_date = '',
        external_sync = '',
        has_history = '',
        additional_filters = '',
    ) {
        let url = this.OrderAllInOne + '?';
        if (running_tax_number) url += `running_tax_number=${running_tax_number}&`;
        if (web_order) url += `web_order=${web_order}&`;
        if (has_items) url += `has_items=${has_items}&`;
        if (registry_data) url += `registry_data=${registry_data}&`;
        if (id) url += `id=${id}&`;
        if (call_number) url += `call_number=${call_number}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (created_by) url += `created_by=${created_by}&`;
        if (closed) url += `closed=${closed}&`;
        if (establishment) url += `establishment=${establishment}&`;
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (delivery_employee) url += `delivery_employee=${delivery_employee}&`;
        if (pickup_time) url += `pickup_time=${pickup_time}&`;
        if (dining_option) url += `dining_option=${dining_option}&`;
        if (call_name) url += `call_name=${call_name}&`;
        if (printed) url += `printed=${printed}&`;
        if (device_id) url += `device_id=${device_id}&`;
        if (customer) url += `customer=${customer}&`;
        if (is_invoice) url += `is_invoice=${is_invoice}&`;
        if (local_id) url += `local_id=${local_id}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (external_sync) url += `external_sync=${external_sync}&`;
        if (has_history) url += `has_history=${has_history}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getVersion() {
        return await get(this.url, this.Version, this.headers);
    }

    async getOrderByID(id) {
        return await get(this.url, `${this.Order}${id}/`, this.headers);
    }

    async downloadOrder(
        running_tax_number = '',
        web_order = '',
        has_items = '',
        registry_data = '',
        id = '',
        call_number = '',
        uuid = '',
        created_by = '',
        closed = '',
        establishment = '',
        updated_date = '',
        delivery_employee = '',
        pickup_time = '',
        dining_option = '',
        call_name = '',
        printed = '',
        device_id = '',
        customer = '',
        is_invoice = '',
        local_id = '',
        created_date = '',
        external_sync = '',
        has_history = '',
        additional_filters = '',
    ) {
        let url = this.Order + '?';
        if (running_tax_number) url += `running_tax_number=${running_tax_number}&`;
        if (web_order) url += `web_order=${web_order}&`;
        if (has_items) url += `has_items=${has_items}&`;
        if (registry_data) url += `registry_data=${registry_data}&`;
        if (id) url += `id=${id}&`;
        if (call_number) url += `call_number=${call_number}&`;
        if (uuid) url += `uuid=${uuid}&`;
        if (created_by) url += `created_by=${created_by}&`;
        if (closed) url += `closed=${closed}&`;
        if (establishment) url += `establishment=${establishment}&`;
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (delivery_employee) url += `delivery_employee=${delivery_employee}&`;
        if (pickup_time) url += `pickup_time=${pickup_time}&`;
        if (dining_option) url += `dining_option=${dining_option}&`;
        if (call_name) url += `call_name=${call_name}&`;
        if (printed) url += `printed=${printed}&`;
        if (device_id) url += `device_id=${device_id}&`;
        if (customer) url += `customer=${customer}&`;
        if (is_invoice) url += `is_invoice=${is_invoice}&`;
        if (local_id) url += `local_id=${local_id}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (external_sync) url += `external_sync=${external_sync}&`;
        if (has_history) url += `has_history=${has_history}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getEstablishmentByID(id) {
        return await get(this.url, `${this.Establishment}${id}/`, this.headers);
    }

    async downloadEstablishment(id = '', additional_filters = '') {
        let url = this.Establishment + '?';
        if (id) url += `id=${id}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getEmployeeByID(id) {
        return await get(this.url, `${this.Employee}${id}/`, this.headers);
    }

    async downloadEmployee(
        updated_date = '',
        last_timesheet_entry = '',
        created_date = '',
        id = '',
        user = '',
        additional_filters = '',
    ) {
        let url = this.Employee + '?';
        if (updated_date) url += `updated_date=${updated_date}&`;
        if (last_timesheet_entry) url += `last_timesheet_entry=${last_timesheet_entry}&`;
        if (created_date) url += `created_date=${created_date}&`;
        if (id) url += `id=${id}&`;
        if (user) url += `user=${user}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }

    async getAddressByID(id) {
        return await get(this.url, `${this.Address}${id}/`, this.headers);
    }

    async downloadAddress(is_external = '', additional_filters = '') {
        let url = this.Address + '?';
        if (is_external) url += `is_external=${is_external}&`;
        if (additional_filters) url += additional_filters;
        return await download(this.url, url, this.headers, 'objects', 'meta');
    }
}

module.exports.RevelSystemsAPI = RevelSystemsAPI;
