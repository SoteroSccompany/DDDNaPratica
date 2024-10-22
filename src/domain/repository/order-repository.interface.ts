import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import RepositoryInterface from "./repository-interface";


export default interface OrderRepositoryInterface extends RepositoryInterface<Order> {
    updateItem(entity: OrderItem): Promise<void>;
    findByOrderId(id: string): Promise<OrderItem>;
    findByItemId(id: string): Promise<OrderItem>;
}