
CREATE DATABASE teyet;
USE teyet;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
--
-- Base de datos: `teyet`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `condiciones_iva`
--

CREATE TABLE IF NOT EXISTS `condiciones_iva` (
  `id_cond_iva` int(2) NOT NULL AUTO_INCREMENT,
  `condicion_iva` varchar(50) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id_cond_iva`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=5 ;

--
-- Volcado de datos para la tabla `condiciones_iva`
--

INSERT INTO `condiciones_iva` (`id_cond_iva`, `condicion_iva`) VALUES
(0, 'Responsable Inscripto'),
(1, 'Consumidor Final'),
(2, 'Exento'),
(3, 'Monotributista'),
(4, 'Desconocido');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_facturacion`
--

CREATE TABLE IF NOT EXISTS `datos_facturacion` (
  `id_datos_fac` int(5) NOT NULL AUTO_INCREMENT,
  `institucion` varchar(50) COLLATE utf8_spanish_ci DEFAULT NULL,
  `localidad` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `domicilio` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `condicion_iva` int(2) NOT NULL,
  `cuil` varchar(25) COLLATE utf8_spanish_ci DEFAULT NULL,
  `fecha_pago` date DEFAULT NULL,
  `cajero` varchar(60) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nro_factura` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL,
  PRIMARY KEY (`id_datos_fac`),
  KEY `condicion_iva` (`condicion_iva`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=10647 ;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_inscripcion`
--

CREATE TABLE IF NOT EXISTS `estados_inscripcion` (
  `id_estado_insc` int(2) NOT NULL,
  `estado_insc` varchar(50) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id_estado_insc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `estados_inscripcion`
--

INSERT INTO `estados_inscripcion` (`id_estado_insc`, `estado_insc`) VALUES
(0, 'Registrado (aun no pago)'),
(1, 'Registrado (ya pago)'),
(2, 'Registrado (ya pago y retiro certificado)');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `formas_pago`
--

CREATE TABLE IF NOT EXISTS `formas_pago` (
  `id_forma_pago` int(2) NOT NULL,
  `forma_pago` varchar(50) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id_forma_pago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `formas_pago`
--

INSERT INTO `formas_pago` (`id_forma_pago`, `forma_pago`) VALUES
(0, 'Pago en Evento'),
(1, 'Deposito Bancario'),
(2, 'Transferencia Bancaria');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscripciones`
--

CREATE TABLE IF NOT EXISTS `inscripciones` (
  `id_persona` int(5) NOT NULL,
  `nro_inscripcion` int(6) NOT NULL,
  `id_tipo_insc` int(2) NOT NULL,
  `id_forma_pago` int(2) NOT NULL,
  `id_estado_insc` int(2) NOT NULL,
  `id_datos_fac` int(5) DEFAULT NULL,
  `fecha_hora` varchar(15) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id_persona`),
  KEY `id_tipo_insc` (`id_tipo_insc`),
  KEY `id_forma_pago` (`id_forma_pago`),
  KEY `id_estado_insc` (`id_estado_insc`),
  KEY `id_datos_fac` (`id_datos_fac`),
  KEY `nro_inscripcion` (`nro_inscripcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `original`
--

CREATE TABLE IF NOT EXISTS `original` (
  `nro_inscripcion` int(6) DEFAULT NULL,
  `nombre` varchar(75) DEFAULT NULL,
  `universidad` varchar(75) DEFAULT NULL,
  `fecha_inscripcion` varchar(75) DEFAULT NULL,
  `forma_pago` varchar(75) DEFAULT NULL,
  `tipo_inscripcion` varchar(75) DEFAULT NULL,
  `precio` varchar(75) DEFAULT NULL,
  `correo` varchar(75) DEFAULT NULL,
  `facturacion_cuil` varchar(75) DEFAULT NULL,
  `facturacion_institucion` varchar(75) DEFAULT NULL,
  `facturacion_localidad` varchar(75) DEFAULT NULL,
  `facturacion_domicilio` varchar(75) DEFAULT NULL,
  `facturacion_telefono` varchar(75) DEFAULT NULL,
  `facturacion_condicion_iva` varchar(75) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personas`
--

CREATE TABLE IF NOT EXISTS `personas` (
  `id_persona` int(5) NOT NULL AUTO_INCREMENT,
  `ayn` varchar(75) CHARACTER SET latin1 NOT NULL,
  `correo` varchar(75) CHARACTER SET latin1 NOT NULL,
  `lugar_trabajo` varchar(75) CHARACTER SET latin1 DEFAULT NULL,
  `universidad` varchar(100) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id_persona`),
  UNIQUE KEY `correo` (`correo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=11790 ;


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_inscripcion`
--

CREATE TABLE IF NOT EXISTS `tipos_inscripcion` (
  `id_tipo_insc` int(2) NOT NULL,
  `tipo_inscripcion` varchar(75) COLLATE utf8_spanish_ci NOT NULL,
  `precio_insc_temp` decimal(10,0) NOT NULL,
  `precio_insc_tard` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id_tipo_insc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `tipos_inscripcion`
--

INSERT INTO `tipos_inscripcion` (`id_tipo_insc`, `tipo_inscripcion`, `precio_insc_temp`, `precio_insc_tard`) VALUES
(0, 'Asistentes docentes nivel medio/terciario', '200', '240'),
(1, 'Asistentes docentes UNNE', '250', '300'),
(2, 'Asistentes en general', '350', '400'),
(3, 'Asistentes Estudiantes universitarios y/o terciarios', '80', '100'),
(4, 'Autores miembros de Universidades de la RedUNCI', '400', '480'),
(5, 'Otros Autores', '480', '580');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `datos_facturacion`
--
ALTER TABLE `datos_facturacion`
  ADD CONSTRAINT `FK_datosFacturacion_idCondIVA` FOREIGN KEY (`condicion_iva`) REFERENCES `condiciones_iva` (`id_cond_iva`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `inscripciones`
--
ALTER TABLE `inscripciones`
  ADD CONSTRAINT `FK_inscripciones_datosFac` FOREIGN KEY (`id_datos_fac`) REFERENCES `datos_facturacion` (`id_datos_fac`),
  ADD CONSTRAINT `FK_personas_estadoInsc` FOREIGN KEY (`id_estado_insc`) REFERENCES `estados_inscripcion` (`id_estado_insc`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_personas_formaPago` FOREIGN KEY (`id_forma_pago`) REFERENCES `formas_pago` (`id_forma_pago`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_personas_idPersona` FOREIGN KEY (`id_persona`) REFERENCES `personas` (`id_persona`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_personas_tipoInsc` FOREIGN KEY (`id_tipo_insc`) REFERENCES `tipos_inscripcion` (`id_tipo_insc`) ON DELETE CASCADE ON UPDATE CASCADE;
