/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - rating
 *         - desc
 *       properties:
 *         title:
 *           type: string
 *           description: The title of the book
 *         author:
 *           type: string
 *           description: The author of the book
 *         rating:
 *           type: string
 *           description: Your rating of the book 1-5
 *         desc:
 *           type: string
 *           description: Brief description of the book (no spoilers >:( )
 *       example:
 *         title: To Kill a Mockingbird
 *         author: Harper Lee
 *         rating: "4"
 *         desc: A young girl's coming-of-age story and a darker drama about the roots and consequences of racism and prejudice.
 */

 /**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /addBook:
 *   post:
 *     summary: Creates a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 * /books:
 *   get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
