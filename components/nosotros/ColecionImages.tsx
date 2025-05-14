

export default function ColecionImages() {
  return (
    <div className="flex flex-col mt-4 mb-4 gap-12 items-center justify-center ">
    <h3 className="text-2xl font-bold mt-10 text-center">Líder en máquinas para la confección</h3>

    <div className="flex flex-col gap-8 sm:flex-row justify-center md:flex-row lg:flex-row">
      <div className="flex flex-col gap-4 items-center justify-center">
        <img
          className="w-[400px] h-[auto] sm:w-[200px] sm:h-[auto]"
          src="https://rab-import-assets.s3.amazonaws.com/rabImport/nosotros/2.jpg"
          alt=""
        />
        <img
          className=" w-[400px] sm:w-[200px] sm:h-[auto]"
          src="https://rab-import-assets.s3.amazonaws.com/rabImport/nosotros/5.jpg"
          alt=""
        />
      </div>
      <img
        className="w-[400px] h-[auto] sm:w-[200px] sm:h-[auto]"
        src="https://rab-import-assets.s3.amazonaws.com/rabImport/nosotros/3.jpg"
        alt=""
      />
    </div>
  </div>
  )
}
