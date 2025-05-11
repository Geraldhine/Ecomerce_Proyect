

const items = [
  "https://rab-import-assets.s3.amazonaws.com/rabImport/servicios/s1.jpg",
  "https://rab-import-assets.s3.amazonaws.com/rabImport/servicios/s2.jpg",
  "https://rab-import-assets.s3.amazonaws.com/rabImport/servicios/s3.jpg",
  "https://rab-import-assets.s3.amazonaws.com/rabImport/servicios/s4.jpg",
]

export default function AlianzaEmpresasItem() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center md:gap-4 h-[150px] gap-3 overflow-hidden ">
      {items.map((item, index) => (
        <div key={index} className=" flex overflow-hidden ">
          <img
            src={item}
            alt="Alianza Empresas"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
