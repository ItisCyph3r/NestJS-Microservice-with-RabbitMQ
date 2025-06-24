# NestJS Consumer Service

This is the consumer service component of the NestJS microservices architecture. It processes messages from RabbitMQ using both event-driven and RPC patterns.

## Features

1. **Event-Driven Processing**
   - Listens for order events on the "orders-queue"
   - Processes orders asynchronously

2. **RPC Processing**
   - Handles order validation requests
   - Returns responses to producer service

## Configuration

The service uses environment variables for configuration. Copy `.env.example` to `.env` and update the following:

```env
PORT=9001
NODE_ENV=development
RABBITMQ_URL=amqp://guest:guest@localhost:5672
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
   - Service should be running and listening for messages

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

## License

This project is licensed under the MIT License - see [LICENSE.txt](../LICENSE.txt) for details.
