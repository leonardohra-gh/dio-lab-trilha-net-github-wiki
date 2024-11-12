import ItemContainer from "./styles";


function ItemRepo({repo}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
        <a href="#" className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;