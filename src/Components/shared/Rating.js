const Rating = ( {starCount} ) => {
    const maxStars = 5;
    const filledStars = Array(starCount).fill(0).map(
        (value, idx) => <span className="fa fa-star checked" key={idx}></span>
    );
    const emptyStars = Array(maxStars - starCount).fill(0).map(
        (value, idx) => <span className="fa fa-star" key={idx}></span>
    );

    return (
        <div className="rating">
            <div>Name</div>
            <div>
                {filledStars}
                {emptyStars}
                <span className="star-count">
                    {starCount}/{maxStars}
                </span>
            </div> 
            <div>
                Comments Here. I have some big concerns.
            </div>
        </div>
    );
}

export default Rating;