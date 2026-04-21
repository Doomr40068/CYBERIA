import { Dialog, DialogContent, DialogTrigger } from '@/shared/ui';
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
                animate-in 
                bg-transparent 
                p-0 
                w-auto
                h-auto 
                !max-w-full 
                lg:max-w-2xl
                fade-in zoom-in-95 duration-300
            "
            >
                <Form />
            </DialogContent>
        </Dialog>
    );
}
