# NestJS Producer Service

This is the producer service component of the NestJS microservices architecture. It exposes REST APIs that send messages to RabbitMQ using both event-driven and RPC patterns.

## License

This project is licensed under the MIT License - see [LICENSE.txt](../LICENSE.txt) for details.

## Features

1. **Event-Driven Endpoints**
   - Place orders through RabbitMQ
   - Asynchronous message processing

2. **RPC Endpoints**
   - Validate orders with request/response pattern
   - Synchronous communication with consumer

## API Endpoints

### Event-Driven

- `POST /orders/place-order` - Place a new order
  ```json
  {
    "email": "string",
    "productName: "string,
    "quantity": number
  }
  ```

## Configuration

The service uses environment variables for configuration. Copy `.env.example` to `.env` and update the following:

```env
PORT=9000
NODE_ENV=development

RABBITMQ_PORT=5672
RABBITMQ_MANAGEMENT_PORT=15672
RABBITMQ_URL=amqp://guest:guest@localhost:5672
RABBITMQ_DEFAULT_USER=guest
RABBITMQ_DEFAULT_PASS=guest
```

## Running the Service

1. Start RabbitMQ using Docker Compose:
   ```bash
   docker-compose up -d
   ```

2. Install dependencies and start the service:
   ```bash
   npm install
   npm run start:dev
   ```

3. Verify setup:
   - RabbitMQ Management UI: http://localhost:15672
   - Service API: http://localhost:9000

## Development

- **Testing**
  ```bash
  npm run test
  ```

- **Linting**
  ```bash
  npm run lint
  ```

- **Code Style**
  ```bash
  npm run format
  ```
