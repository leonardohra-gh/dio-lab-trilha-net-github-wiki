import ItemContainer from "./styles";


function ItemRepo({repo, handleRemoveRepo}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
        <a href="#" onClick={() => handleRemoveRepo(repo.id)} className="remover">Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;