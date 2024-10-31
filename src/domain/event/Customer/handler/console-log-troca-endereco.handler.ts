import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerEvent from "../customer.event";


export default class ConsoleLogTrocaEnderecoHandler implements EventHandlerInterface {

    handle(event: CustomerEvent): void {
        console.log(`Endereço do cliente ${event.eventData.id}, ${event.eventData.name} foi alterado para ${event.eventData.Address}`);
    }
}