// Datos de productos y vendedores
const productos = [
    {
        nombre: "Aqua", precio: 200
    },
    {
        nombre: "Emocion", precio: 180
    },
    {
        nombre: "Alegria", precio: 160
    },
    {
        nombre: "Frescura", precio: 150
    },
];

const vendedores = [
    {
        nombre: "Juana", ventas: []
    },
    {
        nombre: "Pedro", ventas: []
    }
];

// Función para registrar una venta
function registrarVenta() {
    let productoSeleccionado = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;

    // Validar que se ingrese un valor numérico
    if (!esNumeroValido(cantidad)) {
        alert("Por favor, ingrese un valor numérico válido.");
        return;
    }

    let vendedor = obtenerVendedorAleatorio();
    let producto = obtenerProductoPorNombre(productoSeleccionado);
    let venta = {
        producto: producto.nombre,
        cantidad: parseInt(cantidad),
        total: producto.precio * parseInt(cantidad)
    };

    vendedor.ventas.push(venta);

    actualizarVentasPorVendedor();
    actualizarEmpleadoDelMes();
}

// Función para verificar si un número es válido
function esNumeroValido(numero) {
    return !isNaN(numero) && numero !== "" && numero !== null;
}

// Función para obtener un vendedor aleatorio
function obtenerVendedorAleatorio() {
    let indice = Math.floor(Math.random() * vendedores.length);
    return vendedores[indice];
}

// Función para obtener un producto por nombre
function obtenerProductoPorNombre(nombre) {
    return productos.find(function (producto) {
        return producto.nombre.toLowerCase() === nombre.toLowerCase();
    });
}

// Función para calcular la suma total de dinero recolectada por un vendedor
function calcularTotalVentas(vendedor) {
    let total = 0;
    vendedor.ventas.forEach(function (venta) {
        total += venta.total;
    });
    return total;
}

// Función para encontrar el vendedor con la mayor cantidad de ventas
function encontrarEmpleadoDelMes() {
    let vendedorDelMes = null;
    let maxVentas = 0;

    vendedores.forEach(function (vendedor) {
        let totalVentas = calcularTotalVentas(vendedor);
        if (totalVentas > maxVentas) {
            vendedorDelMes = vendedor;
            maxVentas = totalVentas;
        } else if (totalVentas === maxVentas) {
            vendedorDelMes = null; // Empate si hay más de un vendedor con la misma cantidad de ventas
        }
    });

    return vendedorDelMes;
}

// Función para actualizar la sección de ventas por vendedor en el HTML
function actualizarVentasPorVendedor() {
    let ventasPorVendedorHTML = "";

    vendedores.forEach(function (vendedor) {
        ventasPorVendedorHTML += "<h3>Vendedor: " + vendedor.nombre + "</h3>";
        ventasPorVendedorHTML += "<ul>";
        vendedor.ventas.forEach(function (venta) {
            ventasPorVendedorHTML += "<li>" + venta.producto + ": " + venta.cantidad + " unidades</li>";
        });
        ventasPorVendedorHTML += "</ul>";
        ventasPorVendedorHTML += "<p>Total: $" + calcularTotalVentas(vendedor) + "</p>";
    });

    document.getElementById("ventasPorVendedor").innerHTML = ventasPorVendedorHTML;
}

// Función para actualizar la sección de empleado del mes en el HTML
function actualizarEmpleadoDelMes() {
    let empleadoDelMes = encontrarEmpleadoDelMes();

    if (empleadoDelMes) {
        document.getElementById("empleadoDelMes").innerHTML = "<p>Empleado del Mes: " + empleadoDelMes.nombre + "</p>";
    } else {
        document.getElementById("empleadoDelMes").innerHTML = "<p>No hay un empleado del mes debido a un empate.</p>";
    }
}

