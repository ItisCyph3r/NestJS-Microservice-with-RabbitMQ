# NestJS Microservices with RabbitMQ

This repository contains a complete example of implementing microservices using NestJS and RabbitMQ. The project demonstrates both event-driven and RPC (Remote Procedure Call) patterns.

## Project Structure

```
NestJs-Microservice-RabbitMQ/
├── producer/           # REST API service that produces messages
│   ├── src/
│   │   ├── orders/    # Order domain logic
│   │   └── app.module.ts
│   ├── docker-compose.yml
│   └── .env
│
└── consumer/          # Microservice that consumes messages
    ├── src/
    │   ├── app.controller.ts
    │   └── app.service.ts
    └── docker-compose.yml
```

## Features

1. **Event-Driven Architecture**
   - Producers emit events to RabbitMQ queues
   - Consumers process messages asynchronously

2. **RPC Pattern**
   - Producers send requests and wait for responses
   - Consumers handle requests and return responses

3. **Configuration Management**
   - Environment variables via @nestjs/config
   - Docker support for development

## Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose
- TypeScript

## Getting Started

1. **Environment Setup**
   - Copy `.env.example` to `.env` in both producer and consumer directories
   - Update environment variables:
     ```
     RABBITMQ_PORT=5672
     RABBITMQ_MANAGEMENT_PORT=15672
     RABBITMQ_URL=amqp://guest:guest@localhost:5672
     ```

2. **Start RabbitMQ**
   ```bash
   # In producer directory
   docker-compose up -d
   ```

3. **Start Services**
   - Start producer service:
     ```bash
     cd producer
     npm install
     npm run start:dev
     ```
   - Start consumer service:
     ```bash
     cd consumer
     npm install
     npm run start:dev
     ```

4. **Verify Setup**
   - RabbitMQ Management UI: http://localhost:15672 (default credentials: guest/guest)
   - Producer API: http://localhost:9000/orders/place-order

## API Endpoints (Producer Service)

### Event-Driven

- `POST /orders/place-order` - Place a new order
  ```json
  {
    "email": "string",
    "productName: "string,
    "quantity": number
  }
  ```

## Technology Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Message Broker**: RabbitMQ
- **Configuration**: @nestjs/config
- **Development Tools**: 
  - ESLint
  - Prettier
  - Jest (for testing)

## Testing

```bash
# Run tests
$ npm run test

# Watch mode
$ npm run test:watch

# Code coverage
$ npm run test:cov
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
