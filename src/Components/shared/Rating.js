const Rating = ( {starCount} ) => {
    const maxStars = 5;
    const filledStars = Array(starCount).fill(0).map(
        () => <span class="fa fa-star checked"></span>
    );
    const emptyStars = Array(maxStars - starCount).fill(0).map(
        () => <span class="fa fa-star"></span>
    );
    console.log(filledStars);

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