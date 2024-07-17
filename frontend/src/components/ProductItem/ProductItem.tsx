import * as Dialog from '@radix-ui/react-dialog'
import { Product } from "../../models/ProductModel";
import { Pencil, X } from "@phosphor-icons/react";
import { useState } from 'react';
import { Update } from '../../api/put/Update';
import SplashMessage from '../SplashMessages/SplashMessage';
import { Delete } from '../../api/delete/Delete';

function ProductItem(props: Product) {
    const initialFormValues = { ...props }
    const [formValues, setFormValues] = useState(initialFormValues)

    console.log(formValues);

    const [splashSuccess, setSplashSuccess] = useState<boolean>(false)
    const [splashError, setSplashError] = useState<boolean>(false)
    const [splashDeleted, setSplashDeleted] = useState<boolean>(false)
    const onFormInputChange = (key: string, value: string) => { setFormValues({ ...formValues, [key]: value.toLocaleLowerCase() }); }
    const onFormSubmit = () => {
        console.log('Form Values: ', formValues);
        const updateProduct = async () => {
            try {
                const response = await Update(props.id, formValues)
                if (response?.status === 200) { console.log('Criado: ', response.data); setSplashSuccess(true); }
                setSplashError(true)
            } catch (error) {
                console.log('An error occurred', error);
                setSplashError(true)
            }
        }
        updateProduct()
    }
    const deleteProduct = async () => {
        try {
            const response = await Delete(props.id)
            if (response?.status === 200) { console.log('Criado: ', response.data); setSplashDeleted(true); }
            setSplashDeleted(true)
        } catch (error) {
            console.log('An error occurred', error);
            setSplashError(true)
        }
    }
    return (
        <>
            {splashSuccess && <SplashMessage title="" description="Dados atualizados com sucesso" type={'success'} /> ||
                splashError && <SplashMessage title="" description="Erro ao atualizados dados" type={'error'} /> ||
                splashDeleted && <SplashMessage title="REMOVIDO!" description="Produto removido com sucesso" type={'success'} />}
            <tr>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>{props.price}</td>
                <td className="flex flex-row flex-nowrap">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button className="bg-green-400 p-2 my-0.5 rounded-md hover:bg-green-600">
                                <Pencil size={24} color="white" />
                            </button>
                        </Dialog.Trigger>
                        <Dialog.Overlay className="bg-white/5 w-screen h-screen fixed inset-0 backdrop-blur-sm" />
                        <Dialog.Content>
                            <div className="absolute top-0 left-0 flex flex-col text-2xl justify-center items-center w-full h-screen">
                                <form onSubmit={(e) => { e.preventDefault(); onFormSubmit() }} className="relative flex flex-col gap-5 justify-center items-center p-8 bg-slate-400">
                                    <Dialog.Close asChild className="absolute top-1 right-1">
                                        <X size={32} color="red" className="hover:cursor-pointer"></X>
                                    </Dialog.Close>
                                    <Dialog.Title className="font-bold">NOVO PRODUTO</Dialog.Title>
                                    <div className="flex flex-col gap-3">
                                        <fieldset>
                                            <label htmlFor="name"></label>
                                            <input value={formValues.name} onChange={(event) => { onFormInputChange('name', event.target.value) }} placeholder="Nome do Produto" required autoFocus type="text" name="name" id="name" className="w-full rounded-sm" />
                                        </fieldset>
                                        <fieldset>
                                            <label htmlFor="price"></label>
                                            <input value={formValues.price} onChange={(event) => { onFormInputChange('price', event.target.value) }} placeholder="Preço do Produto" required type="text" name="price" id="price" className="w-full rounded-sm" />
                                        </fieldset>
                                        <fieldset>
                                            <label htmlFor="description"></label>
                                            <textarea value={formValues.description} onChange={(event) => { onFormInputChange('description', event.target.value) }} placeholder="Descrição" required rows={4} name="description" id="description" className="w-full rounded-md" />
                                        </fieldset>
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-green-400 p-2 font-bold rounded-md hover:bg-green-600">ATUALIZAR</button>
                                        <Dialog.Close asChild>
                                            <button onClick={deleteProduct} type="button" className="bg-red-400 p-2 font-bold rounded-md hover:bg-red-600">REMOVER</button>
                                        </Dialog.Close>
                                    </div>
                                </form>
                            </div>
                        </Dialog.Content>
                    </Dialog.Root>
                </td>
            </tr>
        </>
    );
}

export default ProductItem;