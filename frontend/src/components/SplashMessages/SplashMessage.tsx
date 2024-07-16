import { useEffect, useState } from "react";

function SuccessSplashMessage(props: { title: string, description: string, type: 'success' | 'error' }) {
    const [visible, setVisible] = useState<'visible' | 'hidden'>('visible')
    
    let _title = props.title  || 'SUCESSO!'
    let _description = props.description || 'Produto criado com sucesso!'
    const colors = { p_color: 'bg-green-700', s_color: 'bg-green-500' }
    if (props.type === 'error') {
        colors.p_color = 'bg-red-700'
        colors.s_color = 'bg-red-500'
        _title = 'ERRO'
        _description = 'Erro ao criar produto.' 
    }

    useEffect(() => { window.setTimeout(() => { setVisible("hidden") }, 3500) })
    return (
        <aside className={`${visible} absolute top-8 right-2 w-72 h-16 ${colors.s_color} flex flex-col justify-center items-center rounded-md text-white z-50`}>
            <section className={`w-full h-5 ${colors.p_color}  flex-1 text-center font-bold`}>
                <p>{_title}</p>
            </section>
            <section className='flex-1'>{_description }</section>
        </aside>
    );
}

export default SuccessSplashMessage;