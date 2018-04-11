TicketsMongo = new Mongo.Collection("tickets");

Meteor.publish("allTickets", function(){
    return TicketsMongo.find();
});

Meteor.publish("userTickets", function(){
    return TicketsMongo.find({user: this.userId});
});