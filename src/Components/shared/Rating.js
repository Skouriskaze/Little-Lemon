const Rating = ({ name, starCount, comments }) => {
    const maxStars = 5;
    const filledStars = Array(starCount).fill(0).map(
        (value, idx) => <span className="fa fa-star checked" key={idx}></span>
    );
    const emptyStars = Array(maxStars - starCount).fill(0).map(
        (value, idx) => <span className="fa fa-star" key={idx}></span>
    );

    return (
        <div className="rating">
            <div>{name}</div>
            <div aria-label={`${starCount} stars of ${maxStars}`}>
                {filledStars}
                {emptyStars}
                <span className="star-count">
                    {starCount}/{maxStars}
                </span>
            </div> 
            <div>
                {comments}
            </div>
        </div>
    );
}

export default Rating;