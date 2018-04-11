Meteor.methods({
    addTicket(fechaSal,fechaReg,destino,origen,clase,cantPasajeros){
        /*if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }*/
        TicketsMongo.insert({
            fechaSal: fechaSal,
            fechaReg: fechaReg,
            destino: destino,
            origen: origen,
            clase: clase,
            cantPasajeros: cantPasajeros,
            //propietario: ''
        });
        console.log(TicketsMongo.find().fetch());

    },
    
    updateTicket(ticket){
        /*if(!Meteor.userId()){
            throw new Meteor.Error('not-authorized');
        }*/
        tickets.update(ticket._id, {
            $set: {fechaSal: ticket.fechaSal}
        },{
            $set: {fechaReg: ticket.fechaReg}
        },{
            $set: {destino: ticket.destino}
        },{
            $set: {origen: ticket.origen}
        },{
            $set: {clase: ticket.clase}
        },{
            $set: {cantPasajeros: ticket.cantPasajeros}
        });
    },
    
    deleteTicket(ticket){
        /*if(Meteor.userId() !== ticket.user){
            throw new Meteor.Error('not-authorized');
        }*/
        TicketsMongo.remove(ticket._id);
    }
})