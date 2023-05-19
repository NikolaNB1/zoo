const AnimalList = () => {
  const animals = [
    {
      someth: "cat",
      name: "macka",
      dateOfBirth: new Date().toDateString(),
    },
    {
      someth: "dog",
      name: "pas",
      dateOfBirth: new Date().toDateString(),
    },
    {
      someth: "elephant",
      name: "slon",
      dateOfBirth: new Date().toDateString(),
    },
    {
      someth: "tiger",
      name: "tigar",
      dateOfBirth: new Date().toDateString(),
    },
    {
      someth: "lion",
      name: "lav",
      dateOfBirth: new Date().toDateString(),
    },
  ];
  return (
    <div>
      {animals.map((el) => (
        <div
          key={el}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid red",
          }}
        >
          <div>someth: {el.someth} </div>
          <div>name: {el.name} </div>
          <div>date: {el.dateOfBirth} </div>
        </div>
      ))}
    </div>
  );
};
export default AnimalList;
