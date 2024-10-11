

export default class OrderItem {

    _id: string;
    _name: string;
    _price: number;


    constructor(id: string, name: string, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }

    validate(): void {
        if (this._price <= 0) {
            throw new Error('Price is required');
        }
        if (this._id.length === 0) {
            throw new Error('Id is required');
        }
        if (this._name.length === 0) {
            throw new Error('name is required');
        }
    }

}