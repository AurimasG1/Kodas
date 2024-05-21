import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import useGet from '../../Hooks/useGet';

const sortBy = [
    { sort: 'name_asc', label: 'Name (A-Z)' },
    { sort: 'name_desc', label: 'Name (Z-A)' }
]

export default function Index() {

    const [sort, setSort] = useState('');

    const { data, loading, setUrl } = useGet('/');

    const authorsBooks = data => {
        if (!data) return [];
        const authors = [];
        data.forEach(item => {
            if (!authors.some(author => author.id === item.id)) {
                authors.push({ id: item.id, name: item.name, surname: item.surname, books: [] });
            }
            if (!authors.find(author => author.id === item.id).books.some(book => book.id === item.book_id)) {
                authors.find(author => author.id === item.id).books.push({ id: item.book_id, title: item.title, url: item.bookUrl, rate: item.rate, heroes: [] })
            }
            authors.find(author => author.id === item.id).books.find(book => book.id === item.book_id).heroes.push({ id: item.hero_id, name: item.hero, good: item.good, url: item.heroUrl })
        })
        return authors;
    }

    useEffect(_ => {
        if (sort) {
            setUrl(`/?sort=${sort}`);
        } else {
            setUrl('/')
        }
    }, [sort, setUrl])

    if (loading) return (<div className='loader'><div></div></div>)
    return (
        <>
            <Navbar />
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Home</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card">
                            <div className="card-header">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-3">
                                            <h3>All Library</h3>
                                        </div>
                                        <div className='col-3'>
                                            <div className="mb-3">
                                                <label htmlFor="sort" className="form-label">Sort by name</label>
                                                <select className="form-select" id="sort" value={sort} onChange={e => setSort(e.target.value)}>
                                                    <option value="" >default</option>
                                                    {
                                                        sortBy.map(item => <option key={item.sort} value={item.sort}>{item.label}</option>)
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="container">
                                    <div className='row mb-3'>
                                        <div className='col-4'><h4>Authors</h4></div>
                                        <div className='col-4'><h4>Books</h4></div>
                                        <div className='col-4'><h4>Heroes</h4></div>
                                    </div>
                                    {authorsBooks(data).map(item =>
                                        <div className="row" key={item.id}>
                                            <div className="col-4">
                                                {item.name} {item.surname}
                                            </div>
                                            <div className='col-4'>
                                                <span>
                                                    {
                                                        item.books.map(book => <div style={{ marginBottom: book.heroes.length * 22 + 'px' }} key={book.id}>
                                                            <a className='nice-link' href={'#book/' + book.url}>{book.title}</a>
                                                            <span className='ms-3'>{book.rate ? book.rate + '/5' : 'No rating'}</span></div>)
                                                    }
                                                </span>
                                            </div>
                                            <div className='col-4'>
                                                <span>
                                                    {
                                                        item.books.map(book =>
                                                            <div key={book.id}>
                                                                {
                                                                    book.heroes[0].id !== null
                                                                        ?
                                                                        <div className='mb-20'>
                                                                            {book.heroes.map(hero => <div key={hero.id}>
                                                                                <a className={'hero-link hero-' + hero.good} href={'#hero/' + hero.url}>
                                                                                    {hero.name}</a>
                                                                            </div>)}
                                                                        </div>
                                                                        :
                                                                        <div className='mb-20'>No Heroes</div>
                                                                }
                                                            </div>)
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}