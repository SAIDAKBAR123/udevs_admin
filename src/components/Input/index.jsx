import "./index.scss";
export default function App(props) {
  const { className, icon = "", ...rest } = props;
  return (
    <div className={`${className} w-full`}>
      <div
        className={`border bg-white flex space-x-2 items-center rounded-lg text-body px-2 border-gray-200 p-1 w-full font-smaller focus:ring focus:outline-none
                transition focus:border-blue-300`}
      >
        <div>{icon}</div>
        <input className="w-full" type="text" {...rest}></input>
      </div>
    </div>
  );
}
