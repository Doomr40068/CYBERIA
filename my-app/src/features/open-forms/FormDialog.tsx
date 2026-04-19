import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui/dialog';
import { Form } from '@/entities/contact/ui/form/Form';

type Props = {
    children: React.ReactNode;
};

export function FormDialog({ children }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent
                className="
                animate-in p-0 bg-transparent flex items-center justify-center 
                !max-w-none !w-screen !h-screen fade-in zoom-in-95 duration-300"
            >
                <Form />
            </DialogContent>
        </Dialog>
    );
}
