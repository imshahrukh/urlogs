export const TextFeild = ({ placeHolder, lable }) => {
  return (
    <div className="mb-6 w-full">
      <label className="text-[#5A7184] text-base mb-1 inline-block">
        {lable}
      </label>
      <input
        type="text"
        className="form-control block text-base  w-full px-4 py-2 text-[#959EAD] bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput2"
        placeholder={placeHolder}
      />
    </div>
  );
};
