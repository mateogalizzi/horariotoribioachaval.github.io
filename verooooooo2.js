function generarHorarioMensual() {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']; // Solo lunes a viernes
    const turnos = ['Oficina Mañana', 'Oficina Tarde', 'Local Mañana', 'Local Tarde'];

    const horario = document.getElementById('horario');
    horario.innerHTML = '';

    const totalDias = 20; // 4 semanas de 5 días cada una

    for (let i = 0; i < totalDias; i++) {
        const dia = diasSemana[i % diasSemana.length]; // Cicla Lunes a Viernes
        const vendedores = generarVendedoresAleatorios();
        const tabla = document.createElement('table');
        tabla.innerHTML = `<caption>${dia} (Semana ${Math.floor(i / diasSemana.length) + 1})</caption>
                           <tr>
                               <th>Turno</th>
                               <th>Vendedor 1</th>
                               <th>Vendedor 2</th>
                           </tr>`;
        
        for (let turno of turnos) {
            const fila = document.createElement('tr');
            fila.innerHTML = `<td>${turno}</td>
                              <td>${vendedores.pop()}</td>
                              <td>${vendedores.pop()}</td>`;
            tabla.appendChild(fila);
        }

        horario.appendChild(tabla);
    }
}

function generarVendedoresAleatorios() {
    const vendedores = ['Vendedor 1', 'Vendedor 2', 'Vendedor 3', 'Vendedor 4',
                        'Vendedor 5', 'Vendedor 6', 'Vendedor 7', 'Vendedor 8',
                        'Vendedor 9', 'Vendedor 10', 'Vendedor 11', 'Vendedor 12'];

    // Shuffle array
    for (let i = vendedores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [vendedores[i], vendedores[j]] = [vendedores[j], vendedores[i]];
    }

    return vendedores;
}

// Generar horario mensual al cargar la página
generarHorarioMensual();
