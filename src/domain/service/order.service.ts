import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import Customer from "../entity/customer";
import { v4 as uuid } from 'uuid';

export default class OrderService {

    static placeOrder(customer: Customer, items: OrderItem[]): Order {
        if (items.length === 0) {
            throw new Error('Order must have at least one item');
        }
        const order = new Order(uuid(), customer.id, items);
        const points = order.total() / 2;
        customer.addRewardPoints(points);
        return order;
    }

    //Minha implementacao -> comentar em relacao a da aula
    // static placeOrder(customer: Customer, items: OrderItem[]): Order {
    //     //A quantidade de pontos sera ifual a metade do valor dos precos
    //     const order = new Order("o1", customer.idCustomer, items);
    //     const points = order.total() / 2;
    //     customer.addRewardPoints(points);
    //     return order;
    // }

    static total(orders: Order[]): number {
        return orders.reduce((acc, order) => {
            const total = order.total();
            return acc + total;
        }, 0);
    }

}