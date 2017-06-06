/**
 * Created by Carlos Mario on 2/12/2016.
 */
function cargarTablaPend(){

    $.ajax({
        url: "/dataPendientes",
        type: "GET",
        cache: "false",
        success: function (data) {
            if (data == "") {

            } else {

                var table = '<table class="table table-advance table-hover" id="id-tablePend">'+
                    '<thead>'+
                    '<tr>'+
                    '<th><i class="icon_id"></i> ID</th>'+
                    '<th><i class="icon_calendar"></i> Fecha</th>'+
                    '<th><i class="icon_building"></i> Dependencia</th>'+
                    '<th><i class="icon_tag"></i> Tipo solicitud</th>'+
                    '<th><i class="icon_cogs"></i> Acciones</th>'+
                    '</tr>'+
                    '</thead>'+
                    '<tbody id="tablePend">';


                data = JSON.parse(data);
                $.each(data, function (index, item) {

                    table += '<tr id="row' + item[0] + '">' +
                        '<td>'+ item[0] +'</td>' +
                        '<td>'+ item[3] +'</td>' +
                        '<td>'+ item[1] +'</td>' +
                        '<td>'+ item[2] +'</td>' +
                        '<td>'+ '<div>'+
                        '<a class="btn btn-success" onclick="activateModPend('+item[0]+')"><i class="icon_lock-open"></i></a>'+
                        '</div>' + '</td>' +
                        '</tr>';
                });
                table+= '</tbody>'+
                    '</table>';
                $("#secTablaPendientes").append(table);
            }
            $("#id-tablePend").DataTable({
                "language": {
                    "search": "<span>Filtrar:</span>",
                    "paginate": {'first': 'Primero', 'last': 'Ultimo', 'next': 'Siguiente', 'previous': 'Anterior'},
                    "lengthMenu": "Mostrando  _MENU_  Registros",
                    "zeroRecords": "No hay Informacion disponible",
                    "info": "Mostrando _PAGE_ de _PAGES_",
                    "infoEmpty": "No se encontraron datos",
                    "infoFiltered": "(Filtrado de un total de _MAX_ registros)"
                }
            });
        }
    });

}

function activateModPend(id){
    $("#detalleSol").modal();

    $.ajax({
        url: "/dataDetalleSol",
        type: "POST",
        data:{'id': id},
        cache: "false",
        success: function (data) {
            if (data == "") {

            } else {

                data = JSON.parse(data);

                /*
                $("#idEmp-mod").val(data[0][0]);
                $("#idUser-mod").val(data[0][1]);
                $("#cedulaEmp-mod").val(data[0][2]);
                $("#nombreEmp-mod").val(data[0][3]);
                $("#apellidoEmp-mod").val(data[0][4]);
                $("#emailEmp-mod").val(data[0][5]);
                $("#telefonoEmp-mod").val(data[0][6]);
                $("#usuarioEmp-mod").val(data[0][8]);
                $("#rolEmp-mod").append('<option disabled selected>'+ data[0][11] +'</option>');
                depenMod(data[0][12],data[0][13]);
                */

            }
        }
    });

}

$(function () {
    cargarTablaPend();
});