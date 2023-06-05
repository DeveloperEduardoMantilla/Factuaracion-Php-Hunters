let btnAdd = document.querySelector("#btn-add");
let listProductos = document.querySelector("#list-productos");

let plantilla=`
    <div class="row data_producto">
        <div class="form-group cod">
            <label>Código</label>
            <input type="number" name="prod_codigo[]" min="0" value="10">
        </div>
        <div class="form-group prod">
            <label>Producto</label>
            <input type="text" name="prod_nombre[]" value="Manzanas">
        </div>
        <div class="form-group cant">
            <label>Cantidad</label>
            <input type="number" name="prod_cantidad[]" min="0" value="1">
        </div>
        <div class="form-group valor_uni">
            <label>Valor Unitario</label>
            <input type="number" name="prod_valorUn[]" min="0" value="20000">
        </div>
        <button type="button" class="btnEliminar" onclick="eliminarProducto(this)">x</button>
    </div> 
`;

btnAdd.addEventListener("click",()=>{
    listProductos.insertAdjacentHTML("beforeend", plantilla)    
})

function eliminarProducto(btn){
    var productoDiv = btn.parentNode;
    productoDiv.parentNode.removeChild(productoDiv);
}