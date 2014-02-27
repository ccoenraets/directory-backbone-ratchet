app.views.ReportsView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        this.model.reports.fetch();
        $(".scroller", this.el).html(new app.views.EmployeeListView({model: this.model.reports}).render().el);
        return this;
    },

    events: {
        "click .btn-back": "back"
    },

    back: function() {
        window.history.back();
        return false;
    }

});
