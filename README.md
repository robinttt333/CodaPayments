# Coda Payments
This is a round robin implementation of load balancer which forwards the requests to application servers. For the sake of this demo/implementation, only the port numbers will vary

## High Level Flow

- Client sends an HTTP POST request to the load balancer
- The load balancer forwards the request to one of the application servers
- The application server responds with the same data as that in the request it received
- The load balancer forwards the message back to the client
