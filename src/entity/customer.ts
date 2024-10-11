import Address from "./address";


export default class Customer {
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _activate: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    get name(): string {
        return this._name;
    }

    isActive(): boolean {
        return this._activate;
    }


    validate(): void {
        if (this._name.length === 0) {
            throw new Error('Name is required');
        }
        if (this._id.length === 0) {
            throw new Error('Id is required');
        }
    }

    changeName(name: string): void {
        this._name = name;
        this.validate();
    }



    activate(): void {
        if (this._address === undefined) {
            throw new Error('Address is required');
        }
        this._activate = true;
    }

    deactivate(): void {
        this._activate = false;
    }

    set Address(address: Address) {
        this._address = address;
    }


    /*
        // get id(): string {
        //     return this._id;
        // }

        // set id(id: string) {
        //     this._id = id;
        // }

        // set activate(activate: boolean) {   
        //     this._activate = activate;
        // }

        nao se pode ter isso, por nao expressar regras de negocio, metodos de get e set devem 
        ficar apenas em entidades anemicas.


        A diferenca aqui é que o activate tem uma intencao de negocio para ser alterada, sendo 
        a modificacao do estado de um cliente pela regra de negocio ou nao. Isso e uma regra de 
        negocio, um motivo pelo qual aquilo existe. 
    
    */

}