# TypeScript Lab 1

## Initial Setup
Follow the steps in the slides to set up a TypeScript project and to add tests with Jest.
But note that you should *skip the folling steps* that are already done for this project.

- `npm init --yes` (Already done.)
- package.json scripts (Already added.)
- creating the `.ts` files. (See `src` and `test` folders.)

## Running
This project already has tests. Run them with `npm run test:dev`.

You can run your files with `npm run start:dev`. Or you can run your files individually, e.g. `npx nodemon src/mountains.ts`.

## Pro Tip!
Perhaps you will want to skip the product and inventory tests while you are working on your montains file because the products tests will obviously fail before you've even started working on that file.

There are a few options for skipping these tests.

1. Change `describe("...")` to `describe.skip("...")`. This is a jest feature that allows a test suite to be skipped. Just remember to put it back when you get to that part of the project!
2. The above will still show a compile error with imports expected from products.ts and inventory.ts. To completely skip these files, an unofficial workaround is to change the filename from `inventory.test.ts` to `inventory.skip.ts`. This works because Jest is looking for files that end in `.test.js`. If the file has a different ending, Jest won't run it.