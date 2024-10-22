import Order from "../../domain/entity/order";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";
import OrderRepositoryInterface from "../../domain/repository/order-repository.interface"
import OrderItem from "../../domain/entity/order_item";



export default class OrderRepository implements OrderRepositoryInterface {

    async create(entity: Order): Promise<void> {
        try {
            await OrderModel.create({
                id: entity.id,
                customer_id: entity.customerId,
                total: entity.total(),
                items: entity.items.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    product_id: item.productId
                }))
            },
                {
                    include: [{ model: OrderItemModel }]
                }
            );
        } catch (error) {
            throw new Error(`Error to create a order`);
        }
    }

    async update(entity: Order): Promise<void> {
        try {
            await OrderModel.update({
                customer_id: entity.customerId,
                total: entity.total()
            }, {
                where: { id: entity.id },

            });
        } catch (error) {
            throw new Error(`Error to update a order`);
        }
    }

    async find(id: string): Promise<Order> {
        try {
            const orderModel = await OrderModel.findOne({
                where: { id },
                include: ["items"]
            });
            if (!orderModel) {
                throw new Error("Order not found");
            }
            const order = new Order(orderModel.id, orderModel.customer_id, orderModel.items.map(item => new OrderItem(item.id, item.name, item.price, item.product_id, item.quantity)));
            return order;


        } catch (error) {
            throw new Error(`Error to find a order`);
        }
    }

    async findAll(): Promise<Order[]> {
        try {
            const orderModels = await OrderModel.findAll({
                include: ["items"]
            });
            const orders = orderModels.map(orderModel => {
                console.log(orderModel.items)
                return new Order(
                    orderModel.id,
                    orderModel.customer_id,
                    orderModel.items.map(item => {
                        return new OrderItem(item.id, item.name, item.price, item.product_id, item.quantity)
                    })
                )
            });
            return orders;


        } catch (error) {
            throw new Error(`Error to find all orders`);
        }
    }

    async updateItem(entity: OrderItem): Promise<void> {
        try {
            throw new Error("Method not implemented.");
        } catch (error) {
            throw new Error(`Error to update a order item`);
        }
    }

    async findByOrderId(id: string): Promise<OrderItem> {
        try {
            throw new Error("Method not implemented.");
        } catch (error) {
            throw new Error(`Error to find a order by id`);
        }
    }

    async findByItemId(id: string): Promise<OrderItem> {
        try {
            throw new Error("Method not implemented.");
        } catch (error) {
            throw new Error(`Error to find a order by item id`);
        }
    }


}