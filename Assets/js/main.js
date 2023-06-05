let btnAdd = document.querySelector("#btn-add");
let listProductos = document.querySelector("#list-productos");

let plantilla=`<div class="row data_producto">
<div class="form-group cod">
    <label>Código</label>
    <input type="number">
</div>
<div class="form-group prod">
    <label>Producto</label>
    <input type="text">
</div>
<div class="form-group cant">
    <label>Cantidad</label>
    <input type="number">
</div>
<div class="form-group valor_uni">
    <label>Valor Unitario</label>
    <input type="number">
</div>
</div>`;

btnAdd.addEventListener("click",()=>{
    listProductos.insertAdjacentHTML("beforeend", plantilla)    
})