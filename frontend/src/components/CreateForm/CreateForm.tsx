import { PlusCircle, X } from "@phosphor-icons/react";
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from "react";

function CreateForm() {
    const [formValues, setFormValues] = useState({ name: '', price: '', description: '' })
    const onFormInputChange = (key: string, value: string) => { setFormValues({ ...formValues, [key]: value }); }
    const onFormSubmit = () => {
        console.log('Form Values: ', formValues);
    }
    return (
        <>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <section className="flex flex-row gap-1 bg-green-400 p-2 rounded-md hover:bg-green-600 hover:cursor-pointer">
                        <button className="font-bold text-white">NOVO</button>
                        <PlusCircle size={24} color="white" />
                    </section>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-white/5 w-screen h-screen fixed inset-0 backdrop-blur-sm" />
                    <Dialog.Content className="">
                        <Dialog.Description> Crie e adicione novos produtos à sua lista </Dialog.Description>
                        <div className="absolute top-0 left-0 flex flex-col text-2xl justify-center items-center w-full h-screen">
                            <form onSubmit={(e) => { e.preventDefault(); onFormSubmit() }} className="relative flex flex-col gap-5 justify-center items-center p-8 bg-slate-400">
                                <Dialog.Close asChild className="absolute top-1 right-1">
                                    <X size={32} color="red" className="hover:cursor-pointer"></X>
                                </Dialog.Close>
                                <Dialog.Title className="font-bold">NOVO PRODUTO</Dialog.Title>
                                <div className="flex flex-col gap-3">
                                    <fieldset>
                                        <label htmlFor="name"></label>
                                        <input onChange={(event) => { onFormInputChange('name', event.target.value) }} placeholder="Nome do Produto" required autoFocus type="text" name="name" id="name" className="w-full rounded-sm" />
                                    </fieldset>
                                    <fieldset>
                                        <label htmlFor="price"></label>
                                        <input onChange={(event) => { onFormInputChange('price', event.target.value) }} placeholder="Preço do Produto" required type="text" name="price" id="price" className="w-full rounded-sm" />
                                    </fieldset>
                                    <fieldset>
                                        <label htmlFor="description"></label>
                                        <textarea onChange={(event) => { onFormInputChange('description', event.target.value) }} placeholder="Descrição" required rows={4} name="description" id="description" className="w-full rounded-md" />
                                    </fieldset>
                                </div>
                                <button type="submit" className="bg-green-400 p-2 font-bold rounded-md hover:bg-green-600">ADICIONAR</button>
                            </form>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}

export default CreateForm;