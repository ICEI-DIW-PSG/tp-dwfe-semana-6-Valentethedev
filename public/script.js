fetch('marcas.json')
.then(response => response.json())
.then(data => {
    const listaMarcas = document.getElementById('lista-marcas');
    data.marcas.forEach(marca => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = marca;
        listaMarcas.appendChild(li);
        li.innerHTML = `<a href="${marca.toLowerCase()}.html">${marca}</a>`;

    listaMarcas.appendChild(li);
    });
   })
fetch('modelosford.json')
.then(response => response.json())
.then(data => {
    const listaModelosFord = document.getElementById('lista-modelos_ford');
    data.modelos_ford.forEach(modelo => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = modelo;
        listaModelosFord.appendChild(li);
         li.innerHTML = `<a href="${modelo.toLowerCase()}.html">${modelo}</a>`;
    });
   })
   fetch('modeloschevrolet.json')
.then(response => response.json())
.then(data => {
    const listaModelosChevrolet = document.getElementById('lista-modelos_chevrolet');
    data.modelos_chevrolet.forEach(modelo => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = modelo;
        listaModelosChevrolet.appendChild(li);
        li.innerHTML = `<a href="${modelo.toLowerCase()}.html">${modelo}</a>`;
    });
   })
fetch('modelos_toyota.json')
.then(response => response.json())
.then(data => {
    const listaModelosToyota = document.getElementById('lista-modelos_toyota');
    data.modelos_toyota.forEach(modelo => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = modelo;
        listaModelosToyota.appendChild(li);
         li.innerHTML = `<a href="${modelo.toLowerCase()}.html">${modelo}</a>`;
    });
   })
fetch('modeloshonda.json')
.then(response => response.json())
.then(data => {
    const listaModelosHonda = document.getElementById('lista-modelos_honda');
    data.modelos_honda.forEach(modelo => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = modelo;
        listaModelosHonda.appendChild(li);
        li.innerHTML = `<a href="${modelo.toLowerCase()}.html">${modelo}</a>`;
    });
   })
   fetch('modelosnissan.json')
.then(response => response.json())
.then(data => {
    const listaModelosNissan = document.getElementById('lista-modelos_nissan');
    data.modelos_nissan.forEach(modelo => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = modelo;
        listaModelosNissan.appendChild(li);
         li.innerHTML = `<a href="${modelo.toLowerCase()}.html">${modelo}</a>`;
    });
   })