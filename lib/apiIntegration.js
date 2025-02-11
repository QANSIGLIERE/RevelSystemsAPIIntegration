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
