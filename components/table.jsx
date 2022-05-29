export const Table = () => {
    return <div className=" space-y-3">

        <section className="relative bg-white">
            <div className="w-full mb-12">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
bg-primaryColor text-white">
                    <div className="rounded-t border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                                <h3 className="font-semibold text-lg text-white">Card Tables</h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto ">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                <th className="px-6 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-black ">S.No</th>

                                    <th className="px-6 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-black ">Name</th>
                                    <th className="px-6 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-black ">Price</th>
                                    <th className="px-6 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-black ">Tot ORder</th>
                                    <th className="px-6 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-black ">Tot Sale</th>
                                    <th className="px-6 align-middle  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left  text-black "></th>
                                </tr>
                            </thead>

                            <tbody>

                                {[1, 2, 3, 4,1,3,1,3, 5].map((el, key) => (
                                    <tr key={key}>
                                        <td className="text-black text-center">{key}</td>
                                        <th className="border-t-0 px-6 text-black align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                            <img src="https://demos.creative-tim.com/notus-js/assets/img/angular.jpg" className="h-12 w-12 bg-white rounded border" alt="..." />
                                            <span className="ml-3  font-bold text-blue-500">Angular Now </span></th>
                                        <td className="border-t-0  text-black px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">10$</td>
                                        <td className="border-t-0 px-6 text-black align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">2349 Items</td>


                                        <td className="border-t-0  px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="text-green-500 text-center p-2 rounded">23242$</div>

                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </section>
    </div>
}