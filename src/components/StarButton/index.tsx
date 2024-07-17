const StarButton = ({ isFavorite, onClick }) => {
  return (
    <>
      {isFavorite ? (
        <button className="outline" onClick={onClick}>
          Favorite
        </button>
      ) : (
        <button className="outline secondary" onClick={onClick}>
          Add to favorites
        </button>
      )}
    </>
  );
};

export { StarButton };
