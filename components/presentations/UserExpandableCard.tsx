import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { getServerSession } from "next-auth";
import { MdExpandMore } from "react-icons/md";

type UserExpandableCardProps = {
  username: string;
  wants: {
    _id: string;
    name: string;
    notes: string;
    userId: string;
  }[];
};

export const UserExpandableCard = async ({
  username,
  wants,
}: UserExpandableCardProps) => {
  return (
    <article className="m-2">
      <Accordion sx={{ borderRadius: "1em !important" }}>
        <AccordionSummary expandIcon={<MdExpandMore />}>
          <Typography>{`${username}(${wants.length})`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List className="justify-self-start">
            {wants.map((want) => (
              <>
                <ListItem key={want._id} className="flex flex-col items-start">
                  <h2 className="font-extrabold">{want.name}</h2>
                  <p className="ml-2">{want.notes}</p>
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
