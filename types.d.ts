type WishItem = {
    _id: string;
    name: string;
    notes: string;
    rating: number
}

type User =  {
    username: string,
    email: string,
    password: string,
    id: string
}

type SessionUser = {
    user: {
        id: string,
        email: string,
        username: string
    }
}