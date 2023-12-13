import { Rating, RatingProps, styled } from "@mui/material";

const BishlistRating = (props: RatingProps) => {
  const BishlistRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: props.readOnly ? "#9FA8DA" : "#FF9529",
    },
    "& .MuiRating-iconEmpty": {
      color: props.readOnly ? "lightgrey" : "white",
      fill: "white",
    },
    "& .MuiRating-iconHover": {
      color: "#9FA8DA",
    },
  });
  return <BishlistRating {...props} />;
};

export default BishlistRating;
