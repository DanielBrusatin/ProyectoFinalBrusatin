# E-Commerce Daniel Brusatin

## Funcionalidad del proyecto:

En el home muestra el listado de productos permitiendo ir al detalle de cada uno.

Con el menú de navegación permite filtrar los productos por categoría.

Al ingresar al detalle de cada item se muestra la descripción y los botones para ingresar la cantidad y agregar al carrito. No se permite ingresar una cantidad mayor al stock disponible, y en caso de no haber stock no se puede agregar el item.

Si se quiere agregar un item que ya esta en el carrito, se arroja un cartel de aviso y no se agrega.

Dentro de la vista de carrito se puede eliminar un item, vaciar todo el carrito y finalizar la compra.

Al clickear en "Finalizar compra" se carga un formulario con validación de datos para generar la orden.

Una vez generada la orden se muestra el ID de la misma y se actualizan los stock de los productos de dicha orden.

El carrito de compras es persistente mediante el uso del local storage.
