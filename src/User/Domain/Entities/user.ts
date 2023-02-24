export default interface User {
    id: string;
    name: string;
    lastname: string;
    username: string;
    subscription: "Individual" | "Duo" | "Family" | "Student";
    email: string;
    password: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}