export default function Header({ image }) {
  return (
    <>
      <div id="header">
        <img src={image}></img>
        <h1>React Investment Calculator</h1>
      </div>
    </>
  );
}
