function Character({ name, skinColor, birthYear, eyeColour, hairColour, gender }: any) {

  return (
    <div>
      <h4>{name}</h4>
      <p>Born: {birthYear}</p>
      <p>Eye Colour: {eyeColour}</p>
      <p>Hair Colour: {hairColour}</p>
      <p>Gender: {gender}</p>
    </div>
  )
}

export default Character