<section id="main-content">
    <section class="wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h3 class="page-header"><i class="ion-document-text"></i> Mis solicitudes</h3>
            </div>
        </div>
        <!-- Form validations -->
        <div class="row">
            <div class="col-lg-12">
                <section class="panel" id="secTableMiSoli">
                </section>
            </div>
        </div>
    </section>
</section>
<div id="detalleMySol" class="modal fade" role="dialog">
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