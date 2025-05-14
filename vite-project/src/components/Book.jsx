import "./style.css";

function Book(props){
    return (
        <div className="book-card">
            <img src={props.bookDetails.coverImage} alt="Book Image" className="book-cover" width="200px" height="300px"></img>
            <div className="book-details">
                <h2 className="book-title">{props.bookDetails.title}</h2>
                <p className="book-author">{props.bookDetails.author}</p>
                <p className="book-desc">{props.bookDetails.description}</p>
                <p className="book-page">Pages: {props.bookDetails.pages}</p>

            </div>
        </div>
    )
}

export default Book;