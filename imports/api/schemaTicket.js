import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const BusTicketSchema = new SimpleSchema({
    origen:{
        type:String,
        label:"Origen",
        allowedValues:['La Ceiba','Choluteca','Trujillo','Comayagua','Santa Rosa de Copán','San Pedro de Sula'
        ,'Yuscarán','Tegucigalpa','Puerto Lempira','La Esperanza','La Paz','Gracias','Nuevo Ocotepeque','Juticalpa'
        ,'Santa Bárbara','Nacaome','Yoro'],
        defaultValue: 'Tegucigalpa',
        min:5
    },
    propietario:{
        type:String,
        label:"ID Usuario",
        autoValue: function() {
            return this.userID
        }
    },
    destino:{
        type:String,
        label:"Destino",
        allowedValues:['La Ceiba','Choluteca','Trujillo','Comayagua','Santa Rosa de Copán','San Pedro de Sula'
        ,'Yuscarán','Tegucigalpa','Puerto Lempira','La Esperanza','La Paz','Gracias','Nuevo Ocotepeque','Juticalpa'
        ,'Santa Bárbara','Nacaome','Yoro'],
        defaultValue: 'Tegucigalpa',
        min:5
    },
    fechaSal:{
        type:Date,
        label:"Fecha Salida",
    },
    fechaReg:{
        type:Date,
        label:"Fecha Regreso",
        optional: true
    },
    clase:{
        type:String,
        label:"Clase",
        allowedValues: ['Primera', 'Turista'],
        defaultValue: 'Turista'
    },
    cantPasajeros:{
        type: Number,
        label:"Cantidad de personas",
        defaultValue:1,
        min:1,
        max:15
    },

});
