export default function Gallery({ primary, secondary }) {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
                <img
                    src={primary}
                    className="h-full w-fit object-cover rounded-xl"
                />
            </div>
            <div className="col-span-4  flex flex-col gap-4">
                <img
                    src={secondary[0]}
                    className="h-36 w-36 lg:h-64 lg:w-64 object-cover rounded-xl"
                />
                <img
                    src={secondary[1]}
                    className="h-36 w-36 lg:h-64 lg:w-64 object-cover rounded-xl"
                />
            </div>
        </div>
    );
}
