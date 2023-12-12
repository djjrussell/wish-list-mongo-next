"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { MdExpandMore } from "react-icons/md";
import { Rating } from "react-simple-star-rating";

type UserExpandableCardProps = {
  username: string;
  wants: {
    _id: string;
    name: string;
    notes: string;
    userId: string;
    rating: number;
  }[];
};

export const UserExpandableCard = ({
  username,
  wants,
}: UserExpandableCardProps) => {
  return (
    <article className="m-2 drop-shadow-xl">
      <Accordion sx={{ borderRadius: "1em !important" }}>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography>{`${username}(${wants.length})`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List className="justify-self-start">
            {wants
              .sort((a, b) => b.rating - a.rating)
              .map((want) => (
                <>
                  <ListItem
                    key={want._id}
                    className="flex flex-col items-start"
                  >
                    <h2 className="font-extrabold">{want.name}</h2>
                    <p className="ml-2">{want.notes}</p>
                    <div>
                      <Rating
                        initialValue={want.rating}
                        readonly
                        fillColor="#9FA8DA"
                      />
                    </div>
                  </ListItem>
                </>
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </article>
  );
};

export default UserExpandableCard;
