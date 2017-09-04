# Quarl.io API

## What is Quarl.io?

Quarl is a tool for individuals and groups to discover the differences in their understanding of complex ideas.

## Endpoints

### Users

* `POST /users`: Create User
* `PUTS /users`: Update User

### Authentication

* `POST /login`: Login User
* `GET /logout`: Logout User

### Authorization

* `POST /users/:id/:role`: Add Role to User
* `DELETE /users/:id/:role`: Remove Role from User

### Conversation

* `POST /conversation`: Create Conversation
* `GET /conversation/:id`: Get Conversation
* `PUTS /conversation/:id`: Update Conversation
* `PUTS /conversation/:id/end`: End Conversation
* `PUTS /conversation/:id/archive`: Archive Conversation
* `DELETE /conversation/:id`: Soft Delete Conversation

## Philosophical Dev Approach

* Micro-service architecture
  * One function per action
  * No controllers
  * Simple routing layer
    * 1-to-1 route to function
* Separation of business and library logic
  * All libraries are wrapped in a facade abstraction
  * All business logic is written agains the core languages and the facades.
  * business and library logic must never directly interact with each other.
  * unit testing is done against facades so that libraries can be swapped out with testing to know if the new libraries fully implement all features of the facade.

## Mechanical Dev Approach

## Setup

### Prerequisites

### Configuration

### Testing

### Usage
