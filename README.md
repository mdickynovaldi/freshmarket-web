# FreshMarket Frontend

FreshMarket is a web application designed to make it easier for users to shop for daily necessities online. This project is the frontend part of the FreshMarket application, responsible for the user interface and user interaction.

## Features

- **Shopping Cart**: Users can add products to the shopping cart and view the total price.
- **Checkout**: Easy and secure checkout process.
- **Responsive**: Responsive design for various screen sizes.

## Technologies Used

- **React**: Used to build dynamic user interfaces.
- **Tailwind CSS**: For responsive styling and layout.

## Installation

Clone this repository.

Install dependencies:

```bash
bun install
```

Setup the `.env` file:

```sh
cp .env.example .env
```

Edit `.env`:

```sh
VITE_BACKEND_API_URL=http://localhost:3000
```

Generate types:

```bash
bunx openapi-typescript http://localhost:3000/openapi.json -o ./src/schema.d.ts
```

Run the application:

```bash
bun dev
```

## Contribution

We welcome contributions from anyone. Please create a pull request or open an issue for further discussion.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For further questions, please contact us at [mochdickyn@gmail.com](mailto:mochdickyn@gmail.com).
