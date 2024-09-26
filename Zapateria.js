var datos = [
    {
        'folio': 101,
        'descripcion': 'Zapatos deportivos',
        'talla': 24,
        'precio': '$1,200'
    },
    {
        'folio': 102,
        'descripcion': 'Botas de cuero',
        'talla': 27,
        'precio': '$1,500'
    },
    {
        'folio': 103,
        'descripcion': 'Sandalias de playa',
        'talla': 21,
        'precio': '$800'
    },
    {
        'folio': 104,
        'descripcion': 'Zapatos de tacón',
        'talla': 24,
        'precio': '$1300'
    },
    {
        'folio': 105,
        'descripcion': 'Zapatos casuales',
        'talla': 23,
        'precio': '$1,100'
    }
];

var cad = `
   <h1 style="text-align: center; font-family: 'Bell MT'; color: blue;">Zapatería "Zapatos Rojos"</h1>
   <p style="text-align: center; font-family: 'Comic Sans MS'; color: green;">Dirección: Calle Niños Heroes #10, Tequisquiapan</p>
   <p style="text-align: center; font-family: 'Comic Sans MS'; color: brown">Teléfono: (414) 134-4576 | Correo: zapatosrojos@gmail.com</p>

   <table style="border-collapse: collapse; width: 100%; font-family: 'Comic Sans MS'; background-color: lightgreen;">
      <tr>
         <th style="border: 2px solid brown; padding: 8px;">Folio</th>
         <th style="border: 2px solid brown; padding: 8px;">Descripción</th>
         <th style="border: 2px solid brown; padding: 8px;">Talla</th>
         <th style="border: 2px solid brown; padding: 8px;">Precio</th>
      </tr>
`;

datos.forEach(function(data) {
    cad += `
      <tr>
         <td style="border: 2px solid brown; padding: 8px;">${data.folio}</td>
         <td style="border: 2px solid brown; padding: 8px;">${data.descripcion}</td>
         <td style="border: 2px solid brown; padding: 8px;">${data.talla}</td>
         <td style="border: 2px solid brown; padding: 8px;">${data.precio}</td>
      </tr>
    `;
});

cad += `</table>`;

document.getElementById("zapateria").innerHTML = cad;
// JavaScript Document