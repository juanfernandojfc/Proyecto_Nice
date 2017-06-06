<?php
/**
 * Created by PhpStorm.
 * User: Carlos Mario
 * Date: 1/12/2016
 * Time: 11:22 PM
 */

namespace Model;


    class DetalleSolicitud{
        private $idSuministro;
        private $idSolicitud;
        private $cantidad;

        public function __construct(){
            $this->con= new conexion();
        }

        /**
         * @return mixed
         */
        public function getIdSuministro()
        {
            return $this->idSuministro;
        }

        /**
         * @param mixed $idSuministro
         */
        public function setIdSuministro($idSuministro)
        {
            $this->idSuministro = $idSuministro;
        }

        /**
         * @return mixed
         */
        public function getIdSolicitud()
        {
            return $this->idSolicitud;
        }

        /**
         * @param mixed $idSolicitud
         */
        public function setIdSolicitud($idSolicitud)
        {
            $this->idSolicitud = $idSolicitud;
        }

        /**
         * @return mixed
         */
        public function getCantidad()
        {
            return $this->cantidad;
        }

        /**
         * @param mixed $cantidad
         */
        public function setCantidad($cantidad)
        {
            $this->cantidad = $cantidad;
        }

        public function add(){
            $sql = "INSERT INTO detalle_solicitud(idSolicitud, idSuministro, cantidad) VALUES ('{$this->idSolicitud}','{$this->idSuministro}','{$this->cantidad}')";
            return $this->con->consultaRetorno($sql);
        }

        public function detalleSol($id){
            $sql = "SELECT d.idSolicitud, s.idSuministro, s.referenciaSum, s.nombreSum, s.stock, s.tipo 
                    FROM detalle_solicitud AS d 
                    INNER JOIN suministro AS s ON s.idSuministro=d.IdSuministro
                    WHERE d.idSolicitud = $id";
            $datos = $this->con->consultaRetorno($sql);
            return $datos;
        }

    }

?>