var app = app || {};

app.FlowersCollection = Backbone.Collection.extend(
{
    model: app.singleFlower

});

app.EuropeanFlower = Backbone.Collection.extend(
    {
        model: app.singleFlower

    });