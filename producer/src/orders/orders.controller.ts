import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderDto } from './dto/order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('place-order')
  placeOrder(@Body() order: OrderDto) {
    return this.ordersService.placeOrder(order);
  }

  @Get('get-orders')
  getOrders() {
    return this.ordersService.getOrders();
  }
}
