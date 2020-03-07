export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        title: "The Captain's Daughter",
        author: 'Alexander Pushkin',
        price: 15,
        coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51y197Q4HTL.jpg',
      },
      {
        id: 2,
        title: 'The Call of the Wild',
        author: 'Jack London',
        price: 13,
        coverImage: 'https://images-eu.ssl-images-amazon.com/images/I/51NOAJhXMRL.jpg',
      },
    ];
  }
}
