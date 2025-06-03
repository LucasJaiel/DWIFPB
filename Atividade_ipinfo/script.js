document.addEventListener('DOMContentLoaded', () => {
    const ipInput = document.getElementById('ipInput');
    const searchButton = document.getElementById('searchButton');
    const ipTableBody = document.querySelector('#ipTable tbody');
    const apiToken = 'f0bbed65cc3e03'; // <-- SUBSTITUA PELO SEU TOKEN

    // Função para buscar informações do IP
    async function fetchIpInfo(ipAddress = '') {
        if (!apiToken || apiToken === 'SEU_TOKEN_AQUI') {
            alert('Por favor, configure seu token da API no arquivo script.js.');
            return;
        }

        const url = `https://ipinfo.io/${ipAddress}/json?token=${apiToken}`;
		
        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error ? errorData.error.message : `Erro HTTP: ${response.status}`);
            }
            const data = await response.json();
            addIpToTable(data);
        } catch (error) {
            console.error('Erro ao buscar informações do IP:', error);
            alert(`Não foi possível obter informações do IP. ${error.message}`);
        }
    }

    // Função para adicionar IP na tabela
    function addIpToTable(data) {
        const newRow = ipTableBody.insertRow();

        const cellIp = newRow.insertCell();
        cellIp.textContent = data.ip || 'N/A';

        const cellOrg = newRow.insertCell();
        cellOrg.textContent = data.org || 'N/A';

        const cellCountry = newRow.insertCell();
        cellCountry.textContent = data.country || 'N/A';

        const cellCity = newRow.insertCell();
        cellCity.textContent = data.city || 'N/A';

        const cellClear = newRow.insertCell();
        const clearButton = document.createElement('button');
        clearButton.textContent = '✖';
        clearButton.className = 'clear-btn';
        clearButton.onclick = function() {
            ipTableBody.removeChild(newRow);
        };
        cellClear.appendChild(clearButton);
    }

    // Event listener para o botão de pesquisa
    searchButton.addEventListener('click', () => {
        const ipToSearch = ipInput.value.trim();
        fetchIpInfo(ipToSearch);
        ipInput.value = ''; // Limpa o campo de input após a pesquisa
    });

    // Opcional: Buscar o IP do próprio usuário ao carregar a página
    // fetchIpInfo(); // Descomente esta linha se desejar essa funcionalidade

    // Adiciona a funcionalidade de exemplo como na imagem (8.8.8.8)
    // Você pode remover ou modificar isso conforme necessário.
    addIpToTable({
        ip: "8.8.8.8",
        org: "Google LLC",
        country: "US",
        city: "Mountain View"
    });
});