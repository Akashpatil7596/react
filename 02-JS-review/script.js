const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: ["fantasy", "high-fantasy", "adventure", "fiction", "novels", "literature"],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: ["science fiction", "humor", "speculative fiction", "short stories", "fantasy"],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}

const book = getBook(2);

const { title, author, name = "jonas", genres, publicationDate, hasMovieAdaptation } = book;

// console.log(title, "&", author, "&", name, "&", publicationDate);

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, "&", secondaryGenre, "&", otherGenres);

const arr = [...genres, "Sitcom"];

// console.log(arr);

const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate));

// console.log(true && "Some String");
// console.log(false && "Some String");

// console.log(hasMovieAdaptation && "This book is a movie");

// console.log("" && "Good?");
// console.log("str" && "Truthy");

// console.log(true || "Some String");
// console.log(false || "Some String");

// console.log(book.translations.spanish);

const spanishTrnslation = book.translations.spanish || "Not Translated";

// console.log(spanishTrnslation);

const countOne = 0 ?? "No Data";

const countTwo = undefined ?? "No Data";

// console.log(countOne, countTwo);

const books = getBooks();

const x = [1, 2, 3, 4, 5]?.map((el) => el * 2);

// console.log(x);

const titles = books?.map((book) => book.title);

// console.log(titles);

const essentialData = books?.map((book) => ({
    title: book?.title,
    author: book?.author,
}));

// console.log(essentialData);

const longBooks = books
    ?.filter((book) => book.pages > 500)
    ?.map((book) => ({
        title: book.title,
    }))
    ?.filter((book) => book?.title?.startsWith("D"))
    ?.find((book) => book);

// console.log(longBooks);

const pagesAllBooks = books.reduce((acc, book) => {
    return acc + book?.pages;
}, 0);

// console.log(pagesAllBooks);

const sorted = books.toSorted((a, b) => b.pages - a.pages)?.map((book) => book.title);

// console.log(sorted);

// 1) add a book object to array

const newBook = {
    id: 6,
    title: "Daredevils",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 135,
    translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
    },
    reviews: {
        goodreads: {
            rating: 4.44,
            ratingsCount: 2295233,
            reviewsCount: 59058,
        },
        librarything: {
            rating: 4.36,
            ratingsCount: 38358,
            reviewsCount: 1095,
        },
    },
};

const booksAfterAdding = [...books, newBook];

// console.log(booksAfterAdding);

// 2) delete a book object to array

const booksAfterDelete = booksAfterAdding?.filter((book) => book.id !== 3);

// console.log(booksAfterDelete);

// 3) update a book object to array

// const booksAfterUpdate = booksAfterDelete?.map((book) => {
//     if (book.id === 1) {
//         const { title, ...restOfBody } = book;
//         return {
//             title: "Bunny",
//             ...restOfBody,
//         };
//     } else {
//         return book;
//     }
// });

const booksAfterUpdate = booksAfterDelete?.map((book) => (books.id === 1 ? { ...book, pages: 1 } : book));

// console.log(booksAfterUpdate);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// console.log("Jonas");

async function getToDos() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const res = await data.json();
    console.log(res);
}

const todos = getToDos();

console.log(todos);

console.log("Jonas");
