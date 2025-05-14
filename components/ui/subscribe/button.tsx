

interface BotonSuscribeteProps {
    BotonSubscribete: string;
   
}

export default function BotonSuscribete({ BotonSubscribete }: BotonSuscribeteProps): React.JSX.Element {
    return (
        <button >
            <a className="bg-blue-300 hover:bg-blue-700 text-black text-sm rounded px-4 py-1 transition-colors duration-200">
                {BotonSubscribete}
            </a>
        </button >
    );
}
