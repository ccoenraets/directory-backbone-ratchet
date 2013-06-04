app.views.EmployeeView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    events: {
        "click .button-prev": "back"
    },

    back: function(event) {
        window.history.back();
        return false;
    }

});
