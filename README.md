# Expenses Manager Project

This project is built with Deno, TypeScript, and Supabase. It includes a set of serverless functions to interact with a Supabase backend.

## Table of Contents

- [Expenses Manager Project](#expenses-manager-project)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Running the Project](#running-the-project)

## Prerequisites

- [Deno](https://deno.land/#installation) (v1.10.0 or higher)
- [Supabase](https://supabase.io/) account and project

## Setup

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:

    Deno handles dependencies directly from the code imports, so no additional steps are needed for installation.

3. Configure environment variables:

    Create a `.env` file in the root directory and add your Supabase project URL and API key:

    ```sh
    LOCAL_PROJECT=
    LOCAL_CONNECTION_SQL_ULR=
    SQL_HOST=
    SQL_USER=
    SQL_PORT=
    SQL_PASSWORD=
    SQL_DATABASE=
    ```

## Running the Project

To run the function, use the following command:

```sh
deno run --import-map ./supabase/functions/import_map.json --allow-all -./supabase/functions/expensesManager/index.ts
```
or

```sh
supabase functions serve expensesManager
```