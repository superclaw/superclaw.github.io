const getDate = () => {
  const date = new Date();
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth()}`.slice(-2);
  const year = date.getFullYear();
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export default getDate;