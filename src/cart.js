import useFetchData from "./customHook";

export default function Cart() {
  const { value } = useFetchData("https://dummyjson.com/products");
  
  return (
    <>
      <h1>Cart page</h1>
      {value.map((item) => (
        <div key={item.id}>
          <p>Title: {item.title}</p>
          <p>Description: {item.description}</p>
          <p>
            <img src={item.thumbnail} alt={item.thumbnail} />
          </p>
        </div>
      ))}
    </>
  );
}
