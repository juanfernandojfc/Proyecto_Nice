<?php
/**
 * Created by PhpStorm.
 * User: Carlos Mario
 * Date: 19/11/2016
 * Time: 11:05 PM
 */

namespace Controllers;

use Model\Solicitud as solicitud;
use Model\DetalleSolicitud as detalle;
use Model\Suministro as suministro;


    class SolicitudController{

        public function addControl($arg){

            $solicitud = new solicitud();
            $solicitud->setDescripcion($arg['descripcion']);
            $solicitud->setTipoSolicitud($arg['tipo']);
            $solicitud->setIdDepen($_SESSION['user_dependencia']);
            $resp = $solicitud->add();

            if ($resp == 1){
                $detalles = $arg['detalles'];
                foreach ($detalles as $valor){
                    $detalle = new detalle();
                    $detalle->setIdSolicitud($solicitud->ultimo());
                    $detalle->setIdSuministro($valor['idSuministro']);
                    $detalle->setCantidad($valor['cantidad']);
                    $detalle->add();
                }

                echo $resp;
            }else{
                echo $resp;
            }

        }

        public function showData(){
            $sol = new solicitud();
            $lista = \mysqli_fetch_all($sol->mostrar());

            if(count($lista) == 0){
                echo "";
            }else{
                echo json_encode($lista);
            }
        }

        public function showDataUser(){
            $sol = new solicitud();
            $lista = \mysqli_fetch_all($sol->mostrarUser());

            if(count($lista) == 0){
                echo "";
            }else{
                echo json_encode($lista);
            }
        }

        public function showPendientes(){
            $sol = new solicitud();
            $lista = \mysqli_fetch_all($sol->mostrarPendiente());

            if(count($lista) == 0){
                echo "";
            }else{
                echo json_encode($lista);
            }
        }

        public function detalleSolicitud($id){
            $detalle = new detalle();
            $lista = \mysqli_fetch_all($detalle->detalleSol($id['id']));

            if(count($lista) == 0){
                echo "";
            }else{
                echo json_encode($lista);
            }
        }

        public function denegarSolicitud($id){
            $sol = new solicitud();
            $resp = $sol->updateEstado($id['id'],"DENEGADA"," ");
            echo $resp;
        }

        public function confirmarSolicitud($id){

            $detalle = new detalle();
            $suministro = new suministro();
            $lista = \mysqli_fetch_all($detalle->showDetalles($id['id']));

            for($i=0; $i < sizeof($lista); $i++){
                $suministro->setIdSuministro($lista[$i][1]);
                $suministro->setStock($lista[$i][3]-$lista[$i][2]);
                $suministro->updateStock();
            }

            $sol = new solicitud();
            $resp = $sol->updateEstado($id['id'],"COMPLETA", "tiene");
            echo $resp;
        }

    }

?>