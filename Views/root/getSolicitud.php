
<section id="main-content">
    <section class="wrapper">

        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-tabs">
                    <li class="active"><a data-toggle="tab" href="#pendientes">Pendientes</a></li>
                    <li><a data-toggle="tab" href="#listaSol">Lista de solicitudes</a></li>
                </ul>

                <div class="tab-content">
                    <div id="pendientes" class="tab-pane fade in active">
                        <h3>PENDIENTES</h3>
                        <div class="row">
                            <div class="col-lg-12">
                                <section class="panel" id="secTablaPendientes">
                                </section>
                            </div>
                        </div>
                    </div>
                    <div id="listaSol" class="tab-pane fade">
                        <h3>LISTA DE SOLICITUDES</h3>
                        <div class="row">
                            <div class="col-lg-12">
                                <section class="panel" id="secTablaSolicitudes">
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</section>

<div id="detallePend" class="modal fade" role="dialog">
    <div style="width:70%;"  class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" style="padding:35px 170px;">
                <h4 style="text-align:center;" class="modal-title">Detalles de Solicitud</h4>
            </div>
            <div class="modal-body">
                <form class="form-validate form-horizontal">
                    <div class="form-group">
                        <label for="cemail" class="control-label col-lg-1">Descripción <span class="required"></span></label>
                        <div class="col-lg-4" id="idDiv">
                            <textarea style="resize:none;" rows="5" class="form-control" id="descripcion-pend" disabled ></textarea>
                            <input id="idSolicitud" hidden>;
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-lg-12">
                            <section class="panel" id="secPenDetalle">
                            </section>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" onclick=aceptarSolicitud()>Aceptar Solicitud</button>
                <button type="button" class="btn btn-danger" id="denSoli" onclick=denegarSolicitud()>Rechazar</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>
            </div>
        </div>

    </div>
</div>

<div id="detalleSol" class="modal fade" role="dialog">
    <div style="width:70%;"  class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" style="padding:35px 170px;">
                <h4 style="text-align:center;" class="modal-title">Detalles de Solicitud</h4>
            </div>
            <div class="modal-body">
                <form class="form-validate form-horizontal">
                    <div class="form-group">
                        <label for="cemail" class="control-label col-lg-1">Descripción <span class="required"></span></label>
                        <div class="col-lg-4">
                            <textarea style="resize:none;" rows="5" class="form-control" id="descripcion-sol" disabled ></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-lg-12">
                            <section class="panel" id="secSolicitudes">
                            </section>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Volver</button>
            </div>
        </div>

    </div>
</div>
