import z from "zod";
export const trackerValidationSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    amount: z.string().min(1, 'Amount must be greater than 0.'),
    Category: z.string().optional(),
    status: z.enum(['expensive', 'income']).optional(),
    // dueDate : z.string().optional()
})