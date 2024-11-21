async function buscarEndereco() {
    const cep = document.getElementById("cep").value.trim();
    if (!cep) {
      alert("Digite o CPF novamente");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/endereco/${cep}`
      );
      if (!response.ok) {
        throw new Error("CEP NÃO ENCONTRADO");
      }
      const data = await response.json();
      console.log(data);

      document.getElementById("logradouro").textContent = data.logradouro || "N/A";
      document.getElementById("bairro").textContent = data.bairro || "N/A";
      document.getElementById("localidade").textContent = data.localidade || "N/A";
      document.getElementById("uf").textContent = data.uf || "N/A";
      document.getElementById("regiao").textContent = data.regiao || "N/A";
      document.getElementById("enderecoInfo").style.display = "block";
      document.getElementById("erroMensagem").style.display = "none";
    } catch (error) {
      document.getElementById("erroMensagem").textContent = error.message;
      document.getElementById("enderecoInfo").style.display = "none";
      document.getElementById("erroMensagem").style.display = "block";
    }
  }