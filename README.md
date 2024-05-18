# Next.js + Prisma CRUD

## Description

This is a classic to-do app. The user will be able to create, read, update and delete tasks in a minimalist but elegant interface.

### Stack

- HTML
- TailwindCSS
- JavaScript
- Next.js
- Prisma
- PostreSQL
- Vercel

## Setup

First of all you must clone the repository:

```sh
git clone https://github.com/jezbravo/nextjs-prisma-crud.git
cd nextjs-prisma-crud
```

Then install the dependencies:

```node
npm install
```

### Environment Variables

In order for the program to work correctly, it is necessary to configure the following environment variables in an **.env** file at the root of the project:

```javascript
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
```

Both keys are obtained in the storage configuration provided by Vercel.

Once everything is ready:

```javascript
npm run dev
```

## Demo

The interface tries to be as intuitive and friendly as possible. The page displays a grid with created tasks. Each task can be selected to be updated or deleted. There is also a navigation bar that makes it possible to go to the home page, create a new task, or view the typical "about us" information.

You can test a deployed version at the following link: https://nextjs-prisma-crud-smoky.vercel.app
