import { BooksDataProvider } from './Components/books/BooksData'
import BooksList from './Components/books/BooksList'
import './books.scss'

export default function App() {

	return (
		<BooksDataProvider>
			<section>
				<div className='container'>

					<BooksList></BooksList>

				</div>
			</section>
		</BooksDataProvider>
	)
}