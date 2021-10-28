# WealthForge Technical Challenge

## Background

The WealthForge technical challenge is your opportunity to show your creativity and familiarity with various technologies. This challenge should be completed in a few hours or less.

## System Requirements

- [GIT](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

## Getting Started

1. Clone this [Git Repository](https://github.com/Wealthforge-Technologies/technical-challenge)
2. Generate dummy data using the following command:

```sh
yarn generate-data
```

## Requirements

Using the data generated in the *data.json* file, following the [Getting Started](#getting-started) steps above, develop a simple application with the following requirements:

- Use any technologies you choose
- Data is displayed in a table view
- Nested data can be expanded/collapsed
- Data table allows for pagination
- Final solution can be downloaded and run locally

## Submitting

When complete, push your completed solution to a public Git repository (Github, Gitlab, etc.). Notify your hiring manager to begin next steps.

## Data Structure

```js
[
    {
        order_id: uuid,
        customer_id: uuid,
        customer_first_name: string,
        customer_last_name: string,
        customer_address: {
            street: string,
            city: string,
            state: string,
            zip: number
        },
        order_amount: number,
        order_date: timestamp,
        order_items: [{
            id: uuid,
            name: string,
            description: string,
            price: currency,
            quantity: number
        }],
    }
]
```