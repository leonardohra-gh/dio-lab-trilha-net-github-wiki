import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import Button from "../components/Button";
import { api } from "../services/api";

function App() {
  const [searchRepo, setSearchRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${searchRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setSearchRepo("");
      } else {
        alert("Repositório já adicionado!");
      }
      return;
    }

    alert("Repositório não encontrado!");
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Github logo" />
      <Input
        value={searchRepo}
        onChange={(event) => setSearchRepo(event.target.value)}
      />
      <Button onClick={handleSearchRepo} />

      {repos.map((repo, index) => (
        <ItemRepo key={`repo-${index}`} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
