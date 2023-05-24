const SeeSector = ({ sectors, index }) => {
  let sector = sectors[index];

  return (
    <div className="seeSector">
      <div>
        Ime sektora: <h2>{sector}</h2>
      </div>
    </div>
  );
};

export default SeeSector;
