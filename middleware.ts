export { default } from "next-auth/middleware";

export const config = {
    matcher: ['/experiences/auth', '/experiences/auth/add-item', '/experiences/auth/edit-item', '/experiences/auth/group']
}