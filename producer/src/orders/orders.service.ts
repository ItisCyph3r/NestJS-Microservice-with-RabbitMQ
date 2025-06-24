import { Injectable, Inject, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { ClientProxy } from '@nestjs/microservices';
import { timeout } from 'rxjs';

@Injectable()
export class OrdersService implements OnApplicationBootstrap, OnApplicationShutdown {
    constructor(@Inject ('ORDERS_SERVICE') private rabbitClient: ClientProxy) {}

    async onApplicationBootstrap() {
        try {
            await this.rabbitClient.connect();
            console.log('RabbitMQ connected successfullly');
        } catch (err) {
            console.error('Failed to connect to RabbitMQ', err);
        }
    }

    onApplicationShutdown() {
        this.rabbitClient.close();
    }

    placeOrder(order: OrderDto) {
        this.rabbitClient.emit("order-placed", order);
        return "Order placed successfully";
    }   

    /*
        Note send is used to send a message to the queue, a response is expected
        emit is used to emit an event to the queue, no response is expected
    */
    getOrders() {
        return this.rabbitClient
        .send({ cmd: "fetch-orders" }, {})
        .pipe(timeout(5000));
        
    }
}
