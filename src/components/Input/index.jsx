import "./index.scss";
export default function App(props) {
  const { icon = "", className, style, ...rest } = props;
  return (
    <div
      className={`border bg-white flex space-x-2 items-center rounded-lg text-body border-gray-200 p-1 px-2 w-full font-smaller focus-within:ring focus-within:outline-none
                transition focus-within:border-blue-300 focus-within:z-40 ${className}`}
      style={style}
    >
      <div>{icon}</div>
      <input className="w-full" type="text" {...rest}></input>
    </div>
  );
}
