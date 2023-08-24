import React from 'react'

function RenderingLists() {

    const bookList = [
        "to kill a mockingbird",
        "the great gatsby",
        "the catcher in the rye"
    ]

    const books = [
        {
            title: "to kill a mockingbird",
            author: "harper",
            pages: 281
        },
        {
            title: "the great gatsby",
            author: "f. scott fitygerald",
            pages: 218
        },
        {
            title: "the catcher in the rye",
            author: "j. d. salinger",
            pages: 234
        }
    ]

    return (
        <div>
            {bookList.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr />
            {
                books.map(book => {
                    return <div key={book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                })
            }
        </div>
    )
}

export default RenderingLists